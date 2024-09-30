// const {PORT = 5000} = process.env;
const PORT = process.env.PORT || 5001;

const app = require('./app');
app.listen(PORT, () => console.log(`Listen Now on Port ${PORT}!`));
