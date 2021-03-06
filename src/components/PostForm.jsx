import React, { Component } from "react";

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title:''
    };
  }

  handlerSubmit = (event) => {
    event.preventDefault();
    const newPost = {
        title:this.state.title,
        id:Number(Date.now())
    }

    this.setState({
        title:''
    })
  };

  handlerInputChange=({target:{value,name}})=>{
      this.setState(state=>{
          return{
              ...state,
              [name]:value
          }
      })
  }
  render() {
    const {title} = this.state;
    return (
      <form onSubmit={this.handlerSubmit}>
        <div className="form-group">
          <label htmlFor="inp">Title post </label>
          <input
            type="text"
            className="form-control"
            name='title'
            value={title}
            onChange={this.handlerInputChange}
            id="inp"
          />
          <button className='btn btn-success mt-2'>Upload</button>
        </div>
      </form>
    );
  }
}
