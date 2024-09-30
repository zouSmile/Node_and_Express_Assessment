const {PORT = 5000} = process.env;

const app = require('./app');
app.listen(PORT, () => console.log(`Listen Now on Port ${PORT}!`));