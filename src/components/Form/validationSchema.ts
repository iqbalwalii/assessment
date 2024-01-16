// validationSchema.js

import * as Yup from "yup";

export const personalValidationSchema = Yup.object().shape({
  Name: Yup.string().required().min(3),
  Age: Yup.number().required().positive().integer(),
  Sex: Yup.string().required().oneOf(["Male", "Female"]),
  Mobile: Yup.string()
    .required()
    .matches(/^[6-9]\d{9}$/, "Invalid Indian Mobile Number"),
  GovtIssuedIDType: Yup.string().oneOf(["Aadhar", "PAN"]),
  Adhaar: Yup.string()
    .matches(/^[2-9]\d{11}$/, "Invalid Aadhar Number")
    .notOneOf(["012345678901", "112345678901"], "Should not start with 0 or 1"),
  Pan: Yup.string().matches(/^[A-Z]{5}\d{4}[A-Z]{1}$/, "Invalid PAN Number"),
});

export const addressValidationSchema = Yup.object().shape({
  Address: Yup.string().optional(),
  State: Yup.string().optional(),
  City: Yup.string().optional(),
  Country: Yup.string().optional(),
  Pincode: Yup.string().optional().matches(/^\d*$/, "Numeric characters only"),
});
