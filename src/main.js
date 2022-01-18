

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './main.css'
const axios = require('axios');



function Main() {

    const [list,setlist]=useState([]);

    const [year,setyear]=useState("0")

    const [name,setname]=useState('0')

    const [sea,setsea]=useState([])

    const [page,setpage]=useState(1)

    useEffect(() => {

        handel()
       
    }, [page])

       
    const handel=async()=>{

        console.log(year)
          
const {data}=await axios.get(`http://localhost:1234/list/${page-1}/${year}`)
    setlist(data)
    console.log(data)
    }
    const  search=async(e)=>{

    //console.log(e.target.value)
    const a=e.target.value


    const {data}=await axios.get(`http://localhost:1234/search/${a}`)

       
      setsea(data)

     
    }

    const a=useHistory()

    

    function handel2(e){

        console.log(e)

        localStorage.setItem('nn',JSON.stringify(e))
        
        a.push('/show')

    }

    

    

   
    

    return (
        <>
        <div className='searchbox'>
            <input placeholder='search' onChange={search} />
            <div className='drop'>{sea.map(function(el){
                return <h6 onClick={()=>handel2(el)}>{el.artist}</h6>
            })}</div>
            
            
        </div>
       
        <div>
        <input className='op' name='name' placeholder='year' onChange={(e)=>setyear(e.target.value)}/>
        <button onClick={handel} >filter</button>
        </div>
        <div className='mainbox'>
      {list.map(el => (
         <div className='box' >
             <img className='cover' src={el.coverpage} />
         <h4>{el.artist}</h4>
         <h4>{el.year}</h4>
         </div>
              
        
         
      ))}
    </div>
           
           <div className='pagi'>
    <button style={{visibility:page==1?"hidden":"visible"}} onClick={()=>setpage(page-1)}>Prev</button>
         

         <h4>{page}</h4>
         
         <button  onClick={()=>setpage(page+1)}>Next</button>
         </div>
        
        </>
    )
}

export default Main
