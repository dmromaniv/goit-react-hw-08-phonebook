import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

import { changeFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleOnChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <TextField
      id="standard-basic"
      label="Enter contact name"
      variant="standard"
      required
      onChange={handleOnChange}
      name="filter"
    />
  );
};
