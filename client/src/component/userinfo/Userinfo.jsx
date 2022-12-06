import React,{ useState} from 'react'
import './userinfo.css'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ToastContainer, toast} from 'react-toastify'

import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const Userinfo = () => {  
    const [email, setemail] = useState('')
    const [gender, setgender] = useState('')
    
    
    const [language, setlanguage] = useState('')
    const [level, setlevel] = useState('')
    let navigate = useNavigate()
    let submit = (e)=>{
      e.preventDefault()
      
      
      if(!email || !gender || !language || !level){
      alert('please enter the required fields')
      }
      else {
      // console.log(gender)  
        axios.post('http://localhost:3200/api/user/addinfo',{email, 
      gender, 
      language,

      level}).then((res)=>{
       navigate('/thank')
      }).catch((err)=>{
         

         alert(err.response.data.message)
      })   
    } 
      setemail('')
      setgender('')
      setlanguage('')
      setlevel('')
       
    }
    
    return (
    
    <div>
      
      <h2 style={{ textAlign:'center'}}>User info</h2>
      <hr />
     <div className='form'> 
      
            <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address *</Form.Label>
        <Form.Control type="email" value={email}
        placeholder="Enter email" 
        onChange={(e)=> setemail(e.target.value)}
        autoComplete='off'

        />
         
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>


      <Form.Group className="mb-3" controlId="genderid">
        <Form.Label>Select Gender *</Form.Label>
        
        
        <br />
        <Form.Check type='radio' value='Male' label='Male' id='genderid' name='gender' inline 
        onChange={(e)=> setgender(e.target.value)} 
        
        ></Form.Check>
        <Form.Check type='radio' value='Female' label='Female' id='genderid' name='gender' inline
        onChange={(e)=> setgender(e.target.value)}
        ></Form.Check>
      </Form.Group> 
      <Form.Group className="mb-3" defaultValue='C'>
      <Form.Label>Select Language *</Form.Label>
      
      <Form.Select value={language} 
      // aria-label="Default select example"
      onChange={(e)=> setlanguage(e.target.value)}
      >
      {/* <option>Open this select menu</option> */}
      <option value="C">C</option>
      <option value="Python">Python</option>
      <option value="Scala">Scala</option>
      <option value="Go lang">Go lang</option>
       
    </Form.Select>      
      </Form.Group>
     
     

      <Form.Group className="mb-3" controlId="levelid">
        <Form.Label>Select level *</Form.Label>
        
        
        <br />
        <Form.Check type='radio' value='Fresher(0-1)' id='levelid' label='Fresher(0-1)' name='level' inline 
        onChange={(e)=> setlevel(e.target.value)} 
        ></Form.Check>
        
        <Form.Check type='radio' value='Intermediate(1-3)' id='levelid' label='Intermediate(1-3)' name='level' inline
        onChange={(e)=> setlevel(e.target.value)}
        ></Form.Check>

        <Form.Check type='radio' value='senior(5+)' label='senior(5+)' name='level' inline 
        id='levelid' 
        onChange={(e)=> setlevel(e.target.value)}
        ></Form.Check>

        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <div className="d-grid gap-2"> 
      <Button variant="primary" type="submit" size='lg'>
        Submit
      </Button>
      </div>
    </Form>


    </div>
    
    </div>
  )
}
export default React.memo(Userinfo) 