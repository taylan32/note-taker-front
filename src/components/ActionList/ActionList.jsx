import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

export default function ActionList() {
  return (
    <div>
      <Box sx={{width :'100%', bgcolor:"background.paper", border:"0.5px solid gray", boxShadow:"0.5px"}}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="List Notes" />
            </ListItemButton>
              <Divider />
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Add a note" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
