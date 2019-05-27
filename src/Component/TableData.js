import React, { Component } from 'react';
import TableDataItem from './TableDataItem';


class TableData extends Component {
    renderUser = () => this.props.UserData.map((user, i)=> <TableDataItem editUser = {(user)=>this.props.editUser(user)} UserData={user} key={i} />)
                            

    render() {
        return (
                <div className="col">
                    <table className="table table-striped table-inverse table-hover">
                        <thead className="thead-inverse">
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Quyền</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.renderUser()}
                            
                        </tbody>
                    </table>
                </div>
        );
    }
}

export default TableData;