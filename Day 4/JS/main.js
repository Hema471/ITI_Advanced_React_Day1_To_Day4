//Day 4

//Inheritance EX

//Parent

class Student {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
}

class Teacher extends Student {
  constructor(id, username, salary) {
    super(id, username);
    this.s = salary;
  }
}

let stuFirst = new Student("220200107", "Ibrahim");
let teaFirst = new Teacher("123456", "Ali", 5000);

console.log(stuFirst.i); // 220200107
console.log(stuFirst.u); // Ibrahim
console.log(teaFirst.i); // 123456
console.log(teaFirst.u); // Ali
console.log(teaFirst.s); // 5000

//Q3

// Object destructuring EX
let studentsObj = {
  name: "Ibrahim",
  age: 21,
  gender: "male",
};

let { name } = studentsObj;

console.log(name);

// Array destructuring EX

let studentsArr = [1, 2, 3];
let [x, y, z] = studentsArr;

console.log(x);
console.log(y);
console.log(z);

//Q2



let hema2 = function () {
  return new Promise(function (resolveFun, rejectFun) {
    setTimeout(function () {
      let userImg = document.createElement("img");
      userImg.src = "Images/user-documentation.png";
      userImg.alt = "user Image";
      userImg.style.cssText = "margin: 50px auto; width : 250px";
      document.body.appendChild(userImg);
      resolveFun(); // Resolve the promise
    }, 1000);
  });
};

let hema1 = function () {
  return new Promise(function (resolveFun, rejectFun) {
    setTimeout(function () {
      let wel = document.createElement("p");
      wel.innerHTML = "Welcome";
      document.body.appendChild(wel);
      resolveFun(); // Resolve the promise
    }, 3000);
  });
};



let hema3 = function () {
  return new Promise(function (resolveFun, rejectFun) {
    setTimeout(function () {
      let thx = document.createElement("p");
      thx.innerHTML = "Thanks";
      document.body.appendChild(thx);
      resolveFun(); // Resolve the promise
    }, 3000);
  });
};

let hema4 = function () {
  return new Promise(function (resolveFun, rejectFun) {
    setTimeout(function () {
      window.location.href = "https://www.google.com"; // Bom
      resolveFun(); // Resolve the promise
    }, 2000);
  });
};

async function show() {
  try {
    // let show1 = await hema1();
    // let show2 = await hema2(show1);
    // let show3 = await hema3(show2);
    // let show4 = await hema4(show3);
    await hema1();
    await hema2();
    await hema3();
    await hema4();
    console.log(show4);
  } catch (error) {
    console.log(error);
  }
}

show();
