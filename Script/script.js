
    let age = parseInt(prompt("Enter your age:"));
    if(age >= 25) {
        alert("You are 25 years old or older.");
    } else {
        alert("You are younger than 25 years old.");
    }
    
    let number = parseInt(prompt("Enter a number:"));
    if(number < 100){
        alert("You entered a number less than 100");
    } else {
        alert("You entered a number 100 or greater");
    }

    function print() {
        for (var i = 0; i <= 30; i++) {
      document.write(i + "<br>"); 
    }
        }

    function print1() {
        for (var i = 0; i <= 40; i += 2) {
      document.write(i + "<br>"); 
    }
        }
    function print2() {
        for (var i = 40; i >= 10; i--) {
            if (i % 3 === 0) {
        document.write(i + "<br>"); 
    }
       }
    }
