require('dotenv').config();
const sslRedirect = require('heroku-ssl-redirect').default;
const express = require('express');
const path = require('path');
const routes = require('./router');

const app = express();
app.use(sslRedirect());
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
