import React, { Component } from 'react'
import GioHang from './GioHang'
import DanhSachSanPham from './DanhSachSanPham'

export default class BaiTapGioHang extends Component {
    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/sp_blackberry.png" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/sp_vivo850.png" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/vsphone.jpg" }
    ]

    state = {
        gioHang: [
            // {maSP: 1, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 1000, soLuong: 1}
        ]
    }

    themGioHang = (spClick) => {
        //tạo ra 1 sản phẩm giỏ hàng từ sản phẩm được click
        let spGioHang = {
            maSP: spClick.maSP,
            tenSP: spClick.tenSP,
            hinhAnh: spClick.hinhAnh,
            gia: spClick.gia,
            soLuong: 1
        }
        // console.log(spClick)
        // setState giỏ hàng tại đây
        let gioHangUpdate = this.state.gioHang;

        //tìm sp đó có trong giỏ hàng hay không 

        let index = gioHangUpdate.findIndex((spGH => spGH.maSP === spGioHang.maSP));

        // kiểm tra rồi mới push

        if (index !== -1) { // tìm thấy tại vị trí index => tăng số lượng
            gioHangUpdate[index].soLuong += 1;
        } else {
            // không tìm thấy trong giỏ hàng => thêm sản phẩm vào giỏ hàng
            gioHangUpdate.push(spGioHang);
        }

        this.setState({
            gioHang: gioHangUpdate
        })
    }

    xoaGioHang = (maSP) => {
        // let gioHangUpdate = this.state.gioHang;
        //tìm xem trong giỏ hàng có mã sp được click (nút xoá) không ?
        // let index = gioHangUpdate.findIndex(spGH => spGH.maSP === maSP);
        // if (index !== -1){
        //     gioHangUpdate.splice(index,1);
        // }
        //sau khi xoá sp giỏ hàng thì cập nhật lại state
        // this.setState({
        //     gioHang:gioHangUpdate
        // })

        //filter lọc lấy ra maSP !== maSP
        this.setState({
            gioHang: this.state.gioHang.filter(sp => sp.maSP !== maSP)
        })

    }

    tangGiamSoLuong = (maSP, TangGiam) => { // tangGiam = true => tăng , tangGiam = false thì giảm
        console.log(maSP,TangGiam);

        let gioHangUpdate = this.state.gioHang;
        let index = gioHangUpdate.findIndex(spGioHang => spGioHang.maSP === maSP);


         if (index !== -1) {
            if (TangGiam) {// tangGiam = true thì tăng số lượng 
                gioHangUpdate[index].soLuong += 1
            }  else { // nếu sp giảm thì số lượng > 1 mới cho giảm 
                if (gioHangUpdate[index].soLuong > 1) {
                    gioHangUpdate[index].soLuong -= 1
                } else {
                    alert('Số lượng tối thiểu là 1')
                }
            }
        }
        this.setState({
            gioHang: gioHangUpdate
        })
    }

    tinhSoLuongGH = () => {
        return this.state.gioHang.reduce((soLuong, spGH, index) => {
            return soLuong += spGH.soLuong;
        }, 0)
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Bài tập giỏ hàng</h3>
                <div className="gioHang">
                    <div className="text-right text-danger">
                        <span data-toggle="modal" data-target="#modelId" style={{ cursor: 'pointer' }}>Giỏ hàng ({this.tinhSoLuongGH()})</span>
                    </div>
                    <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
                </div>
                <DanhSachSanPham mangSanPham={this.mangSanPham} themGioHang={this.themGioHang} />
            </div>
        )
    }
}
