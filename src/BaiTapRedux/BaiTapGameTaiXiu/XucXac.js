import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {

        renderXucXac = () =>{
            const {mangXucXac} = this.props;
            return mangXucXac.map((xucXac,index)=>{
                return <img key={index} className="ml-5" style={{width:70}} src={xucXac.hinhAnh} alt={xucXac.hinhAnh} />
            })            
        }



    render() {
        const {banChon} = this.props;
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3">
                        <button style={{ fontSize: 30,border: banChon ? '5px solid yellow':'none' }} onClick={() => this.props.datCuocTaiXiu(true)} className="btn display-4 text-white bg-primary p-5 ml-5">Tài</button>
                    </div>
                    <div className="col-6">
                        {this.renderXucXac()}
                        {/* <img className="ml-5" style={{width:70}} src="./img/Game_Xuc_Xac/1.png" />
                        <img className="ml-5" style={{width:70}} src="./img/Game_Xuc_Xac/1.png" />
                        <img className="ml-5" style={{width:70}} src="./img/Game_Xuc_Xac/1.png" /> */}
                    </div>
                    <div className="col-3">
                        <button style={{ fontSize: 30, border: !banChon ? '5px solid yellow':'none' }} onClick={() => this.props.datCuocTaiXiu(false)} className="btn display-4 text-white bg-primary p-5 ml-5">Xỉu</button>
                    </div>
                </div>

            </div>
        )
    }
}

// Lấy dữ liệu từ redux về 
const mapStateToProps = state =>{
    return {
        mangXucXac: state.gameXucXacReducer.mangXucXac,
        banChon: state.gameXucXacReducer.banChon,
    }
}

// tạo ra props đưa dữ liệu lên redux store
const mapDispatchToProps = dispatch =>{
    return {
        datCuocTaiXiu: (ketQuaChon) => {
            const action = {
                type: 'DAT_CUOC_TAI_XIU', // Phải khác tên đối với các type nghiệp vụ khác
                ketQuaChon
            }
            //  đưa dữ liệu lên redux
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(XucXac)