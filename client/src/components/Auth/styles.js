import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  root: {
    "& .MuiTextField-root": {
      margin: 10,
    },
  },
  avatar: {
    margin: 10,
    backgroundColor: "#2074d4",
  },
  form: {
    width: "100%",
    marginTop: 30,
  },
  submit: {
    marginTop: 20,
  },
  googleButton: {
    marginBottom: 20,
  },
  bottom: {
    marginTop: 10,
  },
}));
