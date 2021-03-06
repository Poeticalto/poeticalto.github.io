updateTicker();

function updateTicker() {
    let tickerElement = document.getElementById("mainTicker");
    

    var request = new XMLHttpRequest();
    request.open('GET', 'https://cors.io/?tpltest.cf/ticker/rawticker.txt', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        console.log(data);
      } else {
        // We reached our target server, but it returned an error
        console.log(request);
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      console.log(request);
    };

    request.send();


}