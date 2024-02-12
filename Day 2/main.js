alert("Enter question number and Open console to see the output");
let QuestionNum = parseInt(prompt("Enter Question Number => [1,2,3,4,5,6,7]")); 
// The output from prompt is string  
switch (QuestionNum) {
  case 1:
    // Q1
    alert("Welcome to my site");
    let userInput = prompt("Please Enter Your Name");
    console.log(`Wlecome ${userInput}`);
    break;
  case 2:
    //Q2
    let userNum1 = prompt("Please Enter Number 1");
    let userNum2 = prompt("Please Enter Number 2");
    function sum(Num1, Num2) {
      return Num1 + Num2;
    }
    console.log("Sum = " + sum(parseInt(userNum1), parseInt(userNum2)));
    break;
  case 3:
    //Q3
    let userNum3 = prompt("Enter Your Number");
    function lessThanOrEqualToZero(Num3) {
      return Num3 <= 0 ? true : false;
    }
    console.log(lessThanOrEqualToZero(userNum3));
    break;
  case 4:
    //Q4
    let userFaculty = prompt("Enter Your Faculty");
    switch (userFaculty.toLocaleUpperCase()) {
      case "FCI":
        console.log("You’re eligible to Programing tracks");
        break;
      case "ENGINEERING":
        console.log("You’re eligible to Network and Embedded tracks");
        break;
      case "COMMERCE":
        console.log("You’re eligible to SW fundamentals track");
        break;
      default:
        console.log("You’re eligible to SW fundamentals track");
    }
    break;
  case 5:
    //Q5
    alert("To claculate the area of a triangle");
    let triangleBase = prompt("Enter The Base of triangle");
    let triangleHeight = prompt("Enter The Base of Height");
    function triArea(base, height) {
      return `Area = ${(base * height) / 2}`;
    }
    console.log(triArea(parseInt(triangleBase), parseInt(triangleHeight)));
    break;
  case 6:
    // Bonus Assignment
    //Q6
    for (let header = 1; header <= 6; header++) {
      document.write(`<h${header}> welcome to my page <h${header}>`);
    }

    // Another Sol
    // for (let i = 30; i > 0; i = i - 5) {
    //   let myDiv = document.createElement("div");
    //   myDiv.innerHTML = "Welcome to my page";
    //   myDiv.style.fontSize = `${i}px`;
    //   document.body.appendChild(myDiv);
    // }
    break;
  case 7:
    // Bonus Assignment
    // Q7
    // Take Data From User
    let myName = prompt("Enter Your Name");
    let myBirth = prompt("Enter Your Birth Year");
    let myAge = prompt("Enter Your Age");
    // First Row
    let myData1 = document.createElement("td");
    let myData2 = document.createElement("td");
    myData1.style.cssText =
      "border: 1px solid black; padding: 5px; width: 90px; font-weight: bold;";
    myData2.style.cssText =
      "border: 1px solid black; padding: 5px; width: 90px; font-weight: bold;";
    myData1.innerHTML = "Name";
    myData2.innerHTML = `${myName}`;
    let myRow1 = document.createElement("tr");
    myRow1.appendChild(myData1);
    myRow1.appendChild(myData2);
    // Second Row
    let myData3 = document.createElement("td");
    let myData4 = document.createElement("td");
    myData3.style.cssText =
      "border: 1px solid black; padding: 5px; width: 90px; font-weight: bold;";
    myData4.style.cssText =
      "border: 1px solid black; padding: 5px; width: 90px; font-weight: bold;";
    myData3.innerHTML = "Birth Year";
    myData4.innerHTML = `${myBirth}`;
    let myRow2 = document.createElement("tr");
    myRow2.appendChild(myData3);
    myRow2.appendChild(myData4);
    // Third Row
    let myData5 = document.createElement("td");
    let myData6 = document.createElement("td");
    myData5.style.cssText =
      "border: 1px solid black; padding: 5px; width: 90px; font-weight: bold;";
    myData6.style.cssText =
      "border: 1px solid black; padding: 5px; width: 90px; font-weight: bold;";
    myData5.innerHTML = "Age";
    myData6.innerHTML = `${myAge}`;
    let myRow3 = document.createElement("tr");
    myRow3.appendChild(myData5);
    myRow3.appendChild(myData6);
    // Put All Rows in </table>
    let myTable = document.createElement("table");
    myTable.style.cssText = "margin: 50px auto;";
    myTable.appendChild(myRow1);
    myTable.appendChild(myRow2);
    myTable.appendChild(myRow3);
    // Append the table to the document body
    document.body.appendChild(myTable);
    break;
  default:
    alert("Wrong Question Number");
    break;
}
