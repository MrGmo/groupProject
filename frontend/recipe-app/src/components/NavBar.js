import { AppBar, Toolbar, Box } from "@mui/material";
import NavButton from "./buttons/NavButton";

const NavBar = () => {

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar className="nav-bar" elevation={0} position="static">
        <Toolbar className="toolbar" sx={styles.toolbar}>
          <NavButton variant="title" to="/">
            FRIENDS_COOK
          </NavButton>
          <NavButton to="/recipes">YOUR RECIPES</NavButton>
          <NavButton to="/shopping_list">SHOPPING LIST</NavButton>
          <NavButton to="/friends">FRIENDS</NavButton>

          <Box>
            <NavButton to="/signup">SIGN UP</NavButton>
            <NavButton to="/login">LOGIN</NavButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const styles = {
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default NavBar;
