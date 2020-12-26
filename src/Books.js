import React,{useState} from 'react';
import './App.css';


export default function Books(props){
  console.log("props",props);
  const sendBooksDetails=(title)=>{
    props.sendBooksDetails(title)
  }

  return(
    <div className="row">

    <div className="col-lg-2 col-md-2 col-sm-2">
    </div>

    <div className="col-lg-2 col-md-2 col-sm-2 indvBox" onClick={(e)=>sendBooksDetails("Adventures of Sherlock Holmes")}>
    <p>The Adventures of Sherlock Holmes</p>
    <p>Author: Sir Arthur Conan Doyle</p>
    </div>

    <div className="col-lg-2 col-md-2 col-sm-2 indvBox" onClick={(e)=>sendBooksDetails("Jane Eyre")}>
    <p>Jane Eyre</p>
    <p>Author: Sir Arthur Conan Doyle</p>
    </div>

    <div className="col-lg-2 col-md-2 col-sm-2 indvBox" onClick={(e)=>sendBooksDetails("Death on the Nile")}>
    <p>Death on the Nile</p>
    <p>Author: Sir Arthur Conan Doyle</p>
    </div>

    <div className="col-lg-2 col-md-2 col-sm-2 indvBox" onClick={(e)=>sendBooksDetails("Adventures of Sherlock Holmes")}>
    <p>The Adventures of Sherlock Holmes</p>
    <p>Author: Sir Arthur Conan Doyle</p>
    </div>

    <div className="col-lg-2 col-md-2 col-sm-2">
    </div>

    </div>
  )

}
