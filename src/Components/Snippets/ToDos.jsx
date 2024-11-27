import React, { useEffect, useState } from "react";
import Header from "../Header";

const api = "https://jsonplaceholder.typicode.com/todos";
const pageSizelimit = 22;

const ToDos = () => {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(pageSizelimit);
  const [noOfPages, setNoOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setNoOfPages(Math.ceil(data.length / pageSize));
      });
  });
  return (
    <>
      <Header title="ToDos" />
      <h1 className="text-6xl text-center font-bold">Get ToDos</h1>
      {data.map((todo, index) => (
        <p
          key={todo.id}
          className={`text-xl border-b-2 border-black  ${
            index >= pageSize * currentPage - pageSize &&
            index < pageSize * currentPage
              ? "block"
              : "hidden"
          }`}
        >
          {todo.id}&nbsp;{todo.title}
        </p>
      ))}
      <span className="flex justify-center gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-slate-500"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        {Array(noOfPages)
          .fill()
          .map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-slate-500 "
            >
              {i + 1}
            </button>
          ))}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-slate-500"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </span>
    </>
  );
};

export default ToDos;
