import { Container, Grid } from '@mui/material'
import React from 'react'
import ActionList from '../../components/ActionList/ActionList'
import NoteList from '../../components/noteList/NoteList'

export default function Home() {
  return (
    <div>
        <Container maxWidth="xl" fixed style={{paddingTop:"1rem"}}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <ActionList />
          </Grid>
          <Grid item xs={9}>
            <NoteList />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
