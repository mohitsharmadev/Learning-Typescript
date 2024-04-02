interface StudentGrades {
  //index signature
  [subject: string]: number;
}

const grades: StudentGrades = {
  Math: 90,
  English: 85,
  History: 78,
};

console.log(grades["Math"]);
