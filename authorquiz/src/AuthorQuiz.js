import React, { useState } from 'react';
import './App.css';
import './bootstrap.min.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';

 
function Hero() {
  return (<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select the book written by the author shown</p>
    </div>
  </div>);
}

function Book({title,onClick}) {
  return (<div className="answer" onClick={(e)=>{onClick(title)}}>
    <h4 id={title} >{title}</h4>
  </div>
  );
}

Turn.propTypes ={
    author:PropTypes.shape({
      name:PropTypes.string.isRequired,
      imageUrl:PropTypes.string.isRequired,
      imageSource:PropTypes.string,
      books:PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    highLight:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
}

function Turn({author, books,highLight,onClick}) {

  function highLightBackground(hightLight){

    let mapping={
      'none':"",
      'correct':'green',
      'incorrect':"red"
    }

    return mapping[hightLight];
  }
  return (<div className="row turn" style={{backgroundColor: highLightBackground(highLight)}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author"/>
    </div>
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title} onClick={onClick}/>)}
    </div>
  </div>);
}

function Continue({status,resetState}) {
  const [count,setCounter] = useState(0);
  return  status== "correct" ?
   ( <div style={{textAlign:"right"}}> <button className="btn btn-secondary mt-3" onClick={resetState}> Continue {counter} </button></div>
  ) :"" 
   
}

function AddAuthor(){
  return(
    <Link to="/add"> Add Author</Link>
  )

}

function Footer() {
  return (<div id="footer" className="row">
    <div className="col-12">
        <p className="text-muted credit">
          All images are from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikemedia Commons</a> and are in the public domain
        </p>
    </div>
  </div>);
}

function mapStateToProps(state){
  return{
    turnData: state.turnData,
    highLight: state.highLight
  }
}

function mapDispatchToProps(dispatch){
    return {
      onClick:(answer)=>{
          dispatch({type:"ANSWER_SELECTED",answer})
      },
      resetState:(answer)=>{
        dispatch({type:"CONTINUE",answer})
      }
    }
}

const AuthorQuiz = connect(mapStateToProps,mapDispatchToProps)(function({turnData,highLight,onClick,resetState}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highLight={highLight} onClick={onClick}/>
      <Continue status ={highLight} resetState={resetState}/>
      <AddAuthor />
      <Footer />
    </div>
  );
}
);

export default AuthorQuiz;
