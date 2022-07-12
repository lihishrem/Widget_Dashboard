import React, { useMemo } from "react";
import { Table } from "./Table";
import makeData from "./MakeData";

// SEE TABLE FOR NEW STUFF!
// App just contains boilderplate

export default function Transactions() {
  const columns = useMemo(
    () => [
      {
        Header: "Info",
        columns: [
          {
            Header: "Widget Id",
            accessor: "",
          },
          {
            Header: "Tx Value",
            accessor: "age",
          },
          {
            Header: "From",
            accessor: "visits",
          },
          {
            Header: "To",
            accessor: "status",
          },
          {
            Header: "Method",
            accessor: "progress",
          },
          {
            Header: "Age",
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

  const data = useMemo(() => makeData(100), []);

  return <Table columns={columns} data={data} />;
}
