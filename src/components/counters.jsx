import React, { Component } from 'react';

class counters extends Component {
    state = {
        counter:0,
      };

    render() { 
         
        return (
        <div className='m-2'>
            <div className='container-fluid'>
                <span className={this.getTagBadges()}>Count: {this.formatCount()}</span>
                <button onClick={this.decrementCount} className={this.decrementBagde()}>-</button>
                <button  onClick={this.incrementCount} className={this.incrementBagde()}>+</button>
                <button  onClick={this.resetCount} className={this.resetBtnBagde()}>reset</button>

            </div>
    
        </div>
        );
    }
    
    formatCount=()=>{
        let sts=this.state
        return sts.counter===0?'Zero':sts.counter
    }

    getTagBadges=()=>{
        let classes=' badge m-2 badge-';
        let state=this.state;
        state.counter<=-1? classes+='danger':state.counter===0?classes+='warning':classes+='primary';
        return classes;
    }

    incrementCount=()=>{
        this.setState({counter:this.state.counter+1})
    }

    decrementCount=()=>{
        let cnt=this.state.counter-1
        this.setState({counter:cnt})
    }
    
    decrementBagde=()=>{
        let cnt=this.state.counter
        let btnClasses='border btn-sm btn m-1 rounded-pill border-info  '
        return cnt<=-1? btnClasses+='btn-danger text-warning':btnClasses+='btn-light text-dark'
    }
    incrementBagde=()=>{
        let cnt=this.state.counter
        let btnClasses='border btn-sm btn m-1 rounded-pill border-info  '
        return cnt>0? btnClasses+='btn-info text-warning':btnClasses+='btn-light text-dark'
    }
    resetBtnBagde=()=>{
        let btnClasses='border btn m-1 btn-info btn-sm text-center text-white p-1'
        return btnClasses
    }
    resetCount=()=>{
        this.setState({counter:this.state.counter=0})
    }
  
}
 
export default counters;