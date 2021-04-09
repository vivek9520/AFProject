import React, { Component } from 'react'
import {Card, Button,Table} from 'react-bootstrap'
import {deleteComplient,UpdateComplient} from './../../service/complientService'
import { Confirm } from 'semantic-ui-react'

export default class ComplientCard extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
             open:false,
             status:this.props.data.status
        }
    }
    
    DeleteOnClick =async(id)=>{
        this.open();
        const response = await deleteComplient(id)
        
    }

    ChangeState =async(id)=>{
        if(this.state.status==="Request"){
            this.setState({
                status:"Process"
            })
        }
        else if(this.state.status==="Process"){
            this.setState({
                status:"Resolved"
            })
        }
         const response = await UpdateComplient(this.props.data, this.state.status)
        console.log();
    }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    render() {
        return (
            <div className="container">
            <Card className="text-center">
            <Card.Header>Complient</Card.Header>
                <Card.Body>
                    {this.props.data.message}
                    <Card.Text>
                    <div className="row">
                        <div className="col-4">
                        <Table striped bordered hover>
                        <thead>
                        
                            <tr> 
                            <th> 
                                <div class="d-flex p-2">
                                Mobile:   
                                <span className="text-info">{this.props.data.mobile}</span>
                                </div>  
                            </th>
                            
                            </tr>
                            <tr> 
                            
                            <th>
                            <div className="d-flex p-2">N.I.C:  <span className="text-info">{this.props.data.nic}</span>
                            </div>
                            </th>
                            
                            </tr>
                            <tr> 
                            
                            <th><div className="d-flex p-2">Email:  <span className="text-info">{this.props.data.email}</span> </div></th>
                            
                            </tr>
                           
                        </thead>
                        
                        </Table>
                        </div>
                            <div className="col-6">
                                    <Table striped bordered hover>              
                                        <thead>
                                            <tr> 
                                            <th>
                                                <div className="d-flex p-2">Issue Mobile:  <span className="text-info">{this.props.data.imobile}</span> </div>
                                            </th>
                                            </tr>
                                            <tr>
                                            <th>
                                                <div className="d-flex p-2">Address:  <span className="text-info">{this.props.data.address}</span> </div></th>
                                            </tr>
                                            <tr>
                                            <th>
                                                <div className="d-flex p-2">Name:  <span className="text-info">{this.props.data.name}</span> </div>
                                            </th>
                                            </tr>
                                            <Confirm
                                                open={this.state.open}
                                                onCancel={this.close}
                                                onConfirm={this.close}
                                                />        
                                    </thead>
                                    </Table>
                            </div>
                            <div className="col-2">
                                    <Table striped bordered hover>            
                                        <thead>         
                                            <tr> 
                                                <th>  
                                                    <button type="button" className="btn btn-danger  btn-block" onClick={()=>this.DeleteOnClick(this.props.data._id)}>Delete</button>
                                                </th>
                                            </tr>  
                                            <tr> 
                                                <th>  
                                                <button type="button" className="btn btn-info  btn-block" onClick={()=>this.ChangeState(this.props.data._id)} >Status Change</button>
                                                </th>
                                            </tr>  
                                            
                                                 
                                    </thead>
                                    </Table>
                            </div>
                            
                    </div>
                </Card.Text>
                    
                </Card.Body>
                <Card.Footer className="text-muted"><button type="button" className={this.props.data.status==="Request"?"btn btn-danger":this.props.data.status==="Process"?"btn btn-info":"btn btn-success"} >Status:<span>{this.props.data.status}</span></button></Card.Footer>
                </Card>
                <br/>
            </div>
        )
    }
}
