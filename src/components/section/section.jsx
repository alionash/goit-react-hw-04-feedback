import PropTypes from 'prop-types';
import { Title } from './section.styled';

const Section = ({ title, children }) => 
    <section>
        <Title>
            {title}
        </Title>
        {children}
    </section>


export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
};