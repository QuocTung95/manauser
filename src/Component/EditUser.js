import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.editUserObj.id,
            name : this.props.editUserObj.name,
            tel : this.props.editUserObj.tel,
            permistion : this.props.editUserObj.permistion

        }
    }
    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        })
    }
    saveChangeUser =()=>{
        var info = []
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permistion = this.state.permistion;
        this.props.getUserEdit(info)
    }

    render() {
        return (
            <div className="col-12">
            <form method ="post">
            <div className="card text-white bg-secondary mt-3 mb-2">
                <div className="card-header text-center">Edit User</div>
                <div className="card-body text-center">
                    <div className="form-group">
                        <label >User</label>
                        <input onChange = {(e)=> this.isChange(e)} type="text" className="form-control" defaultValue={this.props.editUserObj.name} name="name" aria-describedby="helpId" placeholder="Nhập Tên Đăng Nhập" />
                    </div>
                    <div className="form-group">
                        <label >Phone</label>
                        <input onChange = {(e)=> this.isChange(e)} type="text" className="form-control" defaultValue={this.props.editUserObj.tel} name="tel" aria-describedby="helpId" placeholder="Nhập Số Điện Thoại" />
                    </div>
                    <select onChange = {(e)=> this.isChange(e)} defaultValue={this.props.editUserObj.permistion} name='permistion' className="custom-select">
                        <option defaultValue="Chọn quyền mặc định"  >Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Moderater</option>
                        <option value={3}>Normal</option>
                    </select>
                </div>
                <input onClick={()=>{this.saveChangeUser()}} type="reset" className="btn btn-block btn-waring" value="Save"/>
                
            </div>
            </form>
        </div>  
        );
    }
}

export default EditUser;