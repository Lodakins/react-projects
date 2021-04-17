import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function Header(){
  
  return (
    <div><h2> Github Card </h2></div>
  );
}


const fetchData = async (value) =>{
  
  let url = "https://api.github.com/search/repositories?page=1&per_page=8&q=" + value;
  
  let data = await fetch(url);
  
  let resp = await data.json();
  
  return resp;
  
}


const testData=[
  {owner:{
    node_id:"Akinrolabu Lolade",
    avatar_url:"https://via.placeholder.com/75",
    login: "Google"
  }
  },
  {owner:{
    node_id:"Rhoda Fagbemi",
    avatar_url:"https://via.placeholder.com/75",
    login: "Facebook"
  }
  },
  {owner:{
    node_id:"Toya Amechi",
    avatar_url:"https://via.placeholder.com/75",
    login: "Microsoft"
  }
  }
]

class Form extends React.Component{
 
  constructor(props){
    super(props);
    this.state={
      value:"",
      handleChange:this.handleChange
    }
  }
  
   handleSubmit = (event) =>{
    event.preventDefault();
    
    this.props.onSubmit(this.state.value.trim());
    
       this.setState({
        value:''
       });
    
  }
  
   handleChange = (event)=>{
    this.setState({value:event.target.value});
  }
  
  
  
  render(){
    return(
      <form  style={{padding:"10px",backgroundColor:"#fff"}} onSubmit={this.handleSubmit} >
        <input type="text"  required  value={this.state.value} onChange={this.state.handleChange} required />
        <button type="Submit"> Submit </button>
      </form>
    );
    
  }
  
  
}

const imgStyle={
  width:"75px",
  height:"75px"
}



function Card(props){
  
  return(
    <div className="">
        <img src={ props.owner.avatar_url} style={imgStyle} />
      <div style={{display:"inline-block"}}>
        <p> {props.owner.node_id}  </p>
        <p> {props.owner.login} </p>
        </div>
    </div>
  );
}

class CardList extends React.Component{
  
  render(){
   return(
     <>
      { this.props.data.map((profile)=><Card {...profile} key={profile.owner.node_id} />)}
      </>
    )
  
  }
 
  
}

class MainBody extends React.Component{
   constructor(props){
    super(props);
    this.state={
       profiles:testData
    
    }
  }
  
  
 handleSubmit =async (val)=>{
   
    console.log(val);
    let resp =  await fetchData(val);
    
    console.log(resp);
     
      this.setState({
        profiles:resp.items
      })
    
     
     
  }
  
  render(){
    return(
      <div>
       <Form  onSubmit={this.handleSubmit} />
       <CardList  data={this.state.profiles} />
      </div>
    );
    
  }
  
}


export default MainBody;
