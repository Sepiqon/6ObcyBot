//bot
//vars
<<<<<<< HEAD
    var found = false;
    var startTime = performance.now();


    function pressEscape(){
    $("#box > div.box-interface.unselectable > div.box-interface-left.special-opti > button").click();
    }

    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function test()
  {alert("TO GOWNO DZIALA!");}

    function sendMessage(message)
    {
      $("#box-interface-input").val(message);

      $("#box > div.box-interface.unselectable > div.box-interface-right.special-opti > button").click();
    }

    function getLastMessage()
    {
      var message =  $("#log-dynamic").children().last().children().last().children().last().children().last().html();

      return message;
    }

    function hasDisconnected()
    {
      var display = $("#log-static-end-talk").children().first().css("display");
      if(display == "block")
        return true;
      else
        return false;
    }


    function analyzeMessage(message, who)
    {
      console.log("analyzing " + message);

      if(who == 0){
        if(message.indexOf("km") !=-1)
          return 0;

        if(message.indexOf(" k") != -1)
          return 1;

        if(message.indexOf("k ") != -1)
          return 1;

        if(message.indexOf("m") != -1)
        return -1;

        if(message.indexOf("k") != -1)
          return 1;
      }else{
        if(message.indexOf("km") !=-1)
          return 0;

        if(message.indexOf(" m") != -1)
          return 1;

        if(message.indexOf("m ") != -1)
          return 1;

        if(message.indexOf("k") != -1)
        return -1;

        if(message.indexOf("m") != -1)
          return 1;
      }
      return 0;
    }

    function isConnected()
    {
      var display = $("#log-begin").css("display");
      if(display == "block")
        return true;
      else
        return false;
    }



    async function seek(who)
    {

      console.log("searching for " + who );
      var messageSent = false;
      var message = null;
      found = false;

      while(!found)
      {
        if(hasDisconnected())
        {
          console.log("alien disconnected!");
          messageSent = false;
          pressEscape();
          pressEscape();
          pressEscape();
          continue;
        }


        if(!isConnected())
        {
          messageSent = false;
          console.log("not connected yet!");
          await sleep(1000);
          continue;
        }

        if(!messageSent)
        {
          var Przywitania = [
            "Witam, fajna dziś pogoda nie prawdasz?",
            "Cześć",
            "Siema, siemanko",
            "Dzień dobry",
            "Hej",
            "Witam, miłego dnia"
          ];
          sendMessage(Przywitania[Math.floor(Math.random() * Przywitania.length)]);
          
          if(who == 1)
            {sendMessage("k");}
          else
            {sendMessage("m");}


          sendMessage("km?");

          messageSent = true;
          startTime = performance.now();
          await sleep(1000);
          continue;
        }

        message = getLastMessage().toLowerCase();

        var analysis = analyzeMessage(message, who);
        if(analysis == 1)
        {
          if(!messageSent || messageSent)
          {
            sendMessage("lat?");
            messageSent = true;
            startTime = performance.now();
            await sleep(1000);
            continue;
          }
         
          if(ages(getLastMessage().toLowerCase())) {
            messageSent("ok, ja 15");
          } else {
            //messageSent("Ide szukac dalej");
            pressEscape();
            pressEscape();
            pressEscape();
          }
          found = true;
          //console.log("found!");
          alert("Znaleziono!");
        }
        else if(analysis == 0)
        {
          //console.log("no good answer");
        }else {
          console.log("NOPE");
          sendMessage("chyba masz siusiaka więc elo");

          await sleep(4000);
          messageSent = false;


          if(!isConnected)
          return;

          pressEscape();
          pressEscape();
          pressEscape();
          continue;
        }

                  if(performance.now() - startTime > 20000)
                  {
                    console.log("no answer! disconnecting");
                    pressEscape();
                    pressEscape();
                    pressEscape();
                    continue;
                  }else{
                    console.log((performance.now() - startTime)/1000 );
                    await sleep(1000);
                  }

      }
    }
=======
var found = false;
var startTime = performance.now();


