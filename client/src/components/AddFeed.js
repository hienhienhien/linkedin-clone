'use strict';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class AddFeed extends Component {
    constructor(props) {
        super(props);
        //feed

    }

    render() {
        return (
            <div>
                <h1>Add new feed</h1>
                <form
                    onSubmit={(e) => {
                    e.preventDefault();
                    this.props.addFeed({"title": this.title.value, "author": this.author.value, "content": this.content.value});
                    {/*title.value = '';
                    author.value = '';
                    content.value = '';*/}
                }}>
                    <label htmlFor="title">Title</label>
                    <input
                        className="form-control col-md-12"
                        ref={(ref) => this.title = ref}/>
                    <br/>
                    <label htmlFor="content">Content</label>
                    <input
                        className="form-control col-md-12"
                        ref={(ref) => this.content = ref}/>
                    <br/>
                    <label htmlFor="author">Author</label>
                    <input
                        className="form-control col-md-12"
                        ref={(ref) => this.author = ref}/>
                    <br/>
                    <input type="submit"/>
                </form>

            </div>
        );
    }
}

export default AddFeed;
