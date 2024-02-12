let myTask = prompt("Enter The Number of Your Task [1,2,3,4,5]");

switch (myTask) {
  case "1":
    // ##Q1
    function job() {
      return new Promise(function (resolve, reject) {
        reject();
      });
    }

    let promise1 = job();

    promise1

      .then(function () {
        console.log("Success 1");
      })

      .then(function () {
        console.log("Success 2");
      })

      .then(function () {
        console.log("Success 3");
      })

      .catch(function () {
        console.log("Error 1");
      })

      .then(function () {
        console.log("Success 4");
      });
    // Output
    // Error 1
    // Success 4
    break;
  case "2":
    // ##Q2
    function job(state) {
      return new Promise(function (resolve, reject) {
        if (state) {
          resolve("success");
        } else {
          reject("error");
        }
      });
    }

    let promise2 = job(true);

    promise2

      .then(function (data) {
        console.log(data);

        return job(false);
      })

      .catch(function (error) {
        console.log(error);

        return "Error caught";
      })

      .then(function (data) {
        console.log(data);

        return job(true);
      })

      .catch(function (error) {
        console.log(error);
      });
    // Output
    // success
    //  error
    //  Error caught
    break;
  case "3":
    // ##Q3
    function job(state) {
      return new Promise(function (resolve, reject) {
        if (state) {
          resolve("success");
        } else {
          reject("error");
        }
      });
    }

    let promise = job(true);

    promise

      .then(function (data) {
        console.log(data);

        return job(true);
      })

      .then(function (data) {
        if (data !== "victory") {
          throw "Defeat";
        }

        return job(true);
      })

      .then(function (data) {
        console.log(data);
      })

      .catch(function (error) {
        console.log(error);

        return job(false);
      })

      .then(function (data) {
        console.log(data);

        return job(true);
      })

      .catch(function (error) {
        console.log(error);

        return "Error caught";
      })

      .then(function (data) {
        console.log(data);

        return new Error("test");
      })

      .then(function (data) {
        console.log("Success:", data.message);
      })

      .catch(function (data) {
        console.log("Error:", data.message);
      });
    //Output
    // success
    //  Defeat
    //  error
    //  Error caught
    //  Success: test
    break;
  case "4":
    //##Q1 Converted
    function job() {
      return new Promise(function (resolve, reject) {
        reject();
      });
    }

    async function main() {
      try {
        await promise5;
        console.log("Success 1");

        await Promise.resolve();
        console.log("Success 2");

        await Promise.resolve();
        console.log("Success 3");
      } catch {
        console.log("Error 1");
      }

      try {
        await Promise.resolve();
        console.log("Success 4");
      } catch {
       
      }
    }

    let promise5 = job();
    main();
    
    break;
  case "5":
    //##Q2 Converted
    function job(state) {
      return new Promise(function (resolve, reject) {
        if (state) {
          resolve("success");
        } else {
          reject("error");
        }
      });
    }

    async function main2() {
      try {
        let data = await promise3;
        console.log(data);

        data = await job(false);
      } catch (error) {
        console.log(error);

        data = "Error caught";
      }

      console.log(data);

      try {
        data = await job(true);
      } catch (error) {
        console.log(error);
      }
    }

    let promise3 = job(true);
    main2();

    break;
  default:
    console.log("Wrong Task Number");
}
