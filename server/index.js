const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv').config({path:'./.env'});

const PORT = process.env.POST || 5173;

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/`, (error) => {
        if(error) throw error;

        app.listen(PORT, () => {
            console.log(' ##########');
            console.log('### API ####');
            console.log(' #########');
            console.log(`http://${process.env.IP_SERVER}:${PORT}/api/${process.env.API_VERSION}`);
        })
    }
)

