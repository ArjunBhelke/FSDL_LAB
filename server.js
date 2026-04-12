const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/assignment6DB')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String
});

const Student = mongoose.model('Student', studentSchema);

app.post('/student/add', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send(student);
});

app.get('/student/all', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

app.delete('/student/delete/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

app.listen(3000, () => console.log("Server running on port 3000"));