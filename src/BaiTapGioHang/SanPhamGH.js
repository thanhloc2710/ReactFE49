import React, { Component } from 'react'

export default class SanPhamGH extends Component {
    render() {
        let {sp,themGioHang} = this.props;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={sp.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sp.tenSP}</h4>
                        <p className="card-text">{sp.gia.toLocaleString()}</p>
                        <button className="btn btn-success" onClick={()=>{
                            themGioHang(sp)
                        }}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
