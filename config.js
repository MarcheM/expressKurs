require('dotenv').config()


const log = process.env.log;
const pass = process.env.pass;

module.exports={
    db: `mongodb+srv://${log}:${pass}@cluster0.f4eyz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    keySession:['twojKlucz'],
    maxAgeSession: 24*60*60*1000
}