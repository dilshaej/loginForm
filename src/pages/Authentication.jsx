import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI';
import Google from './Google';

function Authentication({insideRegister}) {
  const navigate =useNavigate()
  const [userInputs,setUserInputs]=useState({
    username:"",email:"",password:""
  })
  console.log(userInputs);


  const handleRegister =async (e)=>{
    e.preventDefault()
    if(userInputs.username && userInputs.email && userInputs.password){
      //api call
try{
const result = await registerAPI(userInputs)
console.log(result);
if( result.status == 200){
toast.success(`Welcome ${result.data.username}... please login to explore!!!`)
setUserInputs({username:"",email:"",password:""})
setTimeout(()=>{
  navigate('/login')
},2000);
}else{
toast.error(result.response.data)
setTimeout(()=>{
  setUserInputs({username:"",email:"",password:""})

},2000);

}
}catch(err){
console.log(err);
}
   

}else{
toast.warning("PLEASE FILL THE FORM COMPLETELY")
    }
  }


 const handleLogin = async (e)=>{
  e.preventDefault()
  if(userInputs.email && userInputs.password){
    // api call
    try{
      const result = await loginAPI(userInputs)
      if(result.status==200){
        // store existingUser and token
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        toast.warning(`Welcome ${result.data.existingUser.username}...`)
        setUserInputs({username:"",email:"",password:""})
        setTimeout(() => {
        navigate('/dashboard')  
        },2000);
      }else{
        toast.error(result.response.data)
      }
    }catch(err){
      console.log(err);

    }
  }else{
    toast.warning("Please fill the foirm completely!!!")
  }
 }
  return (
    <>
        <div  style={{
            backgroundImage:'url("https://static.vecteezy.com/system/resources/previews/033/124/721/non_2x/mountain-lake-in-the-night-landscape-illustration-mountain-reflection-on-the-lake-mountain-landscape-for-background-wallpaper-or-landing-page-landscape-panorama-nature-illustration-free-vector.jpg")', backgroundSize: 'cover', backgroundPosition: 'center',height:'100vh'
        }}
        className='d-flex justify-content-center align-items-center flex-column '
        >
           <div  style={{width:'400px',height:'250px',
         backgroundImage:'url("https://static.vecteezy.com/system/resources/previews/033/124/721/non_2x/mountain-lake-in-the-night-landscape-illustration-mountain-reflection-on-the-lake-mountain-landscape-for-background-wallpaper-or-landing-page-landscape-panorama-nature-illustration-free-vector.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'
        }} className='bg-light mt-5  text-center shadow'>
        {/* <h5 className='mt-4' style={{color:'white'}}>Don't you have account?</h5> */}
   
     <h3  style={{color:'white'}} className='mt-5'>WELCOME</h3>
     <div className='d-flex justify-content-center mt-4 mb-3' >
      <Google/>
     </div>
     <br />
   
            </div> 
          <div >
                <Form>
               
               
               <div className='p-3 mb-5' style={{backgroundColor:'white', width:'400px',height:'350px'}}>
               {insideRegister &&
                       <FloatingLabel
                            controlId="floatingInputName"
                            label="Username"
                            className="mb-3"
                          >
                            <Form.Control value={userInputs.username}  onChange={e=>setUserInputs({...userInputs,username:e.target.value})} type="text" placeholder="username" />
                          </FloatingLabel>
    
               }
                       <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                          >
                            <Form.Control value={userInputs.email}  onChange={e=>setUserInputs({...userInputs,email:e.target.value})}   type="email" placeholder="name@example.com" />
                          </FloatingLabel>
                          <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control  value={userInputs.password}  onChange={e=>setUserInputs({...userInputs,password:e.target.value})}  type="password" placeholder="Password" />
                          </FloatingLabel>

                          {
                     insideRegister ?
                     <div className='mt-3 text-center'>
                         <button onClick={handleRegister}  className='btn btn-primary mb-2'>Register</button>
                         <p>Already Have an Account? Click Here to <Link className='text-info' to={'/login'}>Login</Link></p>
                     </div>
                     :
                     <div className='mt-3 text-center'>
                        <button  onClick={handleLogin}  className='btn btn-primary'>Login</button>
                         <p>New User? Click Here to <Link className='text-info' to={'/register'}>Register</Link></p>
                       </div>
                       }
               </div>  
                        
                     
           </Form>
          </div>
          <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </div>

    </>
  )
}

export default Authentication
