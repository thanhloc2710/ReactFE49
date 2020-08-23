import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    // state laf source của tấm hình xe
    state = {
        imgCar: './img/CarBasic/products/black-car.jpg'
    }

    handleChangeColorCar = (imgColor) => {
        // Lấy img được click gán vào state thông qua phương thức setState
        this.setState({
            imgCar: `./img/CarBasic/products/${imgColor}-car.jpg`
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <img style={{width: '100%'}} src={this.state.imgCar}></img>
                    </div>

                    <div className="col-4">
                        
                        <div className="card text-left">
                            <div className="card text-header">
                                Exterior color
                            </div>

                            <div className="card-body">

                                <div onClick={()=>{
                                    this.setState({
                                        imgCar: './img/CarBasic/products/black-car.jpg'
                                    })
                                }} style={{border:'1px solid black'}} className="row">

                                    <div className="image col-4">
                                        <img style={{width:'100%'}} src="./img/CarBasic/icons/icon-black.jpg" />
                                    </div>
                                    <div className="image col-8">
                                        <h5>Crystal Black</h5>
                                        <p>Pearl</p>
                                    </div>
                                </div>

                                <div onClick={()=>{
                                    this.handleChangeColorCar('red')
                                }} style={{border:'1px solid black', cursor:"pointer"}} className="row ">

                                    <div className="image col-4">
                                        <img style={{width:'100%'}} src="./img/CarBasic/icons/icon-red.jpg" />
                                    </div>
                                    <div className="image col-8">
                                        <h5>Modern Steel</h5>
                                        <p>Pearl</p>
                                    </div>
                                </div>

                                <div onClick={()=>{
                                    this.handleChangeColorCar('silver')
                                }} style={{border:'1px solid black'}} className="row">

                                    <div className="image col-4">
                                        <img style={{width:'100%'}} src="./img/CarBasic/icons/icon-silver.jpg" />
                                    </div>
                                    <div className="image col-8">
                                        <h5>Lunar Silver</h5>
                                        <p>Pearl</p>
                                    </div>
                                </div>

                                <div onClick={()=>{
                                    this.handleChangeColorCar('steel')
                                }} style={{border:'1px solid black'}} className="row">
                                    
                                    <div className="image col-4">
                                        <img style={{width:'100%'}} src="./img/CarBasic/icons/icon-steel.jpg" />
                                    </div>
                                    <div className="image col-8">
                                        <h5>Rallye Red</h5>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
