// AssessmentFormTypes.ts
import * as yup from "yup";

export interface FormData {
  Name: string;
  Age: number;
  Sex: string;
  Mobile: string;
  GovtIssuedIDType?: string;
  GovtIssuedID?: string;
}
