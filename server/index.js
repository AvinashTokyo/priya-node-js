const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;



// Testing route
app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Testing the server"
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})