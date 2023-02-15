function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks =[];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks !== undefined) {
    this.marks.push(...marks);
  } else {
    return 0;
  }
}

Student.prototype.getAverage = function () {
  return this.marks && this.marks.length ?
  this.marks.reduce((c,v) => c + v, 0) / this.marks.length : 0
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
