import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Box, TextField, Button } from "@mui/material";
import { updateNote } from "../../redux/features/note/noteSlice";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

export default function UpdateNote() {
  const { selectedNote } = useSelector((state) => state.note);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, reset, control } = useForm();

  const onSubmit = (data) => {
    dispatch(updateNote({ ...data, id: selectedNote.id })).then(() =>
      navigate("/")
    );
  };

  return (
    <Container maxWidth="xs">
      <form>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Controller
            name="title"
            control={control}
            render={({ field: { onChange, value = selectedNote.title } }) => (
              <TextField
                id="outlined-basic"
                label="Title"
                value={value}
                variant="outlined"
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, value = selectedNote.title } }) => (
              <TextField
                id="outlined-basic"
                label="description"
                value={value}
                variant="outlined"
                onChange={onChange}
              />
            )}
          />

          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="success"
          >
            Güncelle
          </Button>
          <Button onClick={() => reset()} variant="contained" color="primary">
            Sıfırla
          </Button>
        </Box>
      </form>
    </Container>
  );
}


// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Container, Box, TextField, Button } from "@mui/material";
// import { updateNote } from "../../redux/features/note/noteSlice";
// import { useNavigate } from "react-router-dom";

// export default function UpdateNote() {
//   const { selectedNote } = useSelector((state) => state.note);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [values, setValues] = React.useState({
//     id: selectedNote.id,
//     title: selectedNote.title,
//     description: selectedNote.description,
//   });

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   const handleSubmit = () => {
//     dispatch(updateNote(values));
//     navigate("/")
//   };

//   return (
//     <div>
//       <Container maxWidth="xs">
//         <form>
//           <Box
//             component="form"
//             sx={{
//               "& > :not(style)": { m: 2, width: "50ch" },
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField
//               id="outlined-basic"
//               label="Title"
//               value={values.title}
//               variant="outlined"
//               onChange={handleChange("title")}
//             />
//             <TextField
//               id="outlined-basic"
//               label="Description"
//               variant="outlined"
//               value={values.description}
//               onChange={handleChange("description")}
//             />
//             <Button
//               variant="contained"
//               color="success"
//               sx={{ maxWidth: "50%", alignItems: "center" }}
//               onClick={() => handleSubmit()}
//             >
//               Güncelle
//             </Button>
//           </Box>
//         </form>
//       </Container>
//     </div>
//   );
// }
