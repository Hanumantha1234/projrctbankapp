import axios from "axios";
import React, {useEffect, useState} from "react";
// import{ProductItem} from "./ProductItem"

export const ProductList=()=>{
    const[data, setData]=useState([]);
    const[filtData, setfiltData]=useState([]);
    const[txt, setTxt]=useState("")
    const[indeNum, setindexNum]=useState(null);
    const[edit, setEdit]=useState(true);

    const getData=async()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(result.data)
        setfiltData(result.data)
        console.log(result)
    };

    const handleAdd=()=>{
        setfiltData([...filtData,txt]);
        setTxt("")
    }

    const handleDel=(index)=>{
       const res=filtData.filter((elem,i)=>i!==index);
       setfiltData(res)
    };

    const handleEdit=(item,index)=>{
    setTxt(item);
    setindexNum(index);
    setEdit(true);
    }

    useEffect(()=>{
        getData()
    },[])
    return(
        <div>
            <input type="text" value={txt} placeholder="name" onChange={(e)=>setTxt(e.target.value)}/>
            <input type="text" value={txt} placeholder="city" onChange={(e)=>setTxt(e.target.value)} />
            <input type="text" value={txt} placeholder="geo" onChange={(e)=>setTxt(e.target.value)} />
            <input type="text" value={txt} placeholder="website" onChange={(e)=>setTxt(e.target.value)} />
            <button onClick={handleAdd}>Add</button><br /><br />

            <table>
                <tr>
                    <th>name</th>
                    <th>city</th>
                    <th>geo</th>
                    <th>website</th>
                </tr>

                {
                    filtData.length>0 && filtData.map((item,index)=>{
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.address.city}</td>
                                <td>{item.address.geo.lat}</td>
                                <td>{item.website}</td>
                                <button onClick={()=>handleDel(index)}>Del</button>
                                <button onClick={()=>handleEdit(item,index)}>Edit</button>
                            </tr>
                        )
                    })
                }
            </table>
            

            {/* {
  filtData.length>0 && filtData.map(item=> <ProductItem item={item}/>)
            } */}
        </div>
    )
}