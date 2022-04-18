import React from 'react';
import './bootstrap.min.css';
import { connect} from 'react-redux';
import { withRouter} from 'react-router-dom';



class AddAuthorForm extends React.Component{

        constructor(props){
            super(props);

            this.state={
                name:'',
                imageUrl:'',
                tempBook:'',
                books:[]
            }

            this.onFormChange = this.onFormChange.bind(this);
            this.onFormSubmit = this.onFormSubmit.bind(this);
            this.addAuthorBook = this.addAuthorBook.bind(this);
        }

        onFormChange(event){
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        onFormSubmit(event){
            event.preventDefault();
            this.props.onAddAuthorForm(this.state);
        }


        addAuthorBook(){
            this.setState({
                books:this.state.books.concat(this.state.tempBook),
                tempBook:'',
            })
        }

        render(){

            return(
                <div className="container">
                    <form className="row" onSubmit={this.onFormSubmit}>
                        <div className="col-md-12">
                            <label htmlFor="name"> Author name</label>
                             <input type="text" value={this.state.name} name="name" className="form-control" onChange={this.onFormChange} />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="name"> Author Image URL</label>
                            <input type="text" value={this.state.imageUrl} name="imageUrl" className="form-control" onChange={this.onFormChange}  />
                        </div>
                        <div className="col-md-12">
                            <h2> Author Book</h2>
                            <div>
                               { this.state.books.map((item)=><p key={item}>{item}</p>)}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <input type="text" value={this.state.tempBook} onChange={this.onFormChange} name="tempBook" className="form-control" />
                            <button type="button" className="btn btn-sucess" onClick={this.addAuthorBook}>Add Book</button>
                        </div>
                       
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary mt-3"> Add</button>
                        </div>
                </form>
                </div>
            );


        }

}


function mapsDispatchToProps(dispatch,props){
    return {
        onAddAuthorForm:(answer)=>{
            dispatch({type:"SUBMIT",answer})
            props.history.push('/');
        }
    }

}


export default withRouter(connect(()=>{},mapsDispatchToProps)(AddAuthorForm));


