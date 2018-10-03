var ipServer = localStorage.getItem("br.com.lond.remote.ip");
if (!ipServer) {
  ipServer = '192.168.1.100';
}
var portServer = localStorage.getItem("br.com.lond.remote.port");
if (!portServer) {
  portServer = '8080';
}
var base_url = "http://"+ipServer+":"+portServer;

Pebble.addEventListener("ready",
    function(e) {
        console.log("connect!" + e.ready);
        console.log(e.type);
    }
);

Pebble.addEventListener("appmessage",
                        function(e) {
                          if (e.payload.dir == 0) {
                            sendNext();
                          }
                          else {
                          	sendPrev();
                          }
                        });

function sendPrev() {
  var response;
  var req = new XMLHttpRequest();
  req.open('GET', base_url+"/prev.html", true);
  req.onload = function(e) {
    if (req.readyState == 4) {
      if(req.status == 200) {
        console.log('SendPrev');
      } 
    }
  }
  req.send(null);
}

function sendNext() {
  var response;
  var req = new XMLHttpRequest();
  req.open('GET', base_url+"/next.html", true);
  req.onload = function(e) {
    if (req.readyState == 4) {
      if(req.status == 200) {
        console.log('SendNext');
      } 
    }
  }
  req.send(null);
}

Pebble.addEventListener("showConfiguration", function() {
  Pebble.openURL('http://lond.com.br/RemoteConfig/config.html');
});

Pebble.addEventListener("webviewclosed", function(e) {
  console.log("configuration closed");
  // webview closed
  var options = JSON.parse(decodeURIComponent(e.response));
  ipServer = options.ip;
  portServer = options.port;
  localStorage.setItem("br.com.lond.remote.ip", ipServer);
  localStorage.setItem("br.com.lond.remote.port", portServer);
});
