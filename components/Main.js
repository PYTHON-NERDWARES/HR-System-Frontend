import React, { Component } from 'react'
import Footer from '../components/Footer'
import Login from '../components/Login'
import Header from '../components/Header'


export class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Login/>
                <Footer/>
                
            </div>
        )
    }
}

export default Main
