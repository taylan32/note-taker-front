import { Button, Card, CardActions, CardContent, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../redux/features/note/noteSlice";

export default function NoteList() {

  const dispatch = useDispatch()
  const {notes, loading,errors} = useSelector(state => state.note)
  const [pageNumber, setPageNumber] = React.useState(1)
  const [pageSize, setPageSize] = React.useState(10)
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    dispatch(getNotes({pageNumber, pageSize})).then((response) => setData(response.payload.content))
  }, [pageNumber, pageSize])
  
  if(loading) return <div><CircularProgress /> </div>
  if(errors.length != 0) return (
  <div>
    {
      <ul>
        {
          errors.map((err) => (
            <li>{err.message}</li>
          ))
        }
      </ul>
    }
  </div>
  )
  return (
    <div>
      <Grid container spacing={1}>
        {data.map((data) => (
          <Grid item xs={6} key={data.id}>
            <Card>
              <CardContent>
                <Typography variant="h4" sx={{fontFamily:"Raleway"}}>{data.title}</Typography>
                <Typography>{data.description}</Typography>
              </CardContent>
              <CardActions sx = {{display:"flex", justifyContent:"flex-end"}}>
                <Button variant="contained">See details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
