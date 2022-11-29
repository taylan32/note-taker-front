import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function ActionList() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          border: "0.5px solid gray",
          boxShadow: "0.5px",
        }}
      >
        <List>
          <ListItem>
            <ListItemButton>
              <Link to="/add-note" style={{ textDecoration: "none" }}>
                <ListItemText primary="Add a note" />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
