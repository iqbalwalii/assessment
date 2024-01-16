import { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Paper,
  Grid,
  Container,
} from "@mui/material";
import AddressForm from "./AddressForm";
import PersonalDetailsForm from "./PersonalForm";
import { UseSelector, useSelector } from "react-redux";

const steps = ["Personal Details", "Address"];

const StepperForm = () => {
  const pageIndex = useSelector((state: any) => state.details.pageIndex);
  const [activeStep, setActiveStep] = useState(pageIndex);
  console.log(pageIndex);
  return (
    <Container>
      <Paper elevation={3} style={{ padding: "30px", marginTop: "30px" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {pageIndex === 0 ? <PersonalDetailsForm /> : <AddressForm />}
      </Paper>
    </Container>
  );
};

export default StepperForm;
