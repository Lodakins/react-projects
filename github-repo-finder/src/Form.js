import { React, Component } from 'react';


const btnStyle={
    backgroundColor:"#0f5132",
    color:"#fff",
    padding:"9px 40px"
}

class Form extends Component{
 
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
          <div className="container-fluid" style={{backgroundColor:"#eee"}}>
              <div className="row">
                  <div className="col-md-7 mx-auto">
                  <form  style={{padding:"10px"}} onSubmit={this.handleSubmit} >
                    <label className="mb-2" style={{fontSize:"20px"}}> Enter a repo name.</label>
                    <input type="text" className="form-control"  required  value={this.state.value} onChange={this.state.handleChange}  />
                    <button type="Submit" className="btn btn-lg mt-3" style={btnStyle} > {this.props.btnText} </button>
                </form>
                  </div>
                  <div className="col-md-4">
                      <select>
                          
                      </select>
                  </div>
              </div>
            
          </div>
        
      );
      
    }
    
    
  }

  
  
export default Form;