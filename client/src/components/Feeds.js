'use strict';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Feed from './Feed'

class Feeds extends Component {
    constructor(props) {
        super(props);
        //feeds

    }


    render() {
        
        const feedlist = this.props.feeds.map((feed) => {
            return (<Feed feed={feed} key={feed.id} removeFeed={this.props.remove} />)
        })
        return (
            <div>
                    {feedlist}
            </div>
        );
    }
}

export default Feeds;
