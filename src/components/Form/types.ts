export interface FormData {
  Name: string;
  Age: number;
  Sex: string;
  Mobile: string;
  GovtIssuedIDType?: string;
  GovtIssuedID?: string;
}

export interface Addresses {
  Address: string;
  Country: string;
  State: string;
  City: string;
  Pincode: string;
}

export interface RootState {
  details: {
    personal: FormData;
    address: Addresses;
    userData: Array<FormData>;
    pageIndex: number;
  };
}
