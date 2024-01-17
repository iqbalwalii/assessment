import { Typography, Container, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPageIndex } from "../../store/userSlice";

const CompleteScreen = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setPageIndex(0));
  };
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 4,
      }}
    >
      <Typography variant="h5" gutterBottom>
        All Done
      </Typography>
      <img src="/success.gif" width="300" alt="success animation" />
      <Button onClick={onClickHandler} variant="contained" color="primary">
        Add User
      </Button>
    </Container>
  );
};

export default CompleteScreen;
