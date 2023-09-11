## UserChrome

This is where all the magic happens.

`./utils` contains scripts that setup the load logic for the plugins/custom JS in this chrome root directory.
It currently contains xiaoxiaoflood's uc.JS loader. It can be replaces with other loaders that achieve the same endgoal.

### Breaking down the magic

This script is loaded by Firefox. To debug devtools-esque:

1. Goto devtools > settings > advanced. Enable browser toolbox and remote debugging.
2. Ctrl+Alt+Shift+I to open browser toolbox.
3. Should be able to see browser-wide scripts and resources in the debugger, complete with the symbols exposed by
   userChrome.js and the ability to trigger them and dissect them in standard JS fashion.
