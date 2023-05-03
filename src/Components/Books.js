import React from "react";
import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";


class Books extends React.Component {

    render() {
        console.log('Ripped pages', this.props.books);
        let books = this.props.books.map((book) => (
        <Book
        book={book}
        key={book._id}
        />
        ));
        return (
        <Container>
            <ListGroup>{books}</ListGroup>
        </Container>
        );
    }
}

class Book extends Books {
    render() {
        console.log(this.props.book._id, 'YAAAA');
        return (
            <ListGroupItem>
                {this.props.book.name}
                <Button variant="success" onClick={() => this.props.deleteBooks(this.props.book._id)}>Delete Book</Button>
            </ListGroupItem>
        )
    }
    
    
}



export default Books;