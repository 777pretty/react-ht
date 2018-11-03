import React, { Component } from 'react';
// import axios from 'axios'
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';


class Blog extends Component {
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" 
                                         exact 
                                        //  activeClassName="active"
                                        //  activeStyle={{backgroundColor: '#3F4448'}}
                                        >
                                         Home</NavLink></li>
                            <li><NavLink to={{pathname: '/new-post',
                                              hash: '#submit',
                                              search: '?quick-submit=true'
                                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>SDDDSAD</h1>} /> */}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }

}

export default Blog;