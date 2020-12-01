import React, { Component } from 'react'
import './Home.css'
import Navbar from './Navbar'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Navbar />
                <div className='recipeOfThaDay'>
                    <h3>Recipie of the day</h3>
                    <div>
                        <p>recipe</p>
                    </div>
                </div>
            </div>
        )
    }
}
