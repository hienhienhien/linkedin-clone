import React, {Component} from 'react';

// import './App.css'; import
import NavBar from '../components/NavBar';
import SubHeader from '../components/SubHeader';
import AddFeed from '../components/AddFeed';
import Feeds from '../components/Feeds';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [
        {
      "id": 1,
      "title": "a",
      "author": "typicode",
      "content":"aa"
    },
    {
      "id": 2,
      "title": "b",
      "author": "typicode",
      "content":"bb"
    },
    {
      "id": 3,
      "title": "c",
      "author": "typicode",
      "content":"cc"
    },
    {
      "id": 4,
      "title": "d",
      "author": "typicode",
      "content":"dd"
    }
      ]
    }
    this.apiUrl = 'localhost:3001/feeds'
  }

  componentDidMount() {
    // Make HTTP reques with Axios
    axios
      .get(this.apiUrl)
      .then((res) => {
        console.log(this.state.feeds);
        // Set state with result
        this.setState({feeds: res});
      });
      console.log(this.state.feeds);
  }

  //add new feed
  // addFeed(feed){
  //   //feed = object
  //   axios.post(this.apiUrl,feed)
  //   .then((res) => {
  //     this.state.feeds.push(res.data);
  //     this.setState({
  //       feeds:this.state.feeds
  //     });
  //   })
  // }

  // remove(id){
  //   const newFeeds = this.state.feeds.filter((feed) =>{
  //     if(feed.id !== id) {
  //       return feed;
  //     }
  //   });
  //   axios.delete(this.apiUrl+'/'+id)
  //   .then((res) => {
  //     this.setState({
  //       feeds:newFeeds
  //     })
  //   })

  // }


  addFeed(feed){
    this.state.feeds.push(feed);
    this.setState({
      feeds:this.state.feeds
    })
  }

  removeFeed(id){
    const newFeeds = this.state.feeds.filter((feed) => {
      if(feed.is !== id){
        return feed;
      }
    });
    this.setState({
      feeds:newFeeds
    });
  }

  editFeed(id,feed){

  }

  render() {
    return (
      <div className="container">

        <NavBar/>
        <SubHeader/>
        <AddFeed addFeed={this.addFeed.bind(this)} />
        <Feeds 
        feeds={this.state.feeds} 
        removeFeed={this.removeFeed.bind(this)}
        />

      </div>

    );
  }
}

export default Home;
