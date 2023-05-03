import React from 'react';
import '../../App';
import { Link } from 'react-bootstrap-dom';


class Header extends React.Component {

    render() {

        return (
            <>
                <h1>Welcome to Can of Books </h1>
                <nav>
                    <ul>
                        <li>
                            <li className='home-nav'>
                                <Link to={"/"}>Home</Link>
                            </li>
                        </li>
                    </ul>
                </nav>


            </>
        )
    }










}


export default Header;
