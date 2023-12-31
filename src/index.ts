import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors({
    credentials: true
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));


const password = 'SlcEj5E0ahbOBCUG';

const MONGO_URL = `mongodb+srv://gabrielcardiano1:${password}@cluster0.ii5eb7h.mongodb.net/?retryWrites=true&w=majority`

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error))

app.use('/', router());