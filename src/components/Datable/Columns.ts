import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },
  { field: "Age", headerName: "Age", width: 130 },

  {
    field: "Sex",
    headerName: "Sex",
    width: 160,
  },
  { field: "Country", headerName: "Country", width: 170 },
  { field: "State", headerName: "State", width: 110 },
  { field: "City", headerName: "City", width: 100 },
  { field: "Pin", headerName: "Pin", width: 100 },
];
