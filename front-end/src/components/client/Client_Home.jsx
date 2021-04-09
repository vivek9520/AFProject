import React, { Component } from 'react'

import Header from './../Commen/Header'
import Content from './Content'
import image from './../../img/b.jpg'



export default class Client_Home extends Component {
    render() {
        return (
            <div style={{
                background: `url(${image})`,
                height:750
              }}>
                <Header/>
                <Content/>    
            </div>
        )
    }
}
