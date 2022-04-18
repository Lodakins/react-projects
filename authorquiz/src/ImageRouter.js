import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import './imageRouter.css';

const characters ={
    "lady_glasses":"https://s.pluralsight.com/authorkit/img/People/Gray/Geek_Female_Circle_Gray.png",
    "tie_guy":"https://s.pluralsight.com/authorkit/img/People/Gray/Male_1_Circle_Gray.png"
  }
  
function Character({character,color}){
    let srcURL = characters[character].replace(/Gray/g, color);
    return(
        <div>
            <img src={srcURL} alt="image" />
        </div>
    );
}
function Dashboard(){
    return(
        <div style={{width:"400px",height:"400px",display:"inline-block"}}>
            <div className="cell">
               <Route path="top/left/:character/:color" component={Character} />
            </div>
            <div className="cell">
              <Route path="top/right/:character/:color" component={Character} />
            </div>
            <div className="cell">
              <Route path="bottom/left/:character/:color" component={Character} />
            </div>
            <div className="cell">
              <Route path="bottem/right/:character/:color" component={Character} />
            </div>
        </div>
    );
}



function ImageContainer(){
    return(
        <div style={{display:"flex",flexFlow:"row"}}>
            <aside style={{color:"red"}}>
                <Character character={"lady_glasses"}  color={"green"} />
                <div style={{display:"flex",flexFlow:"column"}}>
                {
                    ["top","bottom"].map((name)=>{
                      return  ["left","right"].map((pos)=>{
                          return      ["lady_glasses","tie_guy"].map((charac)=>{
                                  return  ["Gray","Green","Orange","Purple"].map((color)=>{
                                       
                                     return  <Link to={`image/${name}/${pos}/:${charac}/:${color}`}>{`${name}/${pos}/${charac}/${color}`}</Link>
                                    })
                                })                   
                        })
                        })
                }
                </div>
               
             {/* {
                ["top","bottom"].map((name)=>{
                ["left","right"].map((pos)=>{
                        ["lady_glasses","tie_guy"].map((charac)=>{
                            ["Gray","Green","Orange","Purple"].map((color)=>{
                                return <div> Just testing </div>
                            // return  <Link to={`${name}/${pos}/${charac}/${color}`}>{`${name}/${pos}/${charac}/${color}`}</Link>
                            })
                        })                   
                })
                })

            } */}
            </aside>
            <main>
            </main>
            </div>
    );




}

export default ImageContainer;