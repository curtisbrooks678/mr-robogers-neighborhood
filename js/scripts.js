

function multDigits(input) {
  const digitStringArr = input.toString().split("");
  let digitIntArr = digitStringArr.map(Number);
  console.log(digitIntArr);
  finalArr = []
  digitIntArr.forEach(function (element) {
    if (element === 1) {
      finalArr.push("Beep!");
    } else if (element === 2) {
      finalArr.push("Boop!");
    } else if (element === 3) {
      finalArr.push("Won't you be my neighbor?");
    } else {
      finalArr.push(element);
    }
  });
}

function neighborBot(input) { 
  let inputRange = [];
  for (i = 0; i < input + 1; i++) {
    inputRange.push(i);
  }
  finalArr = [];
  inputRange.forEach(function (element) {
      if (element === 0) {
        finalArr.push("0");
      } else if (element === 1) {
        finalArr.push("Beep!");
      } else if (element === 2) {
        finalArr.push("Boop!");
      } else if (element === 3) {
        finalArr.push("Won't you be my neighbor?");
      } else {
        finalArr.push(element);
      }
  });
  alert(finalArr)
}



  // inputRange = [...Array(input + 1).keys()

  // let inputRange1 = []
  // for (i = 0; i < input + 1; i++) {
  //   inputRange1.push(parseInt(i));
  // }
  // console.log(inputRange1);
