const React = require('react');
const TweetWall = require('./TweetWall');

const { getTweets } = require('../lib/mockAPI');
const { initialize, update } = require('../lib/chart');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      latestTweets: []
    };
    initialize();
    this.updateChart = this.updateChart.bind(this);
    this.fetchTweets = this.fetchTweets.bind(this);
  }


  // NOTE: MOUNT
  componentWillMount() {
    this.fetchTweets();
    console.log('componentWillMount() called inside <App />')
  }

  componentDidMount() {
    this.startInterval();
    console.log('componentDidMount() called inside <App />');
  }


  // NOTE: UPDATE
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate() called inside <App />');
  // }

  componentWillUpdate() {
    console.log('componentWillUpdate() called inside <App />');
  }

  componentDidUpdate() {
    this.updateChart(this.state.latestTweets.length);
    console.log('componentDidUpdate() called inside <App />');
  }


  // NOTE: UNMOUNT
  componentWillUnmount() {
    this.cleanUpInterval();
    console.log('componentWillUnmount() called inside <App />');
  }

  updateChart(numTweets) {
    update(numTweets);
  }

  startInterval() {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval() {
    clearInterval(this.interval);
  }

  fetchTweets() {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    return (
      <div><TweetWall newTweets={this.state.latestTweets} /></div>
    )
  }
}

module.exports = App;
