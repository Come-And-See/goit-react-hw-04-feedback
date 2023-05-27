import React, { useState } from 'react';
import { Statistics } from './Feedback/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Feedback/Section';
import * as css from './Feedback/feedback.styled';
import { Notification } from './Feedback/Notification';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const options = { good, neutral, bad };

  const changeValue = e => {
    switch (e.target.textContent) {
      case "good":
        setGood(prevState => (prevState + 1));
        break;
      case "neutral":
        setNeutral(prevState => (prevState + 1));
        break;
      case "bad":
        setBad(prevState => (prevState + 1));
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };


  return (
    <css.DivAll>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={changeValue}
        />
      </Section>

      <Section title="Statistics">
        {(countTotalFeedback() === 0) ? <Notification message="There is no feedback" /> :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />}
      </Section>
    </css.DivAll>
  );

}

export default App;
