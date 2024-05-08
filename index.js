var total = 0;

function checkAnswer(answer) {
    const result = document.getElementById('result');

    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        total = total+1;

        //console.log(document.querySelectorAll("p.totalScore"));
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
        total = total-1;
    }
    if(total<0){
      total = 0;
    }else if(total>=2){
      total = 2;
    }
    document.getElementById("totalScore").innerHTML = 'คะแนนรวมเท่ากับ ' + total;
  }


  function check2(answer) {
    const result2 = document.getElementById('result2');
    if (answer === 'b') {
        result2.textContent = "เก่งมาก! IMP ย่อมาจาก IMPROVE";
        result2.style.color = 'green';
        total = total+1;

    } else {
        result2.textContent = "ลองใหม่น้า เกือบถูกแล้ว";
        result2.style.color = 'red';
        total = total-1;
    }
    if(total<0){
      total = 0;
    }else if(total>=2){
      total = 2;
    }
    document.getElementById("totalScore").innerHTML = 'คะแนนรวมเท่ากับ ' + total;
  }

