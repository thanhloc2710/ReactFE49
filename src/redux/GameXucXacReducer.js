

// Tổ chức reducer để lưu trữ và xử lý state của bài tập game xúc xắc
const mangXucXac = [
    { ma: 1, hinhAnh: './img/Game_Xuc_Xac/1.png' },
    { ma: 2, hinhAnh: './img/Game_Xuc_Xac/2.png' },
    { ma: 3, hinhAnh: './img/Game_Xuc_Xac/3.png' },
    { ma: 4, hinhAnh: './img/Game_Xuc_Xac/4.png' },
    { ma: 5, hinhAnh: './img/Game_Xuc_Xac/5.png' },
    { ma: 6, hinhAnh: './img/Game_Xuc_Xac/6.png' },
]

const stateDefault = {
    banChon: true,
    soBanThang: 0,
    tongSoBanChoi: 0,
    mangXucXac: [
        { ma: 1, hinhAnh: './img/Game_Xuc_Xac/1.png' },
        { ma: 1, hinhAnh: './img/Game_Xuc_Xac/1.png' },
        { ma: 1, hinhAnh: './img/Game_Xuc_Xac/1.png' },
    ]
}

export const gameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC_TAI_XIU': {
            state.banChon = action.ketQuaChon
            console.log(action);
            return { ...state }
        }
        case 'PLAY_GAME': {
            //Bước 1: xử lý tạo xúc xắc ngẫu nhiên
            // tạo ra 3 viên xúc xắc ngẫu nhiên add vào mãng xúc xắc ngẫu nhiên
            let mangXucXacNgauNhien = [];
            // thực hiện random 3 lần để tạo ra 3 viên xúc xắc ngẫu nhiên đưa vào mãng
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6);
                // từ ngẫu nhiên tạo ra xúc xắc ngẫu nhiên
                let xucXacNgauNhien = mangXucXac[soNgauNhien];
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            //cập nhật lại state.mangXucXac
            state.mangXucXac = mangXucXacNgauNhien;
            // cập nhật số bàn chơi
            state.tongSoBanChoi += 1;
            // tính điểm từ mangXucXacNgauNhien
            let tongDiem = mangXucXacNgauNhien.reduce((tongDiem,xxnn,index)=>{
                return tongDiem += xxnn.ma;
            },0)
            //so sánh tongDiem
            // Nếu tổng điểm lớn hơn 9 và banChon = true => thắng
            // hoặc nếu tổng điểm <= 9 và !banChon = false => thua
            if((tongDiem > 9 && state.banChon) ||(tongDiem <= 9 && !state.banChon)){
                state.soBanThang += 1;
            }
            return { ...state }

        }
    }
    return { ...state };
}