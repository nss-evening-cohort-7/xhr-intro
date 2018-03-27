console.log("Top of JS file", Date.now());

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const domString = (catArray) => {
  console.log("catArray", catArray);
  let domString = "";
  for(let i=0; i<catArray.length; i++){
    domString += `<h1>${catArray[i].name}</h1>`;
  }
  printToDom(domString, 'cat-holder')
};

function executeThisFunctionAfterFileLoads (){
  console.log("executeThisFunctionAfterFileLoads", Date.now());
  console.log("this", this);
  console.log("this.responseText", this.responseText);
  const data = JSON.parse(this.responseText);
  console.log("data", data);
  domString(data.cats);
}

function WTF(){
  console.log("something went wrong");
}

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisFunctionAfterFileLoads);
  myRequest.addEventListener("error", WTF);
  myRequest.open("GET", "cats.json");
  myRequest.send();
  console.log("myrequest", myRequest);
};

startApplication();


console.log("Bottom of JS file", Date.now());