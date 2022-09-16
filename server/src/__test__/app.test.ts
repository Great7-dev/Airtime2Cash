import 'dotenv/config';

import app from '../app';

import supertest from 'supertest';

import db from '../config/database.config';

const request = supertest(app);

beforeAll(async () => {
  await db.sync({ force: true }).then(() => {
    console.log('Database successfully created for test');
  });
});

describe('it should test all apis', () => {
  // Testing for sign up

  it('it should create a user', async () => {
    const response = await request.post('/users/create').send({
      firstname: 'Mary',

      lastname: 'Doe',

      username: 'maryjoe',

      email: 'marydoe@yahoo.com',

      phonenumber: '08112345678',

      password: '12345678',

      confirmpassword: '12345678'
    });

    expect(response.status).toBe(201);

    expect(response.body.msg).toBe('User created successfully');

    expect(response.body.status).toBe('Success');

    expect(response.body).toHaveProperty('record');
  });
  it('it should login a user using email', async () => {
    const response = await request.post('/users/login').send({
      email: 'marydoe@yahoo.com',

      password: '12345678'
    });

    expect(response.status).toBe(200);

    expect(response.body.msg).toBe('login successful');

    expect(response.body.status).toBe('success');

    expect(response.body).toHaveProperty('record');

    expect(response.body).toHaveProperty('token');
  });
  it('it should login a user using username', async () => {
    const response = await request.post('/users/login').send({
      username: 'maryjoe',

      password: '12345678'
    });

    expect(response.status).toBe(200);

    expect(response.body.msg).toBe('login successful');

    expect(response.body.status).toBe('success');

    expect(response.body).toHaveProperty('record');

    expect(response.body).toHaveProperty('token');
  });
  it('it should not login unregestered user', async () => {
    const response = await request.post('/users/login').send({
      username: '4444444',

      password: '12345678'
    });

    expect(response.status).toBe(404);

    expect(response.body.msg).toBe('Incorrect username/e-mail or password');

    expect(response.body.status).toBe('fail');
  });
});
