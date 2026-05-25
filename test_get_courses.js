const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './server/.env' });
const axios = require('axios');

const token = jwt.sign({
    email: 'preetdhote2018@gmail.com',
    id: '69a2cbeb50ca945a75179f1c',
    accountType: 'Instructor'
}, process.env.JWT_SECRET, { expiresIn: '24h' });

axios.get('http://localhost:4000/api/v1/course/getInstructorCourses', {
    headers: { Authorization: 'Bearer ' + token }
}).then(res => {
    console.log('STATUS:', res.status);
    console.log('DATA LENGTH:', res.data.data.length);
}).catch(err => {
    console.log('ERROR STATUS:', err.response?.status);
    console.log('ERROR RESPONSE:', err.response?.data);
});
