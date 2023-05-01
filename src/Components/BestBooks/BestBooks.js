import React from 'react';
import axios from 'axios';


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

        return (
            <>



            </>
        )
    }

}


export default BestBooks;