import React, { Component } from 'react';

class TableDataItem extends Component {


    render() {
        return (
            <tr>
            <td >{this.props.UserData.id}</td>
            <td>{this.props.UserData.name}</td>
            <td>{this.props.UserData.tel}</td>
            <td>{this.props.UserData.permistion}</td>
            <td>
                <div className="btn-group" style={{ width: '100%' }}>
                    <div className="btn btn-warning sua">
                        <i onClick ={(user)=>this.props.editUser(this.props.UserData)} className="fa fa-edit">Sửa</i>
                    </div>
                    <div className="btn btn-danger xoa">
                        <i className="fa fa-delete">Xóa</i>
                    </div>
                </div>
            </td>
        </tr>
        );
    }
}

export default TableDataItem;