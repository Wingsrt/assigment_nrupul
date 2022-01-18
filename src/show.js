

import React, { useEffect, useState } from 'react'

function Show() {
 
    const [a,seta]=useState([])

    const [f,setf]=useState([])


    useEffect(() => {
      
        const b=JSON.parse(localStorage.getItem('nn'))
        console.log(b)

        seta(b)
        setf(b.no_of_songs)
        

    }, [])

   
     console.log(f)

     

    return (
        <div>
         
         <img src={a.logo} />
         <h4>name-{a.artist}</h4>
         <h4>year-{a.year}</h4>

          
          <div>
              {
                  f.map(function(el){
                       

                    return <h4>song:-{el}</h4>
                     

                  })
              }
          </div>

            
        </div>
    )
}

export default Show
