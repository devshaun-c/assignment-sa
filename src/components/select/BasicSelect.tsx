import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect({
  value,
  setValue,
  options,
  placeholder,
}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box>
      <FormControl
        size="medium"
        sx={{
          m: 1,
          minWidth: "100%",
          width: "400px",
          maxWidth: "400px",

          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "3px solid var(--secondary-color) !important",
          },
        }}
      >
        <Select value={value} onChange={handleChange} displayEmpty>
          <MenuItem disabled value="">
            <span className="fc-g">{placeholder}</span>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

interface Props {
  value: any;
  setValue: any;
  options: any[];
  placeholder: string;
}
