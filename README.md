RemotePresentations
===================

Controls presentations with Pebble

Requirements
---
Your mobile phone and computer needs to be on the same network. Your mobile phone needs to reach your computer IP address.


Server side
---
You will need [node.js](http://nodejs.org/) running on the computer.

Go into the server folder and run this command:

```
npm install
```

and then:

```
node server.js
```

The server is going to be available at the port 8089.

Client side - Pebble
---
You need to run RemotePebble on your mobile.

The version on the rebble store seems to point to a non-existing configuration page. You can instead compile it from source by going to the pebble folder and running `pebble build` followed by `pebble install --phone <your phone ip>`.

In your mobile, run Presentation configuration screen, from the Official Pebble App. Then, set the IP address and port of the computer running the node server. (the port will be 8089 unless you change it)

Run Presentation app in your Pebble, and you will be able to move to the presentation's next or previous slide. You can also start a timer to know how long your presentation is taking.

You can explore the source code of RemotePebble in the folder Remotes/RemotePebble of this repo.
