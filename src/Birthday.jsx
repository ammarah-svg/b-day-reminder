import React from 'react'
import { useState } from 'react'
import SingleBirthday from './components/SingleBirthday'
import {birthdays} from './data'







const Birthday = () => {
  const [data, setData] =useState(birthdays)
  
  const removeBDays = (id) => {
    const newBDays = data.filter((item) => {
        return item.id !== id
    })
    setData(newBDays)
}


  return (
    <>
     <div className='col-lg-7 shadow m-auto my-4 py-4'>
        <h1 className='text-center text-danger '> {data.length} Birthdays Today</h1>
  
        {data.map((birth) => {
        
                    return <SingleBirthday {...birth} key={birth.id} remove={removeBDays} />
                })}

    
       <div onClick={data.length===0? ()=>setData(birthdays) :()=> setData([])}  className={`button btn ${data.length===0? 'btn-success' : 'btn-danger'} d-block w-25 m-auto rounded-pill`}>
       {data.length === 0 ? 'Refresh All' : 'Remove all'}


       </div>
    </div>
    
    
    
    
    </>
  )

              }
export default Birthday