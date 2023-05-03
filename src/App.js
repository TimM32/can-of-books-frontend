import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import Books from './Components/Books';
import axios from 'axios';

let SERVER = process.env.REACT_APP_SERVER;



class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      books:[],
    }
  }

  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data
      })
      
    } catch (error) {
      console.log('Houston we have a problem', error.response.data)
    }
  }


  handleBookSubmit = async (event) => {
    event.preventDefault();
    let newBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      
    }
    console.log(newBook, 'New BBBB');
    this.postBook(newBook);
  }


postBook = async (newBookobject) => {
  try {
    let url = `${SERVER}/books`;
    let createBook = await axios.post(url, newBookobject);
    console.log('We made it', createBook);

    this.setState({
      books:[...this.state.books, createBook.data],
    });
  } catch (error) {
    console.log('we got problems', error.response.data);
  }
}


deleteBooks = async (id) => {
  try {
    let url = `${SERVER}/books/${id}`;
    await axios.delete(url);
    let updateBooks = this.state.books.filter(book => book._id !== id);
    this.setState({
      books: updateBooks
    })
  } catch (error) {
    console.log("we have more problems", error.response.data);
  }
};


componentDidMount(){
  this.getBooks();
}

render () {

  return (
    <>
    <Header />
    <Container>
      <h1>Welcome Bookworms</h1>
    </Container>
    <main>
      
    </main>
    
    </>
  )
}










}


export default App;
