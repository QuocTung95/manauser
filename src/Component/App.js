import React, { Component } from 'react';
import './../App.css';
import Headder from './Headder';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import UserData from './../Data/UserData.json'
const uuid = require('uuid/v1')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserData : [],
      
      stt: 1,
      content: 'this is content',
      showFormAddUser : false,
      editUserSTT: false,
      editUserObj: {}
    }  
  }
  componentWillMount(){
    // KIỂM TRA XEM CÓ DỮ LIỆU Ở LOCALSTORAGE CHƯA
    if(!localStorage.getItem('UserData', UserData)){
      localStorage.setItem('UserData',JSON.stringify(UserData))
    } else{
      var temp = JSON.parse(localStorage.getItem('UserData', UserData))
      this.setState({
        UserData: temp
      })
    }
  }

  renderSearch = (e) => {
    var valueSearch = e.target.value
    this.setState({
      valueSearch: valueSearch
    })
  } 

  changeAddUserStt = () =>{
    this.setState({
        showFormAddUser : !this.state.showFormAddUser
    })
}
getNewUser = (name, tel, permission) => {
var user = {}
user.id = uuid();
user.name = name
user.tel = tel
user.permistion = permission
var items = this.state.UserData
items.push(user)
this.setState({
  UserData:items
})
localStorage.setItem('UserData', JSON.stringify(items))
}
editUser = (user)=>{
  this.setState({
    editUserSTT : !this.state.editUserSTT,
    editUserObj : user
  })
}
getUserEditApp =(info)=>{
  this.state.UserData.forEach((value, key)=>{
    if(value.id === info.id){
      value.name = info.name;
      value.tel = info.tel;
      value.permission = info.permission
    }
    
    
  })
}

    render() {
     
      var kq = [];
      this.state.UserData.forEach((item) => {
        if (item.name.indexOf(this.state.valueSearch) !== -1) {
          kq.push(item)
        }
      })
      // if(this.state.valueSearch===undefined){
      //   kq = this.state.UserData
      // }
      console.log('this.state.UserData :', this.state.UserData);
    return (
      
      // <Router>
      <div>
      <Headder/>
      <Search getUserEditApp={(info)=>this.getUserEditApp(info)} editUserObj={this.state.editUserObj}  editUserSTT={this.state.editUserSTT} showFormAddUser = {this.state.showFormAddUser} renderSearch= {(value) =>this.renderSearch(value)} changeAddUserStt = {()=>{this.changeAddUserStt()}} />
      <div className="container">
        <div className="row">
          <TableData editUser={(user)=>this.editUser(user)} UserData={kq}/>
          <AddUser adduser = {(name, tel, permission)=>this.getNewUser(name, tel, permission)} showFormAddUser ={this.state.showFormAddUser}/>
        </div>
      </div>

</div>



    );
  }
}

export default App;
