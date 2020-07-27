import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component {
    render() {
        return(
            <div>
                <Link to={'/'}>Home</Link>
                <h2>All About Me</h2>
            </div>
        );
    }
}

export default About;