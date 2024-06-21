import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import categories from '../data/categories';


export default function AnchorTemporaryDrawer(props) {
  // using the state to toggle the drawer from the left side of the screen
  const [state, setState] = React.useState({
    left: false,
  });

  // using dark theme by default in the category list
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  // function to toggle the drawer from the left side of the screen
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // list of categories to be displayed in the drawer and applying styling to the drawer
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200, paddingLeft: 2, paddingRight: 2 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>Categories</ListItem>
      </List>
      <Divider />
      <List>
        { // displaying the list of categories in the drawer and setting the state variable when a particular category is clicked to fetch the news of that particular category
        categories.map((text, index) => (
          <ListItem style={{ height: 50, borderRadius: 3 }} key={text} disablePadding>
            <ListItemButton onClick={() => { props.setCategory(text) }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)} sx={{ color: 'black' }}><MenuIcon />Menu</Button>
        <ThemeProvider theme={darkTheme}>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </ThemeProvider>
      </React.Fragment>
    </div>
  );
}
