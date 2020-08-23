import React, { Component } from 'react'

export default class RenderWithState extends Component {

    // Quản lý những giá trị thay đổi trên giao diện
    state = {
        login: false
    }

    // khai báo thuộc tính
    // login = false;
    userName = 'Mẫn';
    
    renderLogin = () => {
        if(this.state.login){
            return <p>
                Hello {this.userName}
            </p>
        }
        return <div>
            <button className="btn btn-success" onClick={() =>{
                this.handleLogin();
            }}>Đăng nhập</button>
        </div>
    }

    handleLogin = () => {

        // this.state.login = true; // không đuoc gán state trực tiếp
        // Phương thức setState => 
        //làm thay đổi giá trị state
        // gọi lại hàm render chạy lại
        // setState là phương thức bức đồng bộ
        
        let newState = {login:true};

        this.setState(newState,()=>{
            console.log(this.state.login);
        });
    }
    render() {
        return (
            <div>
                {/* toán tử ? toán tử 3 ngôi */}
                {/* {this.login ? <p>Hello {this.userName}</p> : <div><button className="btn btn-success">Đăng nhập</button></div>} */}
                {this.renderLogin()}
            </div>
        )
    }
}
