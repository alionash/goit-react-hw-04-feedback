import PropTypes from 'prop-types';
import { Button, Container } from './feedback.styled';

const FeedbackOptions = ({ addGood, addNeutral, addBad }) => 
    <Container>
        <Button type="button" onClick={addGood}>Good</Button>
        <Button type="button" onClick={addNeutral}>Neutral</Button>
        <Button type="button" onClick={addBad}>Bad</Button>
    </Container>


export default FeedbackOptions;

FeedbackOptions.propTypes = {
    addGood: PropTypes.number.isRequired,
    addNeutral: PropTypes.number.isRequired,
    addBad: PropTypes.number.isRequired,
};
