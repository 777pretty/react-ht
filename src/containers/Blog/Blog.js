import React, { Component } from 'react';
// import axios from 'axios'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    }

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
                   {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null} 
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h2>404: Not found</h2>}/>
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>
        );
    }

}

export default Blog;