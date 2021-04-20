import './App.css';
import React from 'react';
import Form from './Form';

const fetchData = async (value) =>{
  
  let url = "https://api.github.com/search/repositories?page=1&per_page=30&q=" + value;
  
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

const imgStyle={
  width:"75px",
  height:"75px"
}





function Card(props){
  
  return(
    <div className="col-md-4 mt-3 ">
      <div className="card shadow-sm">
          <img src={ props.owner.avatar_url} style={imgStyle} alt="user-profile-pics" />
        <div style={{display:"inline-block"}}>
          <p> {props.owner.node_id}  </p>
          <p> {props.owner.login} </p>
          </div>
      </div>
    </div>
  );
}

class CardList extends React.Component{
  
  render(){
   return(
     <div className="container-fluid">
        <div className="row">
           { this.props.data.map((profile)=><Card {...profile} key={profile.owner.node_id} />)}
        </div>
     </div>
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
