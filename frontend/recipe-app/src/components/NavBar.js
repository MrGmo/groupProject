
import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Button, Box } from '@mui/material';


const NavBar = () => {
    const navigate = useNavigate();

    return (

        <Box sx={{ flexGrow: 2 }}>
        <AppBar className="nav-bar" elevation={0}  position="static">
          <Toolbar className="toolbar" sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
            <Button
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              
              // sx={{  mr: 2 }}
              onClick={() => {
                navigate("/");
              }}
              sx={{fontSize: '30px', fontWeight: 'bold'}}
            >
            Friends_Cook
            </Button>
              <Button  size="large" sx={{ m: 1, color: '#05386b', fontWeight: 'bold'}}>
                  YOUR RECIPES
              </Button>
              <Button  size="large" sx={{ m: 1, color: '#05386b', fontWeight: 'bold'}}>
                 SHOPPING LIST
              </Button>
              <Button  size="large" sx={{ m: 1, color: '#05386b', fontWeight: 'bold'}}>
                  FRIENDS
              </Button>
            
              <Box sx={{fontWeight: 'bold'}}>
                <Button
                  size="large"
                  sx={{ m: 1, color: '#05386b', fontWeight: 'bold'}}
                //   onClick={() => {
                //     navigate("/signup");
                //   }}
                  color="inherit"
                >
                  Sign Up
                </Button>
                <Button
                  sx={{ m: 1, color: '#05386b', fontWeight: 'bold' }}
                //   onClick={() => {
                //     navigate("/login");
                //   }}
                  color="inherit"
                >
                  Login
                </Button>
              </Box>
        
            {/* {user && (
              <Box>
                <Button 
                  sx={{ m: 1, color: '#05386b', fontWeight: 'bold' }}
                 
                //   onClick={() => {
                //     navigate(`user/${user.id}`);
                //   }}
                  color="inherit"
                >
                  My Profile
                </Button>
                <Button sx={{ m: 1, color: '#05386b', fontWeight: 'bold'  }} onClick={() => console.log('LOGOUT')} color="inherit">
                  Logout
                </Button>
              </Box>
            )} */}
          </Toolbar>
        </AppBar>
      </Box>




    )



}


export default NavBar