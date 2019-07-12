import React, { Component } from 'react';
import { Route } from "react-router-dom";
import BlogRoll from './BlogRoll'
import BlogPost from './BlogPost'
import './Blog.css'


class Blog extends Component {

    render () {

        let match = this.props.match
    
        return (
            <div className="Blog">
                <Route exact path={process.env.PUBLIC_URL + `${match.path}/:slug`} component={BlogPost} />
                <Route exact path={process.env.PUBLIC_URL + match.path} component={BlogRoll} />
            </div>
        )
    }
}

export default Blog