import React from "react";
import {
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setPageIndex, setUserData } from "../../store/userSlice";

const CheckScreen = () => {
  const address = useSelector((state) => state.details.address);
  const formData = useSelector((state) => state.details.personal);
  const userData = useSelector((state) => state.details.userData);
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    if (data) {
      const user = { ...address, ...formData, id: userData.length };
      dispatch(setUserData(user));
      dispatch(setPageIndex(3));
    }
  };
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Your submitted details
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary={`Name: ${formData.Name}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Age: ${formData.Age}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Sex: ${formData.Sex}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Mobile: ${formData.Mobile}`} />
          </ListItem>

          <ListItem>
            <ListItemText primary={`Country: ${address.Country}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`State: ${address.State}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`City: ${address.City}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Pincode: ${address.Pincode}`} />
          </ListItem>
        </List>

        <Button
          type="submit"
          onClick={onSubmit}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </Paper>
    </Container>
  );
};

export default CheckScreen;
