import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, Container, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { createNote } from "../../redux/features/note/noteSlice";
import { useNavigate } from "react-router-dom";

export default function AddNote() {
  const { handleSubmit, reset, control } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(createNote(data)).then(() => navigate("/"));
  };

  return (
    <Container maxWidth="xs" style={{ paddingTop: "2rem" }}>
      <form>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "50ch" },
          }}
        >
          <Controller
            name={"title"}
            control={control}
            render={({ field: { onChange, value } }) => (
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
            name={"description"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                id="outlined-basic"
                label="Description"
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
            Ekle
          </Button>
          <Button onClick={() => reset()} variant="contained" color="primary">
            Sıfırla
          </Button>
        </Box>
      </form>
    </Container>
  );
}



// import { Box, Button, TextField } from "@mui/material";
// import { Container } from "@mui/system";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createNote } from "../../redux/features/note/noteSlice";

// export default function AddNote() {

//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [values, setValues] = React.useState({
//    title:"",
//    description:""
//   });

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   const handleSubmit = async () => {
//     dispatch(createNote(values))
//     navigate("/")
//   }

//   return (
//     <div>
//       <Container maxWidth="xs" style={{ paddingTop: "2rem" }}>
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
//               onChange={handleChange('title')}

//             />
//             <TextField
//               id="outlined-basic"
//               label="Description"
//               variant="outlined"
//               value={values.description}
//               onChange={handleChange('description')}
//             />
//             <Button
//               variant="contained"
//               color="success"
//               // type="submit"
//               sx={{ maxWidth: "50%", alignItems: "center" }}
//               onClick = {() => handleSubmit()}
//             >
//               Ekle
//             </Button>
//           </Box>
//         </form>
//       </Container>
//     </div>
//   );
//}

