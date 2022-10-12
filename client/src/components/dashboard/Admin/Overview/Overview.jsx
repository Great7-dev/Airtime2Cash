import React, { useEffect, useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import COLUMNS from "../columns";
import mockdata from "../mockdata";
import { BsThreeDots } from "react-icons/bs";
import "./Overviewstyle.js";
import Editcancel from "../EditModal/Editbutton/Editcancel";
import {
  editModalState,
  minModalState,
} from "../../../../atoms/successModalAtom";
import { useRecoilState } from "recoil";
import { OverviewContainer, StyledPaginateContainer } from "./Overviewstyle.js";
import Pagination from "../Pagination/pagination";
import axios from "axios";
import { amount } from "../../../../atoms/bankFormAtom";
import { currentTransactionState } from "../../../../atoms/currentTransactionAtom";
import { result } from "../../../../api/auth";

const Overview = () => {
  const [ShowModal, setShowModal] = useRecoilState(minModalState);
  // const [allTransactions, setAllTransactions] = useState([]);
  const [EditModal, setEditModal] = useRecoilState(editModalState);
  const [currentTransaction, setCurrentTransaction] = useRecoilState(
    currentTransactionState
  );
  const [overview, setOverview] = useState([]);
  const [openModal, setOpenModal] = useState(true);
  const [alldetails, setAllDetails] = useState({});
  const [controlledPageCount, setControlledPageCount] = useState(1);
  
 
  const handleClick = (row) => {
    setAllDetails(row);
    setOpenModal(false);
    setShowModal(true);
    setEditModal(false);
    
  };
  
  const getresult = async () => {
    const getResultData = await result(pageIndex)
    setOverview(getResultData)
    setControlledPageCount(getResultData.totalPages)
  }

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => overview, []);
 
  useEffect(() => {
    getresult();
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
    state: { pageIndex, pageSize },
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination
  );

useEffect(() => {
  getresult(pageIndex);
}, [pageIndex])
  return (
    <OverviewContainer>
      <h1 className="ad-dash">Admin Dashboard</h1>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              <th>Actions</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {overview?.content?.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.userEmail}</td>
                <td>{row.phoneNumber}</td>
                <td>{row.airtimeAmount}</td>
                <td>{row.airtimeAmountToReceive}</td>
                <td>
                  <BsThreeDots
                    className="act"
                    onClick={() => {
                      handleClick(row);
                      setCurrentTransaction(row);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </td>
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
        <button onClick={() => gotoPage(pageIndex -1)} disabled={!canPreviousPage} className="bt">
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className="bt">
          Previous
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage} className="bt">
          Next
        </button>{" "}
        <button onClick={() => gotoPage(overview?.totalPages - 1)} disabled={!canNextPage} className="bt">
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {overview.totalPages}
          </strong>{" "}
        </span>
        </StyledPaginateContainer>
      {ShowModal && <Editcancel alldetails={alldetails} />}
    </OverviewContainer>
  );
};
export default Overview;
