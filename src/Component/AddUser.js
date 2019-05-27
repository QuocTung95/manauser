import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name:'',
            tel:'',
            permission: ''

        }
    }
    isChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    showAddUserTableStt = () =>{
        if(this.props.showFormAddUser){
            return (
                <div className="col">
                <form>
                <div className="card text-black mt-5 mb-3">
                    <div className="card-header">Thêm mới User vào hệ thống</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label >User</label>
                            <input onChange ={(e)=>this.isChange(e)} type="text" className="form-control" name="name" aria-describedby="helpId" placeholder="Nhập Tên Đăng Nhập" />
                        </div>
                        <div className="form-group">
                            <label >Phone</label>
                            <input onChange ={(e)=>this.isChange(e)} type="text" className="form-control" name="tel" aria-describedby="helpId" placeholder="Nhập Số Điện Thoại" />
                        </div>
                        <select onChange ={(e)=>this.isChange(e)} name='permistion' className="custom-select">
                            <option defaultValue="Chọn quyền mặc định"  >Chọn quyền mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Moderater</option>
                            <option value={3}>Normal</option>
                        </select>
                    </div>
                    <input type="reset" onClick={(name, tel, permission)=>this.props.adduser(this.state.name, this.state.tel, this.state.permistion)} className="btn btn-block btn-primary" value="adduser"/>
                    
                </div>
                </form>
            </div>  
            )
        } return null
    }
    
    render() {
        return (
            <div>
            {this.showAddUserTableStt()}
            </div>
        );
    }
}

export default AddUser;