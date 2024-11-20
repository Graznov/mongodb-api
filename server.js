const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const Movie = require("./models/movie");
const movieRoutes = require('./routes/movie-routes');

// Настройка CORS
const corsOptions = {
    origin: 'http://localhost:5173',  // Заменить на нужный домен или массив доменов или разрешить все домены '*'
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Разрешаем HTTP-методы
    allowedHeaders: ['Content-Type', 'Authorization'],  //Разрешаем заголовки
    credentials: true,              // Разрешить отправку куки и авторизационных данных
};


const PORT = 3000
const URL =  'mongodb://localhost:27017/moviesbox';

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(movieRoutes)


mongoose
    .connect(URL)
    .then(()=>console.log('Connected to MongoDB...'))
    .catch((err)=>console.log(`DB connection failed: ${err}`));

app.listen(PORT, (err) =>{
    err ? console.log(err) : console.log(`Listening port ${PORT}`)
})
