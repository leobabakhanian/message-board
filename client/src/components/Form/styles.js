import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginBottom: 10,
    },
  },
  paper: {
    padding: 20,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "100%",
    margin: "10px 0",
  },
  buttonSubmit: {
    margin: "10px 0 !important",
    background: "#42b72a !important",
  },
  buttonClear: {
    background: "#1976d2 !important",
  },
  header: {
    marginBottom: "10px !important",
  },
}));
