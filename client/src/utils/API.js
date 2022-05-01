import axios from 'axios';

export const sendMessage = ({ email, firstName, lastName, message }) => {
    axios.post('/api/message', {
        email,
        firstName,
        lastName,
        message
    });
};

export default sendMessage;
