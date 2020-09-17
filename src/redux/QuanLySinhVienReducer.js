import { CHINH_SUA_SINH_VIEN, THEM_SINH_VIEN, CAP_NHAT_SINH_VIEN } from './types/QuanLySinhVienTypes'

const initialState = {
    mangSinhVien: [
        { maSinhVien: 1, tenSinhVien: 'Nguyễn Văn A', soDienThoai: 123123123, email: 'nguyenvana@gmail.com' },
        { maSinhVien: 2, tenSinhVien: 'Nguyễn Văn B', soDienThoai: 1231231231, email: 'nguyenvanb@gmail.com' },
    ],
    sinhVienSua: { // state  thông tin sinh vien trên ô input 
        maSinhVien: '',
        tenSinhVien: '',
        soDienThoai: '',
        email: ''
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case THEM_SINH_VIEN: {
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
            console.log(action);
            return { ...state }
        }
        case CHINH_SUA_SINH_VIEN: {
            // thay đổi state.sinhVienSua = sinhVien khi người dùng click chỉnh sửa
            state.sinhVienSua = action.sinhVien;
            return {...state }
        }
        case CAP_NHAT_SINH_VIEN: {
            let mangSinhVienCapNhat = [...state.mangSinhVien];
            console.log(mangSinhVienCapNhat);
            // tìm sinh viên cập nhật sau khi người dùng chỉnh sửa
            console.log(action);
            let index = mangSinhVienCapNhat.findIndex(sv => sv.maSinhVien === action.sinhVienCapNhat.maSinhVien);
            if(index !== -1 ){
                // gán sinhVien trong mảng có mã = sinh viên cập nhật 
                mangSinhVienCapNhat[index] = {...action.sinhVienCapNhat}
            }
            // cập nhật lại state.mangSinhVien
            state.mangSinhVien = mangSinhVienCapNhat;
            // trả về state mới 
            return {...state};

        }
        default:
            return state
    }
}
