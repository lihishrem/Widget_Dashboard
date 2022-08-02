import axios from "axios";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "./Table";

export const Transactions: FC<{}> = () => {
  const { widgets } = useSelector((state: any) => state.widgets);
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
      console.log("data",data);
      
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: " ",
        // First group columns
        columns: [
          {
            Header: "NFT",
            accessor: "show.name",
          },
          {
            Header: "Tx Hash",
            accessor: "show.type",
          },
          {
            Header: "Tx Type",
            accessor: "",
          },
          {
            Header: "From",
            accessor: "",
          },
          {
            Header: "To",
            accessor: "",
          },
          {
            Header: "Date",
            accessor: "",
          },
          {
            Header: "Fees",
            accessor: "",
          },
          {
            Header: "Status",
            accessor: "",
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
};
