//Day 3

//Array Of Objects in Q4
// let s = {
//   Name: "Mustafa",
//   Degree: 100,
// };

let students = [
  {
    Name: "Mustafa",
    Degree: 100,
  },
  {
    Name: "Mohamed",
    Degree: 30,
  },
  {
    Name: "Ali",
    Degree: 40,
  },
  {
    Name: "Ahmed",
    Degree: 75,
  },
  {
    Name: "Hassan",
    Degree: 53,
  },
  {
    Name: "Ibrahim",
    Degree: 95,
  },
  {
    Name: "Kamal",
    Degree: 26,
  },
  {
    Name: "Adel",
    Degree: 84,
  },
  {
    Name: "Ashraf",
    Degree: 66,
  },
];

alert("Enter question number and Open console to see the output");
let QuestionNum = prompt("Enter Question Number => [1,2,3,4.1,4.2,4.3,4.4]");

switch (QuestionNum) {
  case "1":
    let CurrentData = new Date();
    document.write(CurrentData);
    console.log(CurrentData);
    break;
  case "2":
    let userEmail = prompt("Enter Your Email");
    if (userEmail.indexOf("@") === 0) {
      console.log("Invalid email");
    } else if (userEmail.indexOf("@") === userEmail.length - 1) {
      console.log("Invalid email");
    } else if (userEmail.indexOf("@") === -1) {
      console.log("You must write @ in your Email");
    } else {
      console.log("Valid email");
    }
    break;
  case "3":
    let userStr1 = prompt("Enter Your Char").toLocaleUpperCase();
    let userStr2 = prompt("enter your Text").toLocaleUpperCase();
    let counter = 0;
    function charCount(funStr1, funStr2) {
      for (let i = 0; i < funStr2.length; i++) {
        if (funStr2[i] === funStr1) {
          counter++;
        }
      }
      return counter;
    }
    console.log(charCount(userStr1, userStr2));
    // //EX
    // charCount("a", "edabit") ➞ 1
    // charCount("c", "Chamber of secrets") ➞ 2
    // charCount("b", "big fat bubble") ➞ 4
    break;
  case "4.1":
    // Student Name, who got degree between 90 and 100

    let stuDegree = function (num) {
      if (num.Degree >= 90 && num.Degree <= 100) {
        return num;
      }
    };
    let degResult = students.find(stuDegree);

    console.log(degResult.Name);
    break;
  case "4.2":
    // Students names, who got a degree less than 60

    let stuNames = students.filter(function (ele) {
      return ele.Degree < 60;
    });

    for (let i = 0; i < stuNames.length; i++) {
      console.log(stuNames[i].Name);
    }

  case "4.3":
    // Push Q

    students.push(
      { Name: "Ayman", Degree: 34 },
      {
        Name: "Mustafa",
        Degree: 90,
      }
    );
    for (let i in students) {
      console.log(students[i]);
    }

    // Pop Q
    students.pop();
    for (let i of students) {
      console.log(i);
    }
    break;
  case "4.4":
    // Sort Q
    students.sort(function (w1, w2) {
      return w1.Name.localeCompare(w2.Name);
    });
    for (let hema in students) {
      console.log(students[hema]);
    }
    break;
  default:
    console.log("Wrong Question Number");
}
