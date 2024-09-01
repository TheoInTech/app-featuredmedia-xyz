import {
  InputLabel,
  Stack,
  TextField,
  TextFieldProps,
  useTheme,
} from "@mui/material";

export const OutlinedInput = ({ label, ...props }: TextFieldProps) => {
  const theme = useTheme();

  return (
    <Stack rowGap={1}>
      <InputLabel
        sx={{
          ...theme.typography.base.xs,
          color: theme.palette.neutral[20],
        }}
      >
        {label}
      </InputLabel>
      <TextField
        variant="outlined"
        InputProps={{
          disableUnderline: true,
        }}
        sx={{
          border: `1px solid ${theme.palette.neutral[80]}`,
          borderRadius: theme.spacing(4),
          outline: "none",
          padding: theme.spacing(1, 2),
          width: "100%",
          "& fieldset": {
            border: "none",
            outline: "none",
          },
          "& .MuiInputBase-input": {
            border: "none",
            outline: "none",
            color: theme.palette.neutral[0],
            padding: "0px",
            margin: 0,
            width: "100%",
            "&::placeholder": {
              color: theme.palette.neutral[80],
              opacity: 1,
            },
            "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
              "-webkit-appearance": "none",
              margin: 0,
            },
          },
          "&.Mui-disabled": {
            color: theme.palette.neutral[60],
          },
        }}
        {...props}
      />
    </Stack>
  );
};
