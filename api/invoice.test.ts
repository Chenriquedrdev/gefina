import supertest from 'supertest';

import app from './app.ts';

const request = supertest(app);