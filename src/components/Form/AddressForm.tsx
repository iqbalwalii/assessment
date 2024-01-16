import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Autocomplete } from "@mui/material";
import axios from "axios";
import { addressValidationSchema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { setAddressDetails, setPageIndex } from "../../store/userSlice";
import { useDispatch } from "react-redux";
const AddressForm = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    resolver: yupResolver(addressValidationSchema),
  });
  const dispatch = useDispatch();
  const [countryOptions, setCountryOptions] = useState([]);

  const onSubmit = (data: any) => {
    if (data) {
      dispatch(setAddressDetails(data));
      dispatch(setPageIndex(2));
    }
  };
  const handleCountryChange = async (value: any) => {
    setValue("Country", value);
  };

  useEffect(() => {
    const fetchCountryOptions = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countries = response.data.map((country) => country.name.common);
        setCountryOptions(countries);
      } catch (error) {
        console.error("Error fetching country options:", error);
      }
    };

    fetchCountryOptions();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Address"
          {...register("Address")}
          error={!!errors.Address}
          helperText={errors.Address?.message}
          fullWidth
          margin="normal"
        />

        <TextField
          label="State"
          {...register("State")}
          error={!!errors.State}
          helperText={errors.State?.message}
          fullWidth
          margin="normal"
        />

        <TextField
          label="City"
          {...register("City")}
          error={!!errors.City}
          helperText={errors.City?.message}
          fullWidth
          margin="normal"
        />

        <Controller
          name="Country"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={countryOptions}
              onChange={(_, value) => handleCountryChange(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country"
                  error={!!errors.Country}
                  helperText={errors.Country?.message}
                  fullWidth
                  margin="normal"
                />
              )}
            />
          )}
        />

        <TextField
          label="Pincode"
          {...register("Pincode")}
          error={!!errors.Pincode}
          helperText={errors.Pincode?.message}
          fullWidth
          margin="normal"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddressForm;
