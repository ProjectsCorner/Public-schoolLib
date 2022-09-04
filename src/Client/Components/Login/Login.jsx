import { Button, CircularProgress, TextField } from '@mui/material';
import React from 'react'
import FormsApi from '..//..//../api/api';
import LOGO from "..//..//../Assets/lira_logo.png";
import "../Login/login.css";

const Login = () => {
 

// const form_submit = async(e)=>{
//     e.preventDefault();
//     const fd = new FormData(e.target);
//     let fobject = {};
//     fd.forEach((value, key)=>{
//         fobject [key] = value;
//     });
//     const api = new FormsApi();
//     const res = await api.post("/user/login", fobject);
//     if(res!== error){

//     }else{

//     }
// }



  return (
    <div className='login_ctr'>
        <div className="login-logo-ctr">
              <img src={LOGO} alt="LIRAUNIVERSITY" />
        </div>
    <div>
    <div className='login_form_ctr'>
        <form className='login_form'>
            <div className='login_txt'>
                <h3>Public University Library</h3>
                <div className='login_inputs_ctr'>
                    <TextField
                      variant="outlined"
                      label="Email"
                      type="text"
                      name="email"
                      helperText="University email/email"
                      fullWidth
                      style={{ margin: "20px 0px" }}/>
                     <div className="register-inputs-ctr-d">
                  <TextField
                    label="Reg.No"
                    name="no"
                    variant="outlined"
                    color="primary"
                    helperText="Your registration Number"
                    style={{ width: "48%" }}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    variant="outlined"
                    color="primary"
                    helperText="Make sure, pasword is correct"
                    style={{ width: "48%" }}
                  />
                </div>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    type="submit"
                    // color={apiFeedBackError ? "secondary" : "primary"}
                    style={{ width: "100%", margin: "15px 0px" }}
                    // disabled={!termsCheckBox}
                  >
                    <CircularProgress
                      size={15}
                      thickness={10}
                    //   style={{
                    //     display: submit ? "inline-block" : "none",
                    //     marginRight: "20px",
                    //   }}
                    />
                    {/* {submit
                      ? "Please Wait..."
                      : apiFeedBackError
                      ? "Something Went Wrong, Try again"
                      : "Submit"} */}
                  </Button>
                </div>
            </div>
        </form>

    </div>
    </div>
    </div>
  )
}

export default Login