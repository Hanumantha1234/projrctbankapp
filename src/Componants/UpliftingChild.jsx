import React, {useState} from "react";
import { Grid, Button, TextField } from "@mui/material";

export const UpliftingChild=({props})=>{
    const[data,setData]=useState([]);
    return(
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={8}>
        <TextField variant="outlined" onChange={(e)=>setData(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={4}>
        <Button variant="contained" onClick={()=>props.setIn({data})}>Save</Button>
        </Grid>

        {/* {
data.length>0 && data.map(item=>item.data)
        } */}

        </Grid>
        </React.Fragment>
    )
}