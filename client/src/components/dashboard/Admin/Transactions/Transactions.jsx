import axios from "axios";
import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import { useTable, usePagination } from "react-table";
import { resultTrans } from "../../../../api/auth";
import ColumnsTranc from "../columnsTranc";
import "./Transactionstyle.js";
import { StyledPaginateContainer, TransactionContainer } from "./Transactionstyle.js";

const Transactions = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [alldetails, setAllDetails] = useState({});
  
  const getTrans = async () => {
    const getResultData = await resultTrans(pageIndex)
    setAllTransactions(getResultData);
   
  }

  const columns = useMemo(() => ColumnsTranc, []);
  const data = useMemo(() => allTransactions, []);

  useEffect(() => {
    getTrans();
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  useEffect(() => {
    getTrans(pageIndex);
  }, [pageIndex])
  return (
    <TransactionContainer>
      <h1 className="ad-tran">Transactions</h1>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.Header}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {allTransactions?.content?.map((row) => {
            return (
              <tr>
                <td>{row.phoneNumber}</td>
                <td>{row.airtimeAmount}</td>
                <td>{
                  row.updatedAt.substring(0,10)
                
                }</td>
                <td>{row.network}</td>
                <td status={row.aStatus}>{row.aStatus}</td>
              </tr>
            );
          })}
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
        <StyledPaginateContainer>
        <button onClick={() => gotoPage(pageIndex)} disabled={!canPreviousPage} className="bt">
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className="bt">
          Previous
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage} className="bt">
          Next
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="bt">
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {allTransactions.totalPages}
          </strong>{" "}
        </span>
        </StyledPaginateContainer>
    </TransactionContainer>
  );
};
export default Transactions;
