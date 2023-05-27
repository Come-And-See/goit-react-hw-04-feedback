import React, { Component } from 'react';
import { Statistics } from './Feedback/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Feedback/Section';
import * as css from './Feedback/feedback.styled';
import { Notification } from './Feedback/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeValue = e => {
    this.setState(prevState => ({
      [e.target.textContent]: prevState[e.target.textContent] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };

  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;

  //   return (
  //     <p>
  //       Positive feedback:{' '}
  //       {Math.round(
  //         (good / this.countTotalFeedback().props.children[1]) * 100
  //       ) || 0}
  //       %
  //     </p>
  //   );
  // };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return <p>Total: {good + neutral + bad}</p>;
  // };

  // renderButton = () => {
  //   const { state } = this;
  //   return (
  //     <>
  //       <h1>Please leave feedback</h1>
  //       {Object.keys(state).map(feedback => (
  //         <button key={feedback} type="button" onClick={this.changeValue}>
  //           {feedback}
  //         </button>
  //       ))}
  //     </>
  //   );
  // };

  // renderStatistics = () => {
  //   const { state } = this;
  //   return (
  //     <>
  //       <h2>Statistics</h2>
  //       {Object.keys(state).map(feedback => (
  //         <p key={feedback} type="button">
  //           {feedback}: {state[feedback]}
  //         </p>
  //       ))}
  //     </>
  //   );
  // };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <css.DivAll>
        {/* {this.renderButton()}
        {this.renderStatistics()}
        {this.countTotalFeedback()}
        {this.countPositiveFeedbackPercentage()} */}
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.changeValue}
          />
        </Section>

        <Section title="Statistics">
          {(this.countTotalFeedback() === 0) ? <Notification message="There is no feedback" /> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />}
        </Section>
      </css.DivAll>
    );
  }
}

export default App;
