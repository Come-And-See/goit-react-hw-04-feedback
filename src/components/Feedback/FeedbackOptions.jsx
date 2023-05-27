import PropTypes from 'prop-types';
import * as css from './feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return <>
    {Object.keys(options).map(feedback => (
      <css.Button key={feedback} type="button" onClick={onLeaveFeedback}>
        {feedback}
      </css.Button>
    ))}
  </>
};


FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};