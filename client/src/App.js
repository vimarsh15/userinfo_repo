import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'



let Userinfo = React.lazy(()=> import('./component/userinfo/Userinfo'))  
let Thankyou = React.lazy(()=> import('./component/thankyou/thankyou'))  






function App() {
  return (


<div>
     <BrowserRouter>
     
     <Routes>
      <Route path='/' element={<Userinfo />}></Route>
      



      <Route path='/thank' element={<Thankyou />}></Route>
     </Routes>
     </BrowserRouter>      
    </div>
  );
}



export default App;