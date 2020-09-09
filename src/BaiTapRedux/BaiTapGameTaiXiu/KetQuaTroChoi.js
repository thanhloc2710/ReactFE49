import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        const { banChon, soBanThang, tongSoBanChoi, playGame, mangXucXac } = this.props;
        // console.log(this.props.banChonCom)

        return (

            <div>
                <div className="display-4 text-center">
                    Tổng điểm : <span className="text-danger">{mangXucXac.reduce((tongDiem,xxnn,index)=>{
                        return tongDiem += xxnn.ma
                    },0)}</span>
                </div>

                <div className="display-4 text-center">
                    BẠN CHỌN: <span className="text-danger">
                        {banChon ? 'TÀI' : 'XỈU'}
                    </span>
                </div>
                <div className="display-4 text-center">
                    SỐ BÀN THẮNG: <span className="text-danger">
                        {soBanThang}
                    </span>
                </div>
                <div className="display-4 text-center">
                    TỔNG SỐ BÀN CHƠI: <span className="text-danger">
                        {tongSoBanChoi}
                    </span>
                </div>
                <div className="text-center mt-5">
                    <button onClick={() => playGame()} className="btn btn-success">PLAY GAME</button>
                </div>
            </div>
        )
    }
}

// Hàm lấy giá trị từ state redux và biến đổi thành props của component
const mapStateToProps = state => { // state là giá trị từ rootreducer truyền vào component
    return {
        banChon: state.gameXucXacReducer.banChon,
        soBanThang: state.gameXucXacReducer.soBanThang,
        tongSoBanChoi: state.gameXucXacReducer.tongSoBanChoi,
        mangXucXac: state.gameXucXacReducer.mangXucXac,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            dispatch({
                type: 'PLAY_GAME'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi)
