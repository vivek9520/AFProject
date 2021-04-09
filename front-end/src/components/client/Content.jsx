import React, { Component } from 'react'
import {PostComplient} from './../../service/complientService'
import { Button, Confirm } from 'semantic-ui-react'
import {Alert} from 'react-bootstrap'
import dialog from './../../img/5.jpg'
import mobitel from './../../img/images.jpeg'
import airtel from './../../img/air.jpg'
import hutch from './../../img/sss.png'

const initialState = {
    open:false,
    complient:{
             provider:"",
             name:"",
             mobile:"",
             address:"",
             message:"",
             email:"",
             nic:"",
             imobile:""
    }
}

export default class Content extends Component {
    constructor(props) {
        super(props)
    
        this.state = initialState
    }


  

    FormHandleChange =(event)=>{
        const complient = {...this.state.complient}
        complient[event.currentTarget.name] = event.currentTarget.value
        this.setState({complient})
    }

    FormHandleSubmit = async()=>{
       
       const response = await PostComplient(this.state.complient);
       console.log(response.status);
      if(response.status ===200){
            alert("Successfully Sent Complient")
            this.setState(initialState)
      }
      else{
          alert("Complient Not Sent!!!!!! oops")
      }
       
    }
    
    render() {
        
        return (

            <div className="container">
                <br/>
                <br/>
               <br/>
               <div class="d-flex justify-content-center"><h2>COMPLIANT FORM</h2></div>
                <div className="form-row"> 
                    <div className="form-group col-md-6">
                    <label htmlFor="inputState">Provider</label>
                    <select id="complient" className="form-control" onChange={this.FormHandleChange} value={this.state.complient.provider} name="provider">
                        <option value="Dialog">Dialog</option>
                        <option value="Airtel">Airtel</option>
                        <option value="Mobitel">Mobitel</option>
                        <option value="Hutch">Hutch</option>
               </select>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Name</label>
                    <input type="text"
                     className="form-control" 
                     id="name" placeholder="Name"
                     name="name" onChange={this.FormHandleChange} 
                     value={this.state.complient.name}
                     required ="true"/>
                    </div>
                </div>
                <div className="form-row"> 
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Email" 
                    name="email"
                    onChange={this.FormHandleChange}
                    value={this.state.complient.email}/>
                    </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Contact Number</label>
                    <input type="number" 
                    className="form-control" 
                    id="mobile" 
                    placeholder="Contact Number" 
                    name="mobile"
                    value={this.state.complient.mobile}
                    onChange={this.FormHandleChange}
                    />
                    </div>
                </div>
                <div className="form-row"> 
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Issue Mobile Number</label>
                    <input type="number" 
                    className="form-control" 
                    id="imobile" 
                    placeholder="Issue Mobile Number" 
                    name="imobile"
                    onChange={this.FormHandleChange}
                    value={this.state.complient.imobile}/>
                    </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">N.I.C</label>
                    <input type="text" 
                    className="form-control" 
                    id="nic" 
                    placeholder="N.I.C" 
                    name="nic"
                    value={this.state.complient.nic}
                    onChange={this.FormHandleChange}
                    />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" 
                    className="form-control" 
                    id="address" placeholder="1234 Main St" 
                    name="address"
                    value={this.state.complient.address}
                    onChange={this.FormHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Complient</label>
                    <textarea className="form-control" 
                    id="message" 
                    rows="3" 
                    name="message"
                    value={this.state.complient.message}
                    onChange={this.FormHandleChange}
                    />
                </div>
            
                <button  className="btn btn-primary btn-block bg-info " onClick={()=>this.FormHandleSubmit()}>Send</button>
                
          <div>
              <br/>
          <div class="d-flex justify-content-around">
          <div class="p-2 bd-highlight"><img src ={dialog} width="200" height="100"/></div>
          <div class="p-2 bd-highlight"><img src ={mobitel} width="200" height="100"/></div>
          <div class="p-2 bd-highlight"><img src ={airtel} width="200" height="100"/></div>
          <div class="p-2 bd-highlight"><img src ={hutch} width="200" height="100"/></div>
  
          </div>
          <br/>
          <hr/>
          <div class="d-flex justify-content-around">
          <div class="p-2 bd-highlight">CopyRight2021</div>
  
          </div>
          </div>
            </div>
        )
    }
}
