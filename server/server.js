require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./router');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
