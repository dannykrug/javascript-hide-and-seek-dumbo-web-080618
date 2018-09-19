function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  let numbers = document.getElementById("app").querySelectorAll("ul.ranked-list li")
  for (let i=0;i<numbers.length;i++) {
    numbers[i].innerHTML=parseInt(numbers[i].innerHTML)+n;
  }
}

function deepestChild() {
return document.getElementById('grand-node').querySelector("div div div div div")
}
