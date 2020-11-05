import React from 'react';
import PropTypes from "prop-types";

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <em>@{this.props.tweetData.twitterAccount}</em>
        <br />
        <pre>
          {this.props.tweetData.tweetMessage}
        </pre>
      </div>
    );
  }
}

Tweet.propTypes = {
  tweetData: PropTypes.object.isRequired
};

export default Tweet;