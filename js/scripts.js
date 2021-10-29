

function neighborBot(input) { 
  let inputRange = [];
  for (i = 0; i < input + 1; i++) {
    inputRange.push(i.toString());
  }
  inputRange.forEach(function (element) {
      if (element = "0") {
        0;
      } else if (element === "1") {
        element.replace("1", "Beep!");
      } else if (element === "2") {
        "Boop!";
      } else if (element === "3") {
        "Won't you be my neighbor?";
      } else {
        "error";
      }

  
}


  // inputRange = [...Array(input + 1).keys()

  // let inputRange1 = []
  // for (i = 0; i < input + 1; i++) {
  //   inputRange1.push(parseInt(i));
  // }
  // console.log(inputRange1);
