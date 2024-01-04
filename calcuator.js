const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");

  /* JavaScript for inserting the number in display */

    function insert(num) {
        calculation.textContent += num;
        console.log(num);               
    }

  /* JavaScript for clear all the number in display */  

    document.getElementById("clear").addEventListener("click", function(){
        calculation.textContent = "";
        result.textContent = 0;
    });   

   /* JavaScript for remove back the number in display */ 

    document.getElementById("back").addEventListener("click", function() {
        var exp = calculation.textContent;
        calculation.textContent = exp.substring(0, exp.length-1);
    });
   
   /* JavaScript for result the calculation of number in display */ 

   document.getElementById("equal").addEventListener("click", function(){
        var exp = calculation.textContent;
        result.textContent = + eval(exp);
        calculation.textContent = result.textContent; 
       /*calculation.textContent = ''; */ 
    });

   /* JavaScript for using keyboard event in code */ 

    document.body.addEventListener('keydown', (event) => {
        if (event.key === '1') {
          insert('1');
        } else if (event.key === '2') {
            insert('2');
        } else if (event.key === '3') {
            insert('3');
        } else if (event.key === '4') {
            insert('4');
        } else if (event.key === '5') {
            insert('5');
        } else if (event.key === '6') {
            insert('6');
        } else if (event.key === '7') {
            insert('7');
        } else if (event.key === '8') {
            insert('8');
        } else if (event.key === '9') {
            insert('9');
        } else if (event.key === '0') {
            insert('0');
        } else if (event.key === '*') {
            insert('*');
        } else if (event.key === '/') {
            insert('/');
        } else if (event.key === '+') {
            insert('+');
        } else if (event.key === '-') {
            insert('-');
        } else if (event.key === '.') {
            insert('.');
        } else if (event.key === 'Enter') {
            var exp = calculation.textContent;
           result.textContent = + eval(exp);
           calculation.textContent = result.textContent;
        } else if (event.key === 'Backspace') {
            var exp = calculation.textContent;
           calculation.textContent = exp.substring(0, exp.length-1);       
        } else if (event.key === 'Delete') {
            calculation.textContent = "";
           result.textContent = 0;       
        }
    });

     