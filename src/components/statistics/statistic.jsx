import PropTypes from 'prop-types';
import { Stat } from './statistic.styled';

const Statistic = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage}) => 
    <div>
        <Stat>Good: {good}</Stat>
        <Stat>Neutral: {neutral}</Stat>
        <Stat>Bad: {bad}</Stat>
        <Stat>Total: {countTotalFeedback}</Stat>
        <Stat>Positive feedback: {countPositiveFeedbackPercentage}%</Stat>
    </div>


export default Statistic;

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    countTotalFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};