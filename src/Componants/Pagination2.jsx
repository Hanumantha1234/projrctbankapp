import React, { useEffect, useState } from "react";
import { Grid, Card,CardContent, Pagination } from "@mui/material";
import axios from "axios";
import { ChildDelete2 } from "./ChildDelete2";

export const Pagination2=()=>{
    const[data, setData]=useState([]);
    const[page, setPage]=useState(10)

    const getData=async()=>{
        const res=await axios.get("https://jsonplaceholder.typicode.com/comments")
        setData(res.data);
        console.log(res.data)
    }
    const handleDel=()=>{
        setData()
        alert("Be carefull it may delete your data permently..!!")
        console.log(handleDel)
    }


useEffect(()=>{
    getData()
},[])
    return(
        <div>
            <h1>This is Pagination</h1>
            <Grid container spacing={3}>

            {
                data.length>0 && data.slice(page-10,page).map(item=>{
                    return(
                            <Grid item xs={4}>
                                <Card sx={{bgcolor:"lightblue"}}>
                                    <CardContent>
                         <h3>{item.name.slice(0,5)+"..."}</h3>
                         <h3>{item.id}</h3>
                                    </CardContent>
                                </Card>
                            </Grid>
                    )
                })
            }
<Pagination count={data.length/10} variant="outlined" color="secondary" onChange={(e,value)=>setPage(value*10)} />
<ChildDelete2 handleDel={handleDel}/>
            </Grid>
        </div>
    )
}