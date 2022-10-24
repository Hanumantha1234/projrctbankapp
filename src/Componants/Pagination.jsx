import { CardContent, Grid ,Card,Stack,Pagination} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChildDelete } from "./ChildDelete";


export const PaginationPage=()=>{
    const [data,setData]=useState([])
    const [page,setPage]=useState(10)
    const fetchData=async()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments")
        setData(res.data)
        console.log(res.data)
    }
    useEffect(()=>{
        fetchData()
    },[])

    const deleteData=()=>{
setData([])
    }
    return (
        <div>
            <h1>Pagination</h1>
            <Grid container>
                {data.slice(page-10,page).map((item)=>{
                    return(
                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    <h1>{item.id}</h1>
                                    <h1>{item.name}</h1>
                                </CardContent>
                            </Card>
                            </Grid>
                    )
                })}
                 <Stack spacing={2}>
    
      <Pagination count={data.length/10} color="primary" onChange={(e,value)=>setPage(value*10)}/>
  
    </Stack>
            </Grid>
            <ChildDelete deleteData={deleteData}/>
        </div>
    )
}