import {Paper,Box,Typography} from "@mui/material";
import mpesaLogo from "../assets/mpesa.png"

function Card() {
    return ( 
    <Box component="div" sx={{display:"flex",alignItems:'center',justifyContent:"center", backgroundColor:"#F6F8FA", height:"100vh"}}>
        <Paper sx={{height:"30rem", width:"30%"}}>
       <Box component="div" sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
       <Box component="div" sx={{width:"12rem",height:"5rem", objectFit:"cover"}}> <img src={mpesaLogo} alt=""  style={{ width: "100%", height: "100%", objectFit: "cover" }}/> </Box>
       <Box></Box>
       </Box>
       
        </Paper>
    </Box>
    );
}

export default Card;
<>
</>