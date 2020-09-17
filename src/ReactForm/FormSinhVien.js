import React, { Component } from 'react'
import { connect } from 'react-redux'
import swal from 'sweetalert2'
import { themSinhVienAction, capNhatSinhVienAction } from '../redux/actions/QuanLySinhVienActions'

class FormSinhVien extends Component {

    state = {
        value: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: '',
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: '',
        }
    }

    handleChangeInput = (event) => { // event là sự kiện trên control gọi hàm này khi onChange
        let { value, name } = event.target;

        let type = event.target.getAttribute('type_'); // lấy ra 1 giá trị của (thuộc tính) trên thẻ do ta tự định nghĩa

        let newValue = { ...this.state.value, [name]: value }; // chép giá trị this.state.value ra 1 biến
        // newValue = {
        //     ...newValue,
        //     [name]: value,
        // }
        // let newErrors = {...this.state.errors, [name]: value};
        let newErrors = { ...this.state.errors, [name]: value.trim() === '' ? `${name} không được bỏ trống !` : '' };
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (type === 'email') {
            if (!regexEmail.test(value)) {
                newErrors[name] = 'Email không hợp lệ !';
            }
        }

        this.setState({
            value: newValue,
            errors: newErrors
        }, () => {
            console.log(this.state)
        })

    }
    handleSubmit = (event) => {
        event.preventDefault(); // Chặn sự kiện submit của trình duyệt

        // validation
        let valid = true;

        for (let key in this.state.value) {
            if (this.state.value[key].trim() === '') {
                valid = false;
            }
        }

        for (let key in this.state.errors) {
            if (this.state.errors[key].trim() !== '') {
                valid = false;
            }
        }

        if (!valid) {
            swal.fire(
                'Thất bại',
                'Dữ liệu không hợp lệ?',
                'error'
            )
            // alert('dữ liệu không hợp lệ !')
            return;
        }

        //
        const action = themSinhVienAction(this.state.value)
        // const action ={
        //     type: 'THEM_SINH_VIEN',
        //     sinhVien: this.state.value
        // }

        // dùng props.dispatch có sẵn khi liên kết với redux sẽ có props này => dispatch action lên reducer
        this.props.dispatch(action);
        swal.fire(
            'Thành công',
            'Thêm sinh viên thành công !',
            'success'
        )
    }

    // componentWillReceiveProps(newProps) {
    //     // Lifecycle chạy sau khi props thay đổi và trước khi render
    //     // component không chạy lại khi setState
    //     // Mỗi lần người dùng bấm chỉnh sửa thì props thay đổi => newprops chính là props mới (state.sinhVienSua của redux) => đem props mới gán vào this.state.value

    //     this.setState({
    //         value: newProps.sinhVienSua
    //     })
    // }

    render() {
        // console.log(this.props.sinhVienSua)
        let sinhVienSua = this.state.value;
        return (
            <form className="container-fluid" onSubmit={this.handleSubmit}>

                <div className="card-header text-white bg-dark font-weight-bold">
                    THONG TIN SINH VIEN
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="form-group col-6">
                            <p>Mã sinh viên</p>
                            <div className="form-group">
                                <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput} value={sinhVienSua.maSinhVien} />
                                <p className="text-danger">{this.state.errors.maSinhVien}</p>
                            </div>
                        </div>
                        <div className="form-group col-6">
                            <p>Email</p>
                            <div className="form-group">
                                <input type_="email" className="form-control" name="email" onChange={this.handleChangeInput} value={sinhVienSua.email} />
                                <p className="text-danger">{this.state.errors.email}</p>
                            </div>
                        </div>
                        <div className="form-group col-6">
                            <p>Tên sinh viên</p>
                            <div className="form-group">
                                <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput} value={sinhVienSua.tenSinhVien} />
                                <p className="text-danger">{this.state.errors.tenSinhVien}</p>
                            </div>
                        </div>
                        <div className="form-group col-6">
                            <p>Số điện thoại</p>
                            <div className="form-group">
                                <input type_="phone" className="form-control" name="soDienThoai" onChange={this.handleChangeInput} value={sinhVienSua.soDienThoai} />
                                <p className="text-danger">{this.state.errors.soDienThoai}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-right">
                        <button type="submit" className="btnt btn-success">
                            Thêm sinh viên
                        </button>

                        <button type="button" className="btnt btn-success" onClick={() => {
                            // dispatch giá trị sau khi người dùng thay đổi trên redux
                            let action = capNhatSinhVienAction(this.state.value);
                            this.props.dispatch(action)
                        }}>
                            Cập nhật sinh viên
                        </button>
                    </div>
                </div>
            </form > 
        )
    }


    componentDidUpdate(propsCu, stateCu) {
        // setState trong didupdate phải có if 
        if (this.props.sinhVienSua.maSinhVien !== stateCu.value.maSinhVien) {
            this.setState({
                value: propsCu.sinhVienSua
            })
        }
    }
}

const mapStateToProps = state => {
    return {
        sinhVienSua: state.QuanLySinhVienReducer.sinhVienSua
    }
}

export default connect(mapStateToProps)(FormSinhVien)