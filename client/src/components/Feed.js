'use strict';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Feed extends Component {
    constructor(props) {
        super(props);
        //feed

    }
    

    render() {
        const id = this.props.feed.id;
        return (
            <div>

                <link
                    rel="stylesheet"
                    href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css"/>
                <div className="container">
                    <div className="well">
                        <div className="media">
                            <a className="pull-left" href="#">
                                <img className="media-object" src="http://placekitten.com/150/150"/>
                            </a>
                            <div className="media-body">
                                <h4 className="media-heading">{this.props.feed.title}</h4>
                                <p className="text-left">By {this.props.feed.author}</p>
                                <p>{this.props.feed.content}</p>
                                <ul className="list-inline list-unstyled">
                                    <li>
                                        <span>
                                            <i className="glyphicon fa fa-thumbs-o-up"></i>
                                            Like
                                        </span>
                                    </li>
                                    <li>|</li>
                                    <span>
                                        <i className="glyphicon glyphicon-comment"></i>
                                        2 comments</span>
                                    
                                    
                                    <li>|</li>
                                    <li>

                                        <span>
                                            <i className="fa fa-facebook-square"></i>
                                        </span>
                                        <span>
                                            <i className="fa fa-twitter-square"></i>
                                        </span>
                                        <span>
                                            <i className="fa fa-google-plus-square"></i>
                                        </span>
                                    </li>
                                     <button onClick={() => {this.props.removeFeed(this.id) }}>Remove</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                </div>

               

            </div>
        );
    }
}

export default Feed;
