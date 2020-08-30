import React, { Component } from 'react'

export default class ThongTinSinhVien extends Component {
    render() {
        return (
            <div>
                {/* this.props là thuộc tính có sẵn của component, 
                Lưu ý: dùng để nhận giá trị từ component cha truyền vào, 
                và không thể thay đổi đuoc giá trị đó */}
                {/* <p>Họ Tên: {this.props.sinhVien.hoTen}</p>
                <p>Lớp: {this.props.sinhVien.lop}</p>
                <p>Hinh: {this.props.sinhVien.hinhAnh}</p> */}
                <div className="card">
                    <img style={{width: '100%'}} className="card-img-top" src={this.props.sinhVien.hinhAnh} alt />
                    <div className="card-body">
            <h4 className="card-title">{this.props.sinhVien.hoTen}</h4>
                        <p className="card-text">{this.props.sinhVien.lop}</p>
                    </div>
                </div>
                </div>

        )
    }
}
