import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function NoteDetail() {
  const { loading, selectedNote } = useSelector((state) => state.note);
  if (loading) <div>Loading</div>;
  return (
    <div>
      <Container maxWidth="sm" style={{marginBlock:"5rem"}}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Title
            </Typography>
            <Typography variant="h4" component="div">
              {selectedNote.title}
            </Typography>
            <Typography sx={{ mt: 1.5 }} color="text.secondary">
              description
            </Typography>
            <Typography variant="h6">
              {selectedNote.description}
             
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
