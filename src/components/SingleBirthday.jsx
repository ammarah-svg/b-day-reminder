import React from 'react'

const SingleBirthday = ({id, name, image, age, remove}) => {
    console.log(remove)
  return (
    <div className='d-flex justify-content-between align-items-center px-5 py-3  m-5 rounded-pill bg-success'>
<div className="left d-flex gap-3">
<div className="image">

    <img style={{ width: '70px', height: '70px', clipPath: 'circle()' }} src={image} alt="" />
</div>
<div className="content">
    <h4>{name}</h4>
    <p>{age} years</p>
</div>
</div>

<div className="right">
    <button onClick={() => remove(id)} className='btn btn-danger'>Remove</button>
</div>





    </div>
  )
}

export default SingleBirthday