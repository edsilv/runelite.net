(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[107],{383:function(n,e){n.exports={title:"1.5.36 Release",description:"Website redesign and random event plugin",author:"Adam",body:'<p>The website has been given an all new dark look, with a redesigned home page.\nThanks to <a href="https://github.com/psikoi" native="">@psikoi</a> and <a href="https://github.com/gc" native="">@gc</a>\nfor their work on this.</p>\n<p>A random event plugin has been added which can notify you when a random event\nspawns for you, and will also hide Talk-to and Dismiss from random events which\naren\'t yours.</p>\n<p><img src="/img/blog/1.5.36-Release/random.png" alt="randoms"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The clickbox generation code has been optimized and now causes less lag when\ndrawing complex clickboxes, such as the the herbiboar trail objects</li>\n<li>The object indicators plugin now supports marking many more object types that\npreviously did not work, such as the MLM sack and ladders</li>\n<li>Setting the slayer plugin infobox timeout to 0 now makes it never timeout,\nconsistent with other plugins</li>\n<li>The item identification plugin now also identifies placeholders and noted\nversions of items</li>\n<li>The inventory grid plugin now shows the results of swapping items, if applicable</li>\n<li>Add Broodoo shield, drift net, spears, and hastae to skill calculator</li>\n<li>Add missing fishing spots from the fishing platform to the fishing plugin</li>\n<li>Fix Monk\'s residence and Rommik cryptic crate locations</li>\n<li>Add Rimmington ship transpotation icons and locations to the world map</li>\n<li>Fix location of the northern pipe in Mount Karuulm on the world map</li>\n</ul>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 23 contributors this release!</p>\n<pre><code>15987632 (1):\n      timers plugin: remove prayer enhance infobox on expire\n\nAdam (18):\n      item controller: add etag to bulk prices\n      feed controller: add etag\n      client: use own okhttp client with cache\n      http-api: add javax.inject dependency\n      feed: use caching okhttp client\n      item manager: use caching okhttp client\n      Use caching okhttp client for worldclient\n      tile indicators: fix storing names for multilocs\n      object indicators: support non-gameobject multilocs\n      api: add getConvexHull to GroundObject\n      object indicator: add support for ground objects\n      screenmarkers: optimize panel rebuilding\n      cache: update object definition\n      item charges: fix explorer\'s ring infobox caching\n      async buffered image: fix listener leak from subscribing to already loaded images\n      async buffered image: rename changed to loaded\n      async buffered image: move to util\n      Fix slayer infobox disappearing on \'0\' timeout\n\nDaniel Bolink (1):\n      Add Elf Cannon Spot in Priff\n\nDavid (2):\n      agility: add plant door obstacle\n      skillcalc: add Broodoo shield\n\nElkins, Trey (1):\n      Add no weapon/shield enforcement to aerial fishing clue\n\nEric Weaver (2):\n      Update Anglerfish master challenge clue text (#9988)\n      Fix typo in Barrows chest emote clue (#9982)\n\nGustavo Rodrigues (1):\n      Add Drift Net to skill calc plugin (#9958)\n\nHydrox6 (1):\n      world map: fix location of northern pipe in Mount Karuulm dungeon\n\nIgnas Maslinskas (1):\n      xptracker: fix out-of-sync add to canvas menu (#9983)\n\nKrysaczek (1):\n      Add Spears and Hastae smithing to Skill calculator\n\nMESLewis (1):\n      Add teleport icon for Stony Basalt under 73 Agility\n\nMax Weber (12):\n      runelite-api: Use more general Shape for clickboxes and convex hulls\n      runelite-api: Add simple Shape implementations\n      Perspective: Add modelToCanvas\n      Jarvis: use primitive arrays\n      runelite-api: Optimize getClickbox\n      runelite-api: Remove Triangle and Vertex classes\n      StackFormatter: remove quantityToRSStackSize\n      StackFormatter: Fix documentation\n      StackFormatter: synchronize access to NumberFormats\n      runelite-client: Rename StackFormatter to QuantityFormatter\n      prayer: Use ItemStats for prayer bonuses\n      runelite-api: Add some more documentation\n\nMorgan Lewis (1):\n      worldmap: Update Rimmington ship transportation icons and locations (#10010)\n\nRensB (1):\n      item charges: add charges to guthix rest tea (#10002)\n\nRon Young (4):\n      ChatboxTextInput: add ability to filter character inputs\n      banktags: filter out &lt;,&gt;, and / from tag input\n      banktags: clean invalid config items\n      banktags: null check for no tagtabs\n\nSebastiaanVanspauwen (1):\n      worldmap: Add Wilderness crabs teleport (#9970)\n\nTaylor (1):\n      Fix Monk\'s residence and Rommik cryptic crate locations (#9936)\n\nTomas Slusny (2):\n      Properly update plugin toggle button of plugin state change\n      Null-check WorldResult in DefaultWorldPlugin\n\nTrey (1):\n      Add revertible Neitiznot Faceguard to ItemMapping (#10038)\n\ndekvall (6):\n      Inventorygrid: Draw image for replaced item\n      xptracker: fix goals set from level 1\n      fishing: Set status to NOT fishing when the flying fish is active\n      item identification: show identifier for placeholders and noted items\n      XpTracker: Fix hopping to/from DMM worlds\n      Clarify that blowpipe won\'t work with Robin clue\n\nhuddy987 (1):\n      Add divine potion buy limits\n\ntrimbe (1):\n      client: add random event plugin\n\nwwchak (1):\n      fishing: Add missing fishing platform highlight (#9989)\n</code></pre>\n'}}}]);
//# sourceMappingURL=107.88a04706.chunk.js.map