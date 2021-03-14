import React, { Component } from 'react'
import { connect } from 'react-redux';
 class Register extends Component {

    state = {
        values:{
            taiKhoan:'',
            matKhau:'',
            email:'',
            soDienThoai:'',
            hoTen:''
        },
        errors: {
            taiKhoan:'',
            matKhau:'',
            email:'',
            soDienThoai:'',
            hoTen:''

        }
    }


    handleChange = (event) => {
        const {value,name} = event.target;
        //xử lý láy dữ liệu trên value
        let newValues = {...this.state.values};

        newValues[name] = value;
        //xử lý lấy dữu liệu trên erros
        let newErrors = {...this.state.errors};
        let errors = '';
        if(value===''){
            errors = name + 'Không được bỏ trống !'
        }
        newErrors[name] = errors;

        this.setState({
            values:newValues,
            errors:newErrors
        })

        // this.setState({
        //     [name]:value
        // },() => {
        //     console.log(this.state);
        // })
    };

    componentDidMount(){
        this.props.dispatch({
            type:"closeLoading"
        })
    }

    handleSubmit = (event) => {
        //chặn sự kiệ reload của browser
        event.preventDefault();
        let valid = true;
        //Lỗi khi valid không hợp lệ
        // + Khi bất kì thuộc tính nào của errors != ''=>bị lỗi
        for(let keyError in this.state.errors){
            if(this.state.errors[keyError] !==''){
                valid = false;
            }
        }
        //Hoặc bất kì thuộc tính nào của value = ''
        for(let keyValue in this.state.values){
            if(this.state.values[keyValue] === ''){
                valid = false;
            }
        }
        if(!valid){
            alert('Dữ liệu không hợp lệ');
            return;
        }
        
    }

    render() {
        return (
            // onsubmit để enter button 
            <form className="container" onSubmit={this.handleSubmit}> 
                <div className="display-4">Dang Ky</div>
                <div className="form-group">
                    <p>Tai Khoan</p>
                    <input name="taiKhoan" className="form-control" onChange={this.handleChange}/>
                    <p className="text-danger">{this.state.errors.taiKhoan}</p>
                </div>
                <div className="form-group">
                    <p>Ho Ten</p>
                    <input name="hoTen" className="form-control" onChange={this.handleChange}/>
                    <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
                <div className="form-group">
                    <p>Email</p>
                    <input name="email" className="form-control" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <p>Mat Khau</p>
                    <input name="matKhau" className="form-control" onChange={this.handleChange}/>
                    <p className="text-danger">{this.state.errors.matKhau}</p>
                </div>
                <div className="form-group">
                    <p>So Dien Thoai</p>
                    <input name="soDienThoai" className="form-control" onChange={this.handleChange}/>
                    <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
                <div className="form-group">
                    <button className="btn btn-success">Dang Ky</button>
                </div>
            </form>
        )
    }
}
export default connect()(Register)