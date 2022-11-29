import { Box, Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNote } from "../../redux/features/note/noteSlice";

export default function AddNote() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [values, setValues] = React.useState({
   title:"",
   description:""
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async () => {
    dispatch(createNote(values))
    navigate("/")
  }

  return (
    <div>
      <Container maxWidth="xs" style={{ paddingTop: "2rem" }}>
        <form>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField 
              id="outlined-basic" 
              label="Title" 
              value={values.title}
              variant="outlined" 
              onChange={handleChange('title')}

            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={values.description}
              onChange={handleChange('description')}
            />
            <Button
              variant="contained"
              color="success"
              // type="submit"
              sx={{ maxWidth: "50%", alignItems: "center" }}
              onClick = {() => handleSubmit()}
            >
              Ekle
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
}
