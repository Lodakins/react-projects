import './App.css';
import React from 'react';
import Form from './Form';
import ClickyButton from "./ClickyButton";

const fetchData = async (value) =>{
  
  let url = "https://api.github.com/search/repositories?page=1&per_page=30&q=" + value;
  
  let data = await fetch(url);
  
  let resp = await data.json();
  
  return resp;
  
}


const testData=[
  // {owner:{
  //   node_id:"Akinrolabu Lolade",
  //   avatar_url:"https://via.placeholder.com/75",
  //   login: "Google"
  // }
  // },
  // {owner:{
  //   node_id:"Rhoda Fagbemi",
  //   avatar_url:"https://via.placeholder.com/75",
  //   login: "Facebook"
  // }
  // },
  // {owner:{
  //   node_id:"Toya Amechi",
  //   avatar_url:"https://via.placeholder.com/75",
  //   login: "Microsoft"
  // }
  // }
]

const imgStyle={
  width:"100%",
  height:"200px"
}





function Card(props){
  
  return(
    <div className="col-md-3 mt-3 ">
      <div className="card shadow-sm " style={{minHeight:"400px"}}>
          <img src={ props.owner.avatar_url} className="card-img-top" style={imgStyle}  alt="user-profile-pics" />
          <div class="card-body row">
              <div className="col-md-12">
                 <h5>{props.name}</h5>
              </div>
              <div className="col-md-12">
                <p> {props.description}</p>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                      <p> Created at: { props.created_at.split("T")[0]}</p>
                  </div>
                  <div className="col-md-12">
                      <p> Open Issues: { props.open_issues_count}</p>
                  </div>
                  <div className="col-md-12">
                      <div className="row">
                          <div className="col-md-3">
                            <p class="repo-details"> <i class="fa fa-star"></i>{props.stargazers_count}</p>
                          </div>
                          <div className="col-md-3">
                          <p class="repo-details"> <i class="fa fa-code-branch"></i>{props.forks_count}</p>
                          </div>
                          <div className="col-md-3">
                            
                          </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                    <a href={props.html_url} target="_blank" rel="noreferrer"><button className="btn btn-primary"> View on Github</button></a>
                  </div>
                </div>
              </div>
              
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
       profiles:testData,
       btnText:"Search",
       disabled:""
    }
  }
  
  
 handleSubmit =async (val)=>{

    this.setState({
      btnText:"Searching....",
      disabled:"disabled"
    })
   
    console.log(val);
    let resp =  await fetchData(val);
    
      this.setState({
        profiles:resp.items,
        btnText:"Search",
        disabled:""
      })
    
     
     
  }
  
  render(){
    return(
      <div>
       <Form  onSubmit={this.handleSubmit} btnText={this.state.btnText} disabled={this.state.disabled} />
       <CardList  data={this.state.profiles}  />
      </div>
    );
    
  }
  
}


export default MainBody;
