import {Paper,Box,TextField, Button} from "@mui/material";
import mpesaLogo from "../assets/mpesa.png"

function Card() {
    return ( 
    <Box component="div" sx={{display:"flex",alignItems:'center',justifyContent:"center", backgroundColor:"#F6F8FA", height:"100vh"}}>
        <Paper sx={{height:"25rem", width:"30%", borderRadius:"0.8rem"}}>
       <Box component="div" sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
       <Box component="div" sx={{width:"12rem",height:"5rem", objectFit:"cover", padding:1,mt:1}}> <img src={mpesaLogo} alt=""  style={{ width: "100%", height: "100%", objectFit: "cover" }}/> </Box>
       </Box>
       <Box sx={{display:"flex", flexDirection:"column", gap:"2rem",padding:"2rem", mt:3}}>
        <TextField variant="outlined" size="small" label="Enter the phone number" fullWidth/>
        <TextField variant="outlined" size="small" label="Enter the Amount" fullWidth/>
        <Button variant="contained" fullWidth>Enter</Button>
       </Box>
       
        </Paper>
    </Box>
    );
}

export default Card;
<>
</>