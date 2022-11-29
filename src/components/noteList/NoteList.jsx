import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNote,
  getNotes,
  setSelectedNote,
} from "../../redux/features/note/noteSlice";
import EditIcon from "@mui/icons-material/Edit";

export default function NoteList() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { notes, loading, errors } = useSelector(
    (state) => state.note
  );
  React.useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);
  const handleDelete = async (id) => {
    dispatch(deleteNote(id));
  };

  const handleSetSelectedNote = (data) => {
    dispatch(setSelectedNote(data));
  };

  const handleSeeDetails = (data) => {
    dispatch(setSelectedNote(data))
    navigate(`/detail/${data.id}`)
  };

  if (loading)
    return (
      <div>
        <CircularProgress />{" "}
      </div>
    );
  if (errors.length !== 0)
    return (
      <div>
        {
          <ul>
            {errors.map((err) => (
              <li>{err.message}</li>
            ))}
          </ul>
        }
      </div>
    );
  return (
    <div>
      <Grid container spacing={1}>
        {notes?.map((data) => (
          <Grid item xs={6} key={data.id}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={11}>
                    <Typography variant="h4" sx={{ fontFamily: "Raleway" }}>
                      {data.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Link to="/update-note">
                      <EditIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => handleSetSelectedNote(data)}
                      />
                    </Link>
                  </Grid>
                </Grid>
                <Typography>{data.description}</Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleSeeDetails(data)}
                >
                  Detaylar
                </Button>

                <Button
                  variant="contained"
                  onClick={() => handleDelete(data.id)}
                >
                  Sil
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
