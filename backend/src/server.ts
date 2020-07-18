import express from 'express';
import cors from 'cors';

import config from './utils/config';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(config.PORT);
