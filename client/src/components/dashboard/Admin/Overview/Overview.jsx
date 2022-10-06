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
import { OverviewContainer } from "./Overviewstyle.js";
import Pagination from "../Pagination/pagination";
import axios from "axios";
import { amount } from "../../../../atoms/bankFormAtom";
import { currentTransactionState } from "../../../../atoms/currentTransactionAtom";

const Overview = () => {
  const [ShowModal, setShowModal] = useRecoilState(minModalState);
  const [EditModal, setEditModal] = useRecoilState(editModalState);
  const [currentTransaction, setCurrentTransaction] = useRecoilState(
    currentTransactionState
  );

  // console.log(currentTransaction);
  // const [airtimeAmount, setAirtimeAmount]=useRecoilState(amount)
  const [overview, setOverview] = useState([]);
  const [openModal, setOpenModal] = useState(true);
  const [alldetails, setAllDetails] = useState({});

  const handleClick = (row) => {
    // e.preventDefault();
    setAllDetails(row);
    setOpenModal(false);
    setShowModal(true);
    setEditModal(false);
    // setAllDetails(e);
  };

  const result = async () => {
    const response = await axios.get(
      `http://localhost:4000/account/allTransactions`
    );
    console.log(response);
    if (response.status === 200) {
      return setOverview(response.data.content);
    }
  };
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => overview, []);

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
          {overview.map((row) => {
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
        <button onClick={() => gotoPage(pageCount - 2)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      </div>

      {ShowModal && <Editcancel alldetails={alldetails} />}
    </OverviewContainer>
  );
};
export default Overview;
