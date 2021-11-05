import React from "react";
import './App.css';
import Contest from "./components/Contest";
import FormCreateContest from "./components/FormCreateContest";


class App extends React.Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  
  // ComponentDidMount is used to
  // execute the code

  componentDidMount() {
    //let urlAPI = "http://127.0.0.1:5000/api/1/contests/active";
    //let urlAPI = "http://127.0.0.1:5000/api/1/contests";
    //let urlAPI = "http://192.168.1.2/api/1/contests";
    //let urlAPI = "http://192.168.1.2:80/api/1/contests";
    //let urlAPI = "http://192.168.1.2:80/api/1/contests/active";
    let urlAPI = "https://teelogbr.herokuapp.com/api/1/contests/active";
    //let urlAPI = "api/1/contests/active"
    //let urlAPI = "https://teelogbr.herokuapp.com/api/1/contests/active";
    //, { mode: "no-cors" }
    //let urlAPI = "https://jsonplaceholder.typicode.com/users"
    fetch(
      urlAPI)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true

        });
      })
    //console.log(`Printing itens: ${this.items}`)

  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (
      <div className="App">
        
        <h1> Fetch data from an api in react </h1> 
        <FormCreateContest />
        <Contest contest={items.contest} />
        
      </div>

    );
  }
}

export default App;
