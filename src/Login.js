import React from "react";
import './Login.css';

class Login extends React.Component{
    state={
        mail:'',
        pwd:''
    }
    handlechange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }
    handleSubmit = (e) =>{
        e.preventDefault()
    }
    render(){
        return(
            <div className='div-login'>
                <div className="logo-img">
                   <img src="download.jpeg" className="user-img"/>
                </div>
                <div className="header-content">
                   <h1>Sign In</h1>
                </div>
                 <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="email" name="mail" placeholder="Enter Your Email" requuired  onchange={this.handlechange}/>
                        <input type="password" name="pwd" placeholder="Enter Your Password" requuired  onchange={this.handlechange}/>
                        <button onSubmit={this.handleSubmit}>Sign In</button>
                     </form>
                </div>
            </div>
               
        )
    }
}

export default Login;