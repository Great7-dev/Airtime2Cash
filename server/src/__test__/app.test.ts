import supertest from "supertest"
import  app  from "../app"
import db from "../config/database.config"
import 'dotenv/config'
const request = supertest(app)

beforeAll(async () => {
  await db.sync({ force: true }).then(() => {
    console.log("Database connected successfully to test");
  })
});
//update user profile
describe("it should test our API", () => {
it("update user profile", async () => {
  const response = await request.post('/users/create').send({
    firstname: "paris",
    lastname: "ohis",
    email: "ddj@yahoo.com",
    username: "parisohis7",
    password: "123456",
    confirmpassword: "123456",
    phonenumber: "09012345678",
  })


    const response2 = await request.post('/users/login').send({
        email: "ddj@yahoo.com",
        password: "123456",
    });
    const {id} = response2.body.record
    const {token} = response2.body
    
    const response3 = await request
    .patch(`/users/update/${id}`)
    .set('authorization', `Bearer ${token}`)
    .send({
        firstname: "Imeh",
        lastname: "Usoro",
    })
    expect(response3.status).toBe(201)
    expect(response3.body.message).toBe('you have successfully updated your profile')
    expect(response3.body).toHaveProperty('record')
})
})