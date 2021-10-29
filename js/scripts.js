
function beepBoop(input) {
  const digitStringArr = input.toString().split("");
  if (digitStringArr.includes("3")) {
    return "Won't you be my neighbor?";
  } else if (digitStringArr.includes("2")) {
    return "Boop!";
  } else if (digitStringArr.includes("1")) {
    return "Beep!";
  } else {
    return input;
  }
}

function neighborBot(input) { 
  let inputRange = [];
  for (i = 0; i <= input; i++) {
    inputRange.push(" " + i);
  }
  finalArr = [];
  inputRange.forEach(function (element) {
      finalArr.push(" " + beepBoop(element));
  });
  return finalArr;
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const input = $("input#number").val();
    $("#output").text(neighborBot(input));
    console.log(input);
  });
});

