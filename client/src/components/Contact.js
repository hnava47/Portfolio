import { Fragment, useState, forwardRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Title from './Title';

import {
    sendMessage
} from '../utils';

const Alert = forwardRef(function snackAlert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [snackPack, setSnackPack] = useState([]);
    const [open, setOpen] = useState(false);
    const [messageInfo, setMessageInfo] = useState(undefined);

    useEffect(() => {
        if (snackPack.length && !messageInfo) {
            setMessageInfo({ ...snackPack[0] });
            setSnackPack((prev) => prev.slice(1));
            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            setOpen(false);
        }
    }, [snackPack, messageInfo, open]);

    const handleClick = (message, severity) => {
        setSnackPack((prev) => [...prev, { message, severity, key: new Date().getTime() }]);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleExited = () => {
        setMessageInfo(undefined);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || !firstName || !lastName || !message) {
            return handleClick('Contact message did not send. All fields must be defined!', 'error');
        }

        try {
            await sendMessage({
                email,
                firstName,
                lastName,
                message
            });

            setFirstName('');
            setLastName('');
            setEmail('');
            setMessage('');

            handleClick('Message successfully sent', 'success');
        } catch (error) {
            handleClick(error, 'error');
        }
    };

    return(
        <Fragment>
            <Title>Contact</Title>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                }}
                >
                <Box component="form" noValidate onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                multiline
                                rows={4}
                                name="message"
                                label="Message"
                                id="message"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                    Submit
                    </Button>
                </Box>
            </Box>
            <Snackbar
                key={messageInfo ? messageInfo.key : undefined}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                TransitionProps={{ onExited: handleExited }}
            >
                <Alert
                    onClose={handleClose}
                    severity={messageInfo ? messageInfo.severity : undefined}
                    sx={{ width: '100%' }}
                >
                    {messageInfo ? messageInfo.message : undefined}
                </Alert>
            </Snackbar>
        </Fragment>
  );
}

export default Contact;
