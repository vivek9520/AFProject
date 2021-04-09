import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'
import {login} from './../../service/LoginService'
import {Redirect} from 'react-router'
import Header from '../Commen/Header'
import image from './../../img/b.jpg'
import image1 from './../../img/kk.png'
import image2 from './../../img/footer.png'

export default class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            user:{
             username:"",
             password:""
            }
        }
    }

    Onsubmit =async()=>{
        try{
            const response = await login(this.state.user)
            console.log(response);
            if(response.data==="dialog"){
                this.props.history.push({
                    pathname: '/admin',
                    state: {
                      provider:"Dialog"  
                    }
                  })
            }
            else if(response.data==="mobitel"){
                this.props.history.push({
                    pathname: '/admin',
                    state: {
                      provider:"Mobitel"  
                    }
                  })
                
            }
            else if(response.data==="airtel"){
                this.props.history.push({
                    pathname: '/admin',
                    state: {
                      provider:"Airtel"  
                    }
                  })
            }
            else if(response.data==="hutch"){
                this.props.history.push({
                    pathname: '/admin',
                    state: {
                      provider:"Hutch"  
                    }
                  })
            }
            else {
                alert("Wrong Password")
            }
        }
        catch(err){
            console.log(err)
        }
    }

    LoginHandleChange =(e)=>{
        const user = {...this.state.user}
        user[e.currentTarget.name]= e.currentTarget.value;
        this.setState({user})
    }
    

    render() {
        return (
            <div style={{
                background: `url(${image})`,
                height:750
              }}>
                <Header/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <img src ={image1} width="500"/>
                   
                    </div>
                    <div className="col-6">
                        <h2>Login Form</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="username" 
                            placeholder="Enter User Name"  
                            name="username" 
                            value={this.state.user.username} 
                            onChange={this.LoginHandleChange}/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" 
                            placeholder="Password" 
                            name="password" 
                            value={this.state.user.password} 
                            onChange={this.LoginHandleChange}/>
                        </Form.Group>
                        
                        <Button variant="primary" 
                        type="submit" 
                        className="btn-block btn-info"
                        onClick={()=>this.Onsubmit()}>
                            Login
                        </Button>

                    </div>
                    
                </div>
                
            </div>
            <img src ={image2} width="100%"/>
            </div>
        )
    }
}
