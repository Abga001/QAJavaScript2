let myWindow = window.open("", "", "width=300,height=100");
myWindow.document.write("<p> Timed event Baby YEYEAAA </p>");
setTimeout(function () {
  myWindow.close();
}, 5000);

document.getElementById("blueText").onclick = function() {
	alert("Hello World!");
}


//
const counterPlus1 = document.getElementById("counter")
const result = document.getElementById("result")
const count = 0

counterPlus5.addEventListener("click", () => {
  count += 5
  result.innerHTML = count
  document.getElementById('result').innerText = counterPlus5;
})

counterPlus1.addEventListener("click", () => {
  count += 1
  result.innerHTML = count
  document.getElementById('result').innerText = counterPlus1;
})

counterMinus5.addEventListener("click", () => {
  count -= 1
  result.innerHTML = count
  document.getElementById('result').innerText = counterMinus1;
})

counterMinus1.addEventListener("click", () => {
  count -= 5
  result.innerHTML = count
  document.getElementById('result').innerText = counterMinus5;
})