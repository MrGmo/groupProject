import { Typography, Box, TextField, Button } from "@mui/material"
import {useState} from 'react'


const HomePage = () => {

    const [userInput, setUserInput] = useState(null)


    const postToBackend = () => {
      console.log(userInput)
    }


    return (
            <Box sx={{ paddingTop: '10%'}}>
                <Box sx={{ margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8%'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                        <h3 className="bold-text" >FIND</h3>
                        <h3 className = 'bold-text'>RECIPES</h3>
                    </Box>
                 <Box sx={{display: 'flex', alignItems: 'center', width: '60vh'}}>
                 <TextField fullWidth className='search-input' label="What are you craving?" sx={{backgroundColor: 'background.paper', color: 'primary'}} onChange={e => setUserInput(e.target.value)}  />
                 <Button variant="contained" size="large" sx={{fontSize: '22px'}}>SEARCH</Button>
                 </Box>
                </Box>
            </Box>
    )
}

export default HomePage