import React,{useState} from "react";
import { Card,CardContent } from "@mui/material";
import{UpliftingChild} from "./UpliftingChild";


export const Uplifting=()=>{
    const[In, setIn]=useState();

    const recivedData=()=>{
        setIn()
        console.log("HII")
        alert("Nilso")

    }
    return(
        <React.Fragment>
          <Card>
            <CardContent>
          <UpliftingChild recivedData={recivedData}/>
            </CardContent>
          </Card>
        </React.Fragment>
    )
}