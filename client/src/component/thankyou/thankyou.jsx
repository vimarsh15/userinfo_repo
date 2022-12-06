import React from 'react'
import {Link} from 'react-router-dom'



const Thankyou = () => {  
        

  return (
    <div>
      <h1>Thank you submitting the response</h1>
      <h4> <Link to='/'> click here to submit another response </Link></h4>
      
    </div>
  )
}
export default React.memo(Thankyou) 