function pressEscape() {
  $("#box > div.box-interface.unselectable > div.box-interface-left.special-opti > button").click();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function test() { alert("TO GOWNO DZIALA!"); }

function sendMessage(message) {
  $("#box-interface-input").val(message);

  $("#box > div.box-interface.unselectable > div.box-interface-right.special-opti > button").click();
}

function getLastMessage() {
  var message = $("#log-dynamic").children().last().children().last().children().last().children().last().html();
  if (message == null) {
    return "";
  }
  return message;
}
function getLastMessageOfYou() {
  var message = $("#log-dynamic").children().last().children().last().children().last().children().first().html();
  message = message.toLowerCase();
  message = message.replace(" ", "");
  console.log("message" + message)
  if (message.localeCompare("ty:") == 0) {
    console.log("ty")
    return true;
  }
  console.log("nie ty")
  return false;
}

function hasDisconnected() {
  var display = $("#log-static-end-talk").children().first().css("display");
  if (display == "block")
    return true;
  else
    return false;
}
function analyzeMessage_km_lat(message, who) {
  message = message.replace(" ", "");
  if ((message.indexOf("m") != -1 || message.indexOf("k") != -1)) {

    var m = message.replace("m", "");
    var k = message.replace("k", "");
    var liczba = 0;
    var test1 = 0;
    var test2 = 0;
    if (k != message) {
      console.log("K:" + k);
      test1 = analyzeMessagekm(message, who);
      console.log(test1);
      test2 = analyzeMessage_age(k);
      console.log(test2);
    } else if (m != message) {
      console.log("M:" + m);

      test1 = analyzeMessagekm(message, who);
      test2 = analyzeMessage_age(m);
    } else {
      return 0;
    }
    if (test1 == 1 && test2 == 1) {
      return 1;
    } else if (test1 == 0 || test2 == 0) {
      return 0;
    } else if (test1 == -1 || test2 == -1) {
      return -1;
    }
  } else {
    return 0;
  }
}
function analyzeMessagekm(message, who) {
  console.log("analyzing " + message);
  if (message.indexOf("bi") != -1 && message.length < 9) {
    return -1;
  }  else if (message.length > 20) {
    return 0;
  }
  if (who == 0 && message.indexOf("hejka") == -1
    && message.indexOf("siema") == -1
    && message.indexOf("siemka") == -1
    && message.indexOf("tylko") == -1) {
    if (message.indexOf("km") != -1 && !getLastMessageOfYou()) {
      sendMessage("Pierwszy zapytałem");
      return 0;
    }
    if (message.indexOf("km") != -1 && getLastMessageOfYou()) {
      return 0;
    }

    if (message.indexOf("m") != -1 && message.length < 8)
      return -1;

    if (message.indexOf("k") != -1 && message.length < 8)
      return 1;
  } else if (message.indexOf("hejka") == -1
    && message.indexOf("siema") == -1
    && message.indexOf("siemka") == -1
    && message.indexOf("tylko") == -1) {
    if (message.indexOf("km") != -1 && !getLastMessageOfYou()) {
      sendMessage("Pierwsza zapytałam");
      return 0;
    }
    if (message.indexOf("km") != -1 && getLastMessageOfYou()) {
      return 0;
    }

    if (message.indexOf("k") != -1 && message.length < 8)
      return -1;

    if (message.indexOf("m") != -1 && message.length < 8)
      return 1;
  }
  return 0;
}
function analyzeMessage_age(message) {
  var a = parseInt(message);
  console.log("a:" + a)
  if (a == 14 || a == 15 || message == "15" || message == "14") {
    return 1;
  } else if (isNaN(a)) {
    return 0;
  } else {
    return -1;
  }
}

function isConnected() {
  var display = $("#log-begin").css("display");
  if (display == "block")
    return true;
  else
    return false;
}



async function seek(who) {

  console.log("searching for " + who);
  var Kroki_wykonane = new Array(60);
  for (var i = 0; i < Kroki_wykonane.length; ++i) { Kroki_wykonane[i] = false; }
  Kroki_wykonane[0] = true;
  notfound = false;
  var message = "";
  found = false;

  while (!found) {
    if (notfound) {
      for (var i = 0; i < Kroki_wykonane.length; ++i) { Kroki_wykonane[i] = false; }
      Kroki_wykonane[0] = true;
      notfound = false;
    }
    if (hasDisconnected()) {
      console.log("alien disconnected!");
      notfound = true;
      pressEscape();
      pressEscape();
      pressEscape();
      continue;
    }
    if (getLastMessage().toLowerCase().indexOf("histo") != -1) {
        sendMessage("Znalazłem historyjkę");
        sendMessage("A więc uciekam, papa")
        await sleep(4000);
        notfound = true;
        if (!isConnected)
          return;
        pressEscape();
        pressEscape();
        pressEscape();
        continue;
    }

    if (!isConnected()) {
      notfound = true;
      console.log("not connected yet!");
      await sleep(1000);
      continue;
    }
    if (getLastMessage().toLowerCase().indexOf("lat") != -1 && !getLastMessageOfYou()) {
      Kroki_wykonane.forEach(element => {
        element = false;
      });
      sendMessage("Ja mam 15, a ty?")
    }
    
    if(getLastMessage().toLowerCase().indexOf("Ja mam 15, a ty?") != -1 && getLastMessageOfYou()){
      message = getLastMessage().toLowerCase();
      var analysis = analyzeMessage_age(message);
      if (analysis == 1) {
        sendMessage("To idealnie");
        sendMessage("Co tam?")
      } else if (analysis == -1) {
        sendMessage("Nie mój wiek, spadam");
        await sleep(4000);
        notfound = true;
        if (!isConnected)
          return;
        pressEscape();
        pressEscape();
        pressEscape();
        continue;
      }
    }

    if (Kroki_wykonane[0]) {

      sendMessage("hej");
      Kroki_wykonane[0] = false;
      Kroki_wykonane[1] = true;
      //zapytaj km
      sendMessage("km?");
      startTime = performance.now();
      sleep(1000);
      continue;
    }
    if (Kroki_wykonane[1]) {
      console.log("krok2");
      message = getLastMessage().toLowerCase();
      var analysis = analyzeMessagekm(message, who);
      var analysis2 = analyzeMessage_km_lat(message, who);
      if (analysis2 == 1) {
        Kroki_wykonane[1] = false;
        Kroki_wykonane[4] = true;
        sendMessage("Ja m");
        continue;
      } else if (analysis2 == -1) {
        sendMessage("Uciekam, papa");
        await sleep(4000);
        notfound = true;
        if (!isConnected)
          return;
        pressEscape();
        pressEscape();
        pressEscape();
        continue;
      }
      if (analysis == 1) {
        //znalezienie // pytaj dalej
        Kroki_wykonane[1] = false;
        Kroki_wykonane[2] = true;
        sendMessage("Ja m");
        //found = true;
        //console.log("found!");
        //alert("Znaleziono!");
        continue;
      }
      else if (analysis == 0) {
        console.log("zła odpowiedz");
      } else {
        console.log("NOPE");
        sendMessage("chyba masz siusiaka więc elo");

        await sleep(4000);
        notfound = true;

        if (!isConnected)
          return;

        pressEscape();
        pressEscape();
        pressEscape();
        continue;
      }
    }
    //krok 2
    if (Kroki_wykonane[2]) {
      Kroki_wykonane[2] = false;
      Kroki_wykonane[3] = true;
      sendMessage("lat?");
      startTime = performance.now();
      await sleep(1000);
      continue;
    }
    if (Kroki_wykonane[3] && getLastMessage() != "lat?") {
      message = getLastMessage().toLowerCase();
      var analysis = analyzeMessage_age(message);
      if (analysis == 1) {
        Kroki_wykonane[3] = false;
        Kroki_wykonane[4] = true;
      } else if (analysis == -1) {
        sendMessage("Nie mój wiek, spadam");
        await sleep(4000);
        notfound = true;
        if (!isConnected)
          return;
        pressEscape();
        pressEscape();
        pressEscape();
        continue;
      } else if (getLastMessage().localeCompare("Podaj swój wiek, proszę...")) {
        sendMessage("Podaj swój wiek, proszę...");
      } else {

      }
    }
    if (Kroki_wykonane[4]) {
      Kroki_wykonane[4] = false;
      Kroki_wykonane[5] = true;
      sendMessage("Jest!");
      sendMessage("Ja mam 15");
      sendMessage("ct?")
      alert("Znaleziono");
    }

    if (performance.now() - startTime > 20000) {
      console.log("no answer! disconnecting");
      notfound = true;
      pressEscape();
      pressEscape();
      pressEscape();
      continue;
    } else {
      console.log((performance.now() - startTime) / 1000);
      await sleep(1000);
    }

  }
}







>>>>>>> a4b0b03... first commit





//controller
chrome.runtime.onMessage.addListener(
<<<<<<< HEAD
  function(request, sender, sendResponse) {
=======
  function (request, sender, sendResponse) {
>>>>>>> a4b0b03... first commit
    messageHandler(request.message);
  });


<<<<<<< HEAD
  function messageHandler(message)
  {
    console.log("received: " + message);

    if(message == "seekGirls")
    {
      seek(0);
      return;
    }

    if(message == "seekBoys")
    {
      seek(1);
      return;
    }

    if(message == "stop")
    {
      found = true;
      return;
    }

    return;
  }
   function ages(params) {
    if (params === 14 || params === 15) {
      return true;
    } else {
      return false;
    }
  }
=======
function messageHandler(message) {
  console.log("received: " + message);

  if (message == "seekGirls") {
    seek(0);
    return;
  }

  if (message == "seekBoys") {
    seek(1);
    return;
  }

  if (message == "stop") {
    found = true;
    return;
  }

  return;
}
>>>>>>> a4b0b03... first commit
