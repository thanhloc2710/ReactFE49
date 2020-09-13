// Quản lý tất cả các state của ứng dụng
import {combineReducers} from 'redux';
import { GioHangReducer } from './GioHangReducer'
import {gameXucXacReducer} from './GameXucXacReducer'
import QuanLySinhVienReducer from './QuanLySinhVienReducer'
export const rootReducer = combineReducers({
    //Khai báo các state của ứng dụng
    GioHangReducer: GioHangReducer,
    gameXucXacReducer,
    QuanLySinhVienReducer
})