function Student(name, gender, age) {
    // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов

Student.prototype.addMark = function (mark) {
  //ваш код
  if(this.marks === undefined){ 
    this.marks = [mark];
  } else {  
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  //ваш код
  marks.forEach(el => this.addMark(el))
}

Student.prototype.getAverage = function () {
  //ваш код
  let sum = this.marks.reduce((sum, elem) => sum + elem);
  
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  //ваш код
  delete this.subject;
  delete this.mark;
  this.excluded = reason;
}