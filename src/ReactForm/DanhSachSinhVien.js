import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSachSinhVien extends Component {

    renderTableSV = () => {
        const { mangSinhVien } = this.props;
        return mangSinhVien.map((sv, index) => {
            return <tr key={index}>
                <td>{sv.maSinhVien}</td>
                <td>{sv.tenSinhVien}</td>
                <td>{sv.email}</td>
                <td>{sv.soDienThoai}</td>
                <td>
                    <button className="btn btn-primary mr-2">Chỉnh sửa</button>
                    <button className="btn btn-danger">Xoá</button>
                </td>
            </tr>
        })
    }

    render() {
        console.log(this.props.mangSinhVien);
        return (
            <div className="container-fluid">
                <table class="table bg-dark text-white">
                    <thead>
                        <tr>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                        </tr>
                    </thead>
                    <tbody className="bg-light text-dark">
                        {this.renderTableSV()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
    }
}


export default connect(mapStateToProps)(DanhSachSinhVien)

