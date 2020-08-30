import React, { Component } from 'react'
import SanPhamGH from './SanPhamGH'

export default class DanhSachSanPham extends Component {

    renderSP = () => {
        return this.props.mangSanPham.map((sp, index) => {
            return <div className="col-4" key={index}>
                <SanPhamGH themGioHang={this.props.themGioHang} sp={sp} />
            </div>
        })
    }

    render() {
        return (
            <div>
                <div className="row mt-4">
                    {this.renderSP()}
                </div>
            </div>
        )
    }
}
