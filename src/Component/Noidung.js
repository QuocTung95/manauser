import React, { Component } from 'react';

class Noidung extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }
    
    
    
    
    render() {
        return (
            <div>
               
               <h3>{this.props.content}  </h3> 
                
            </div>

        );
    }
}

export default Noidung;