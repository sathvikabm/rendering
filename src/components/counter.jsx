import React, { Component } from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state={count:0, tags:[/*"tag1","tag2","tag3"*/]}
        this.style={fontSize:10,fontWeight:"bold"}
        this.clickFeedback=this.clickFeedback.bind(this)
    }
    renderTags()
    {
        if(this.state.tags.length===0) return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
    }
    clickFeedback=()=>{
        console.log("Increment clicked",this)
        this.setState({count:this.state.count+1})
        this.state.count+=1
    }
    HandleIncrement=(product)=>
    {
        console.log(product);
        

    }
    doHandleIncrement=()=>
    {
        this.HandleIncrement

    }
    render() { 
        // return <div>{this.state.tags.length===0 && "Please create new tag!"}{this.renderTags()}</div>
        // return <div><span style={this.styles} className={this.getBadgeClasses()}>{this.state.count}</span><button className="btn btn-secondary btn-sm" onClick={this.clickFeedback}>Increment</button><ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul></div>;
        return <div><span style={this.styles} className={this.getBadgeClasses()}>{this.state.count}</span><button className="btn btn-secondary btn-sm" onClick={this.clickFeedback}>Increment</button><ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul></div>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}
export default Counter;