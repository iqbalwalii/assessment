import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalValidationSchema } from "./validationSchema";

const PersonalDetailsForm = ({}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(personalValidationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name"
        {...register("Name")}
        error={!!errors.Name}
        helperText={errors.Name?.message}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Age"
        type="number"
        {...register("Age")}
        error={!!errors.Age}
        helperText={errors.Age?.message}
        fullWidth
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Sex</InputLabel>
        <Select {...register("Sex")} error={!!errors.Sex}>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
      </FormControl>
      {errors.Sex && <p>{errors.Sex.message}</p>}

      <TextField
        label="Mobile"
        {...register("Mobile")}
        error={!!errors.Mobile}
        helperText={errors.Mobile?.message}
        fullWidth
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Govt Issued ID Type</InputLabel>
        <Select
          {...register("GovtIssuedIDType")}
          error={!!errors.GovtIssuedIDType}
        >
          <MenuItem value="Aadhar">Aadhar</MenuItem>
          <MenuItem value="PAN">PAN</MenuItem>
        </Select>
      </FormControl>
      {errors.GovtIssuedIDType && <p>{errors.GovtIssuedIDType.message}</p>}

      {watch("GovtIssuedIDType") === "Aadhar" && (
        <TextField
          label="Govt Issued ID (Aadhar)"
          {...register("Adhaar")}
          error={!!errors.Adhaar}
          helperText={errors.Adhaar?.message}
          fullWidth
          margin="normal"
        />
      )}

      {watch("GovtIssuedIDType") === "PAN" && (
        <TextField
          label="Govt Issued ID (PAN)"
          {...register("Pan")}
          error={!!errors.Pan}
          helperText={errors.Pan?.message}
          fullWidth
          margin="normal"
        />
      )}

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default PersonalDetailsForm;
