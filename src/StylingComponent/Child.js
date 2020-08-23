import React, { Component } from 'react'
import './Styling.scss';
import style from './Styling.module.scss';

export default class Child extends Component {
    render() {
        return (
            // let objectStyle = {borderColor: 'red'}
            <div>
                <div className={`${style.content} `}>
                    <p className={`${style.text}`}>2222222</p>
                    child conponent
                </div>

                <p style={{borderColor: 'red', backgroundColor: 'blue', fontSize: '15px'}}>
                    Hello cybersoft
                </p>
            </div>
        )
    }
}
