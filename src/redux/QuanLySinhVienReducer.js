import {THEM_SINH_VIEN} from './types/QuanLySinhVienTypes'

const initialState = {
    mangSinhVien:[
        {maSinhVien: 1, tenSinhVien:'Nguyễn Văn A', soDienThoai: 123123123, email: 'nguyenvana@gmail.com'},
        {maSinhVien: 2, tenSinhVien:'Nguyễn Văn B', soDienThoai: 1231231231, email: 'nguyenvanb@gmail.com'},
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case THEM_SINH_VIEN:{
            state.mangSinhVien = [...state.mangSinhVien,action.sinhVien];
            console.log(action);
            return {...state}
        }
    default:
        return state
    }
}
