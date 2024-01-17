import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./Columns";
import { useSelector } from "react-redux";
import { RootState } from "../Form/types";

export default function DataTable() {
  const rowData = useSelector((state: RootState) => state.details.userData);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
