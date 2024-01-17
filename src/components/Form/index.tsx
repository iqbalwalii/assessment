import { Stepper, Step, StepLabel, Paper, Container } from "@mui/material";
import AddressForm from "./AddressForm";
import PersonalDetailsForm from "./PersonalForm";
import { useSelector } from "react-redux";
import CompleteScreen from "./CompleteScreen";
import DataTable from "../Datable";
import CheckScreen from "./CheckScreen";

const steps = ["Personal Details", "Address", "Check", "Done"];

const StepperForm = () => {
  const pageIndex = useSelector((state: any) => state.details.pageIndex);
  console.log(pageIndex);
  return (
    <Container style={{ position: "absolute", top: "0", left: "5%" }}>
      <Paper elevation={3} style={{ padding: "30px", marginTop: "30px" }}>
        <Stepper activeStep={pageIndex} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {pageIndex === 0 ? (
          <PersonalDetailsForm />
        ) : pageIndex === 1 ? (
          <AddressForm />
        ) : pageIndex === 2 ? (
          <CheckScreen />
        ) : (
          <CompleteScreen />
        )}
      </Paper>
      <Paper elevation={3} style={{ padding: "30px", marginTop: "30px" }}>
        <DataTable />
      </Paper>
    </Container>
  );
};

export default StepperForm;
