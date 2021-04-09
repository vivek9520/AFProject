import React, { Component } from 'react'
import Header from '../Commen/Header';
import {getComplientsProvider} from './../../service/complientService'
import ComplientCard from './ComplientCard';
import image from './../../img/b.jpg'



export default class AdminHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             complients:[],
             open:false
        }
    }
    
  async  componentDidMount (){
        const response = await getComplientsProvider(this.props.location.state.provider);
        this.setState({
            complients: response.data
        })
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
                <div class="d-flex justify-content-around">
                    <div class="p-2 bd-highlight"><h2>All Compliants</h2></div>
                </div>
                
                {this.state.complients.map(comp =>{
                    return(
                        <ComplientCard data ={comp}/>
                    )
                })}
            </div>
        )
    }
}
