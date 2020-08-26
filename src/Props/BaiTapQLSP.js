import React, { Component } from 'react'

export default class BaiTapQLSP extends Component {
    renderSanPham = () => {
        return this.props.mangSP.map((sp, index) => {
            return <div className='col-3' key={index}>
                <img className="card-img-top" src={sp.hinhAnh} style={{ height: 300, width: 300 }}></img>
                <h3>{sp.tenSP}</h3>
                <button className='btn btn-success' onClick={()=>{
                    this.xemChiTiet(sp)
                }}>Xem chi tiết</button>
            </div>
        })
    }

    xemChiTiet = (spClick)=>{
        console.log('spClick', spClick);
        // this.setState cho sản phẩm chi tiết  = sản phẩm được click
        this.setState({
            sanPhamChiTiet:spClick
        })
    }


    state = {
        sanPhamChiTiet: { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/vsphone.jpg" }
    }



    render() {
        let {manHinh,tenSP,heDieuHanh,cameraSau,cameraTruoc,ram,rom,gia,hinhAnh} = this.state.sanPhamChiTiet;
        return (
            <div className='container'>
                <h3>Danh Sách sản phẩm</h3>
                <div className='row'>
                    {this.renderSanPham()}
                </div>
                <hr />
                <div className='row'>
                    <div className='col-4'>
                        <h3>{tenSP}</h3>
                        <img style={{ width: 200, height: 300 }} src={hinhAnh} />
                    </div>
                    <div className='col-8'>
                        <h3>Thông số kỷ thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màng hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <th>{rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
