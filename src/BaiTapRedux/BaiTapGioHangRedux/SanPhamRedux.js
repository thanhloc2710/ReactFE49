import React, { Component } from 'react'
// kết nối với redux 
import { connect } from 'react-redux'

class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div className="card text-left">
                <img style={{ width: 250, height: 200 }} src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-body">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.gia.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={()=>{
                        this.props.themGioHang(sanPham);
                    }}>Thêm sản phẩm</button>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => { // dispatch là hàm giống hàm setState
    return {
        themGioHang: (sanPhamClick) => {
            console.log('sanPhamClick', sanPhamClick)
            const action = {
                type: 'THEM_GIO_HANG', // đây là thuộc tính bắt buộc
                sanPham: sanPhamClick // nội dung đưa lên store của redux
            }
            // dùng hàm dispatch gửi action lên redux 
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(SanPhamRedux);