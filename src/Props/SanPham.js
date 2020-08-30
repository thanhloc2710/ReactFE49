import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let sanPham = this.props.sp;
        return (
            <div>
                <div className='col-3'>
                    <img className="card-img-top" src={sanPham.hinhAnh} style={{ height: 300, width: 300 }}></img>
                    <h3>{sanPham.tensanPham}</h3>
                    <button className='btn btn-success' onClick={() => {
                        this.props.xemChiTiet(sanPham)
                    }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}

