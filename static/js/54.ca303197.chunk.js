(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[54],{330:function(e,n){e.exports={title:"1.4.11 Release",description:"Birdhouse timers, movable xp globes, and bug fixes",author:"Adam",body:'<p>The farming plugin has been renamed to the timer plugin and now includes timers,\nstopwatches, and birdhouse timers. Thanks to\n<a href="https://github.com/takuyakanbr" native="">@takuyakanbr</a> for contributing this awesome\nfeature!</p>\n<p><img src="/img/blog/1.4.11-Release/timer1.png" alt="timer1">\n<img src="/img/blog/1.4.11-Release/timer2.png" alt="timer2">\n<img src="/img/blog/1.4.11-Release/timer3.png" alt="timer3"></p>\n<p>The RuneLite XP globes are now movable similar to other overlays:</p>\n<p><img src="/img/blog/1.4.11-Release/globes.gif" alt="globes"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Add !cmb chat command</li>\n<li>Add agility clickbox overlay to Werewolf course</li>\n<li>Add tablet creation to idle notifier</li>\n<li>Fix pest control and report button plugins which broke in the Monday game\nupdate</li>\n<li>Fix screen shake interfering with vertical camera</li>\n<li>Add option to raids plugin to show scouter interface throughout the raid</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<pre><code>Adam (9):\n      Disable zoom extender when a cache overlay fails to load\n      Fix applying default config to session settings\n      modelviewer: fix some incorrect gl usage, add error logging\n      modelviewer: fix zfighting of models\n      item manager: assert item composition access is done from client thread\n      ge plugin: fix accessing item composition from executor thread\n      config service: update key name too when setting config\n      chat commands: add !cmb command\n      scripts: update for game update\n\nBrady (2):\n      Add missing shortcuts to trollheim (#4711)\n      Move greater demon cannon spot to better location\n\nJaimy Smets (2):\n      Add obstacles to Werewolf court\n      Add tablet creation animation to idle notifier\n\nJordan Atwood (20):\n      achievement diary plugin: Fix coal mining req\n      chat commands plugin: Use consistent message check\n      resources: Remove unused images\n      SwingUtil: Fix grayscaleOffset to not modify alpha\n      Add image utility class\n      resources: Remove derivative images\n      clan manager: Use Sprite IDs for rank badges\n      plugins: Use shared clue arrow and reset images\n      agility plugin: Use Item ID for arena timer\n      clue scroll plugin: Use Item IDs for overlays\n      death indicator plugin: Use Item IDs for overlays\n      fight caves plugin: Use Sprite IDs for overlay images\n      hiscores plugin: Remove duplicate skill icon images\n      kingdom plugin: Use Item ID for overlay image\n      puzzle solver plugin: Use Sprite ID for overlay image\n      raids plugin: Use Sprite ID for raids timer\n      screenshot plugin: Use Sprite ID for overlay image\n      xp tracker plugin: Use shared image for icon\n      ImageUtil: Add getResourceStreamFromClass method\n      Remove unused @Slf4j annotations and imports\n\nKamiel (9):\n      chat history: clear public chat when menu option is clicked\n      item stats: fix tooltip not appearing when hovering over item\n      menu entry swapper: fix last destination on arceuus fairy ring\n      menu entry swapper: fix zanaris fairy ring not being recognized\n      menu entry swapper: fix zanaris swap not working for PoH tree-ring combo\n      player indicators: draw tile highlight on ABOVE_SCENE layer (#4629)\n      Update chatbox widget IDs\n      Update pest control widget IDs\n      Update nightmare zone widget ID\n\nMagic fTail (1):\n      Add pharaoh\'s sceptres, Toxic staff of the dead, tome of fire item maps\n\nMax Weber (4):\n      mixins: Fix camera pitch relaxer not fully relaxing after a screen shake\n      cache-client: Return failure to the handshake Future\n      runelite-client: Make ItemManager\'s price update thread safe\n      runelite-client: Always use the mapped price for items\n\nTomas Slusny (10):\n      Add support for making XP globes moveable\n      Use correct marker name when cancelling edit\n      Add mappings for indexed script db\n      Move isOverlayOutdated to IndexDatabase\n      Account for linked item id, format tooltip\n      Add Tournament world type\n      Remove unnecessary headers from plugin panels\n      Add null-check for game canvas\n      Properly check for changing values in raids plugin\n      Add setting to preserve scouter in raid\n\nc01dc0ffee (1):\n      Make DeathIndicatorPlugin use LocalPlayerDeath (#4745)\n\ntakuyakanbr (4):\n      Convert farming tracker to time tracking plugin\n      time tracking: add bird house tracker\n      time tracking: add clock panel\n      time tracking: add overview tab\n</code></pre>\n'}}}]);
//# sourceMappingURL=54.ca303197.chunk.js.map