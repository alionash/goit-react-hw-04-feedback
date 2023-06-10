import PropTypes from 'prop-types';
import React from 'react';
import { Message } from './notification.styled';

const Notification = ({ message }) =>
    <Message>
        {message}
    </Message>

export default Notification;

Notification.propTypes = {
    title: PropTypes.string,
};