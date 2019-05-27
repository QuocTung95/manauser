import React, { Component } from 'react';
import DetailImage from './detailImage';
import dulieuanh from './../Data/detailImage'

class trang1 extends Component {
    constructor(props) {
        super(props);
        
    }




    
    render() {
        return (
            <div>
                {dulieuanh.map((value)=>(<DetailImage key={value.id} id={value.id} tieude={value.tieude}></DetailImage>))}
                
                
                {/* <DetailImage id="2" tieude="tieu de 2"></DetailImage> */}
            </div>
        );
    }
}

export default trang1;