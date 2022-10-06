import axios from "axios";
import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import { useTable, usePagination } from "react-table";
// import { Mydata } from "../../../../api/auth";
import ColumnsTranc from "../columnsTranc";
// import mockdata from "../mockdata";
import "./Transactionstyle.js";
import { TransactionContainer } from "./Transactionstyle.js";

const Transactions = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  
  

  const result = async () => {
    const response = await axios.get(
      `http://localhost:4000/account/allTransactions`
    );
    setAllTransactions(response.data.content);
  };

  const columns = useMemo(() => ColumnsTranc, []);
  const data = useMemo(() => allTransactions, []);

  useEffect(() => {
    result();
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
          {allTransactions.map((row) => {
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
      <div>
        <button onClick={() => gotoPage(1)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      </div>
      {/* <usePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={allTransactions.length}
        rowsPerPage={pageSize}
        page={pageIndex}
        onChangePage={gotoPage}
        onChangeRowsPerPage={(e) => setPageSize(Number(e.target.value))}
      /> */}
    </TransactionContainer>
  );
};
export default Transactions;
