'use strict';

// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.join(','));
  // Answer
  const result = fruits.join('');
  console.log('Q1', result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  console.log(fruits.split(','));
  // Answer
  const result = fruits.split(',');
  console.log('Q2', result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
  // Answer
  const result = array.reverse();
  console.log('Q3', result);
}

// Q4. make new array without the first two elements
{
  // TODO: splice vs slice
  const array = [1, 2, 3, 4, 5];
  // console.log(array.splice(0, 2));
  // Answer
  const result = array.slice(2, 5);
  console.log('Q4', result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  console.log(students.filter(v => v.score == 90));
  // Answer
  const result = students.find(student => student.score == 90);
  console.log('Q5', result);
}

// Q6. make an array of enrolled students
{
  console.log(students.filter(v => v.enrolled));
  // Answer
  const result = students.filter(student => student.enrolled);
  console.log('Q6', result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  console.log(students.map(v => v.score));
  // Answer
  const result = students.map(student => student.score);
  console.log('Q7', result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.log(students.find(student => student.score <= 50));
  // Answer
  const result = students.some(student => student.score < 50);
  console.log('Q8', result);
  const result2 = !students.every(student => student.score >= 50);
  console.log('Q8', result2);
}

// Q9. compute students' average score
{
  let sum = 0;
  students.forEach(student => {
    sum += student.score;
  });
  console.log(sum / students.length);
  // Answer
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log('Q9', result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  console.log(
    students
      .map(student => {
        return student.score;
      })
      .join(',')
  );
  // Answer
  const result = students.map(student => student.score).join();
  console.log('Q10', result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  console.log(
    students
      .map(student => {
        return student.score;
      })
      .sort()
      .join(',')
  );
  // Answer
  const result = students
    .map(student => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log('Bonus', result);
}
