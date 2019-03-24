import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    /* mostly use for http calls */
    /* one of the options for http calls */
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  componentWillMount() {
    /* in Version 17 of react u will need to add  UNSAFE_ to the beginning of the func */
    /* this will run before the componentDidMount*/
    console.log("componentWillMount");
  }

  componentDidUpdate() {
    /* only run will component is update */
    console.log("componentDidUpdate");
  }

  componentWillpdate() {
    /* in Version 17 of react u will need to add  UNSAFE_ to the beginning of the func */
    /* only run will component is update */
    console.log("componentWillpdate");
  }

  componentWillReceiveProps(nextProps, nextState) {
    /* in Version 17 of react u will need to add  UNSAFE_ to the beginning of the func */
    /* only run when the component receiv new props mostly work with redux u can take the state from redux and pass it here as props */
    console.log("componentWillReceiveProps");
  }

  /*static getDerivedStateFromProps(nextProps, prevState){ in Version 17 this replaces the componentWillReceiveProps func 
      return null;
  }*/

  /* getSnapshotBeforeUpdate(prevProps,prevState){ in Version 17 
    console.log("componentWillReceiveProps");
  }*/

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p className="lead">{body}</p>
      </div>
    );
  }
}

export default Test;
