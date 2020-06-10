document.getElementById("seekG").addEventListener("click", G);
document.getElementById("seekB").addEventListener("click", B);
document.getElementById("stop").addEventListener("click", S);
document.getElementById("author").addEventListener("click", author);
document.getElementById("manual").addEventListener("click", manual);

var seeking = false;

<<<<<<< HEAD
function manual() {
  var newURL = "https://wint3rmute.github.io/6obcy/manual.html";
  chrome.tabs.create({ url: newURL });

}

function author() {
  var newURL = "https://github.com/Wint3rmute";
  chrome.tabs.create({ url: newURL });
}

function B() {
  if (seeking != true)
    sendToScript("seekBoys");
=======
function manual()
{
  var newURL = "https://wint3rmute.github.io/6obcy/manual.html";
    chrome.tabs.create({ url: newURL });

}

function author()
{
  var newURL = "https://github.com/Wint3rmute";
    chrome.tabs.create({ url: newURL });
}

function B(){
  if(seeking!=true)
  sendToScript("seekBoys");
>>>>>>> a4b0b03... first commit
  seeking = true;
}


<<<<<<< HEAD
function G() {
  if (seeking != true)
    sendToScript("seekGirls");
=======
function G(){
  if(seeking!=true)
  sendToScript("seekGirls");
>>>>>>> a4b0b03... first commit
  seeking = true;
}


<<<<<<< HEAD
function S() {
=======
function S(){
>>>>>>> a4b0b03... first commit
  seeking = false;
  sendToScript("stop");
}

<<<<<<< HEAD
function sendToScript(messageContent) {
  console.log("sending " + messageContent);

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: messageContent }, function (response) { });
  });
=======
function sendToScript(messageContent)
{
  console.log("sending " + messageContent);

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
chrome.tabs.sendMessage(tabs[0].id, {message: messageContent}, function(response) {});
});
>>>>>>> a4b0b03... first commit
}
