import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('Hello');
    }

    showInfo = (name) => {
        
        alert(`name:  ${name}`);
    }

    render() {
        return (
            <div className="container">
                {/* Truyền callback function thông qua thuộc tính */}
                <button onClick={this.handleClick}>Click me</button>
                <br />
                <button onClick={this.showInfo.bind(this, 'Mẫn đẹp trai !')}>Click me</button>

                {/* Cách 2: dùng arrow function */}
                <button onClick={() => {
                    alert('show message');
                    //Click vào gọi nhiều hàm thực hiện ...
                    this.handleClick()
                }}>Show Message</button>

                <button onClick={() => {
                    this.showInfo('Mẫn đẹp trai !')
                }}>Show info</button>

            </div>
        )
    }
}
