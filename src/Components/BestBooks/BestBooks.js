import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';


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
        let allBookItems = this.state.books.map((book, index) => {
            //    return console.log('YESSS' ,book.title);
            return (
                <Carousel.Item key={index}>
                    <img alt="{book.title" />
                    <Carousel.Caption>            
                <h3>Title: {book.title}
                    Description: {book.description}
                    Status: {book.status}
                </h3>
                 </Carousel.Caption>
                 </Carousel.Item>
            );
        });

        // console.log('Yooooo' ,allBookItems);
        return (
            <>
                {
                    this.state.books.length > 0 &&

                    <Carousel>
                        {allBookItems}
                    </Carousel>

                }

            </>
        )
    }

}


export default BestBooks;