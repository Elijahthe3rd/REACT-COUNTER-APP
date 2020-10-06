import React, { Component } from 'react';
import Counter from './counters';

class counter1 extends Component {
    state = {
        comps:[
        {id:1,value:1},
        {id:2,value:2},
        {id:3,value:3},
        {id:4,value:4},
        {id:5,value:5}
    ]
    }
    render() { 
    return (
    <div> 
         <header className={this.headerStyle()}>
            <div>Heading</div>
        </header>
        <div>
            {this.state.comps.map(count=>(
            <Counter key={count.id} value={count.value}/>
            ))} 
    
    </div>
    </div>)
    }
    headerStyle=()=>{
        let classes='border-bottom h3 bg-info text-center bg-gradient-warning text-secondary p-1 ';
        return classes;
    }
}
 
export default counter1;