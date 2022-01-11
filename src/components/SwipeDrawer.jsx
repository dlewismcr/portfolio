import * as React from "react";
import {Box, SwipeableDrawer, Button, List, Divider} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, right: open });
  };

  const list = () => (
    <Box
      sx={{ auto: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <NavLink to="/group">Group Project</NavLink>
      </List>
      <List>
        <NavLink to="/solo">Solo Project</NavLink>
      </List>
      <Divider />
      <List>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </List>
      <List>
        <NavLink to="/about">About Me</NavLink>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(true)}>burger icon</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
