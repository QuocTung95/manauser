import React, { Component } from 'react';
import EditUser from './EditUser';


class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            userInforChange: []
        }
    }

    isShowEditForm = ()=>{
        if(this.props.editUserSTT){
            return <EditUser getUserEdit={(info)=>this.getUserEdit(info)} editUserObj = {this.props.editUserObj}/>
        }
    }
    getUserEdit =(info) =>{
        this.setState({
            userInforChange : info
        })
        this.props.getUserEditApp(info)
    }


    showButtonAddUser =() =>{
        if(this.props.showFormAddUser){
            return <div className="btn btn-block btn-outline-secondary" onClick ={()=>this.props.changeAddUserStt()}>Close</div>
        }
        return <div className="btn btn-block btn-info" onClick ={()=>this.props.changeAddUserStt()}>AddUser</div>
    }
    render() {
        return (
                <div className="container">
                <div className="row">
                    {this.isShowEditForm()}
                </div>
                    <div className="row">
                            <div className="col-9">
                                <div className="form-group">
                                    <div className="btn-group" style={{ width: '100%' }}>
                                    {/* <button onClick={(value)=>this.props.renderSearch(this.state.temValue)}>get</button> */}
                                        <input onChange={(e)=>this.props.renderSearch(e)} type="text" className="form-control" name="search" id="search" aria-describedby="helpId"
                                            placeholder="Nhập từ khóa" />
                                        <div className="btn btn-info">Search</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                               {this.showButtonAddUser()}
                            </div>
                    </div>
                </div>
        );
    }
}

export default Search;