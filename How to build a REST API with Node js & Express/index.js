const Joi = require('joi');
const express = require('express')
const app = express()

app.use(express.json());

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
];

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    // Validate
    const { error } = validateCourse(req.body);
    // If invailed, return 400
    if (error) return res.status(400).send(error.details[0].message);
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with given ID was not found'); // 404
    // Validate
    const { error } = validateCourse(req.body);
    // If invailed, return 400
    if (error) return res.status(400).send(error.details[0].message);
    //Update course
    course.name = req.body.name;
    //Return the update course
    res.send(course)

});

// request course (api/courses/1)
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with given ID was not found'); // 404
    res.send(course); 
});

app.delete('/api/courses/:id', (req, res) => {
    // Look up the course
    // Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with given ID was not found'); // 404
    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    // Return the same course
    res.send(course);
});

/* Print value after ? (?name=2)
app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.query);
});
*/

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));