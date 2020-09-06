import React, { Component } from 'react'
import { connect } from 'react-redux'

class GioHangRedux extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spGioHang, index) => {
            return <tr key={index}>
                <td>{spGioHang.maSP}</td>
                <td>
                    <img src={spGioHang.hinhAnh} width={50} />
                </td>
                <td>{spGioHang.tenSP}</td>
                <td>{spGioHang.gia}</td>
                <td>
                    <button onClick={()=>{
                        this.props.tangGiamSoLuong(spGioHang.maSP,true)
                    }}>+</button>
                    {spGioHang.soLuong}
                    <button onClick={()=>{
                        this.props.tangGiamSoLuong(spGioHang.maSP,false)
                    }}>-</button>
                </td>
                <td>{spGioHang.gia * spGioHang.soLuong}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        this.props.xoaGioHang(spGioHang.maSP)
                    }}>Xoá</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <h3>Giỏ hàng</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã</th>
                            <th>Hình ảnh</th>
                            <th>Tên</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5">

                            </td>
                            <td>
                                Tổng tiền
                            </td>
                            <td>
                                {this.props.gioHang.reduce((tongTien,spGH,index)=>{
                                    return tongTien += spGH.soLuong * spGH.gia
                                },0).toLocaleString()}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

// hàm tạo ra 1 props là function đưa dữ liệu lên redux store (reducer)
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            // tạo ra action 
            const action = {
                type: 'XOA_GIO_HANG',
                maSP: maSP
            }
            // gửi dữ liệu lên reducer
            dispatch(action)
        },
        tangGiamSoLuong: (maSP, tangGiam) => {
            // tạo ra action đưa lên reducer
            dispatch({
                type: 'TANG_GIAM_SOLUONG',
                maSP,
                tangGiam
            });
        }
    }
}



// Phương thức biến đổi stateRedux => props của component

const mapStateToProps = (state) => { // state là rootReducer
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)
