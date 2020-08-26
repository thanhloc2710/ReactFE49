import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class DemoProps extends Component {
    sinhVien = {
        hoTen: 'Nguyễn Văn Tèo',
        hinhAnh: `https://api.adorable.io/avatars/255/loc`,
        lop: 'FE 49'
    }
    render() {
        return (
            <div>
                <ThongTinSinhVien sinhVien={this.sinhVien} />

                {/* <ThongTinSinhVien hoTen="Nguyễn Thị B" lop="FrontEnd49"/>
                <ThongTinSinhVien hoTen="Nguyễn Văn Tèo" lop="FrontEnd49"/> */}
            </div>
        )
    }
}
