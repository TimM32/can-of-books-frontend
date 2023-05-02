import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import bookImg from '../../book.PNG';
import Image from 'react-bootstrap/Image';

class BestBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],


        };

    }


    getBooks = async () => {
        try {
            let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
            // console.log('results from api', results);
            this.setState({
                books: results.data
            })
        } catch (error) {
            console.log('we have an error: ', error.response.data)
        }
    }

    componentDidMount() {
        this.getBooks();
    }

    render() {
        console.log('AHHHHHH', this.state.books);

        //    return console.log('YESSS' ,book.title);
        return (
            <>
                <Container>
                    {this.state.books.length ? (

                        <Carousel id="carousel">
                            {this.state.books.map(book => (
                                <Carousel.Item key={book._id} >
                                    <Image
                                        className="w-100"
                                        id="carousel-image"
                                        src={bookImg}
                                        alt={book.name} />
                                    <Carousel.Caption id="carouse-text-box">
                                        <h2 className="carousel=text">{book.title}</h2>
                                        <p className="carousel-text">{book.description}</p>
                                        <p className="carousel-text">Status: {book.status}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}

                        </Carousel>
                        ) //: this.state.errorMessage.length ?
                        // <ErrorAlert closeError={this.closeError} errorMessage={this.state.errorMessage} />
                        : <h3 className="text-center" >Book Not Found</h3>

                     }

                </Container>
            </>
        )
    }

};


export default BestBooks;