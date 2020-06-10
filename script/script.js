//bot
//vars
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





//controller
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    messageHandler(request.message);
  });


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
