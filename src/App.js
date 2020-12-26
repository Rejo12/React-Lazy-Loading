import React,{useState,lazy,Suspense} from 'react';
import './App.css';
const Books = lazy(() => import('./Books'));
const BookDetails = lazy(() => import('./BookDetails'));
// import Books from './Books';

function App() {
  const [booktitle,setBookTitle] = useState("");
  const sendBooksDetails=(title)=>{
    setBookTitle(title)
  }
  return (
    <div className="App">
      <header>
      <p className="center">Merry Christmas</p>
      </header>
       <Suspense fallback={<div>Loading...</div>}>
      <Books
      sendBooksDetails={(e)=>sendBooksDetails(e)}/>
      <br/>
      <BookDetails title={booktitle}/>
      </Suspense>
    </div>
  );
}

export default App;
