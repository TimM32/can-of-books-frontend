import React from "react";
import { Form, Button, Container } from "react-bootstrap";


class CreateBook extends React.Component {
    render() {
        return (
            <Container className="mt-5">
                <Form onSubmit={this.props.handleBookSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="color">
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="spayNeuter">
                        <Form.Check type="checkbox" label="available" />
                    </Form.Group>
                    <Button type="submit">Add Cat</Button>
                </Form>
            </Container>
        )
    }
}

export default CreateBook;
