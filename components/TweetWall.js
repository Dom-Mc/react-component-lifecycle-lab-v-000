const React = require('react');
const Tweet = require('./Tweet');

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  // NOTE: MOUNT
  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    });
    console.log('componentWillMount() called inside <TweetWall />');
  }

  componentDidMount() {
    console.log('componentDidMount() called inside <TweetWAll />')
  }


  // NOTE: UPDATE
  shouldComponentUpdate(nextProps) {
    console.log('shouldComponentUpdate() called inside <TweetWall />');
    return nextProps.newTweets.length > 0;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate() called inside <TweetWall />');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate() called inside <TweetWall />')
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps() called inside <TweetWall />');
    // const newTweets = this.state.tweets.push(nextProps.newTweets);
    // this.setState({
    //   tweets: newTweets
    // })
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    });
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}

module.exports = TweetWall;
