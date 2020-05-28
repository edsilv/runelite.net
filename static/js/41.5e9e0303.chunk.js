(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[41],{317:function(e,n){e.exports={title:"1.3.9 Release",description:"Hot/cold world map improvements, skill calculator, and anti-drag plugin",author:"Adam",body:'<p>I have been given the go ahead to continue on with RuneLite development by MMK,\nso here is release 1.3.9.</p>\n<p>I have had to move most of my tools to be internal to\nthe project, and it is taking some time. We will probably be able to begin\naccepting PRs again in full force sometime this weekend.</p>\n<p>Hot/cold clue locations are now shown on the world map, and fairy ring teleport\nicons now have a tooltip showing the fairy ring code. Contributed by\n<a href="https://github.com/deathbeam" native="">@deathbeam</a> and\n<a href="https://github.com/MESLewis" native="">@MESLewis</a> respectively.</p>\n<p><img src="/img/blog/1.3.9-Release/hotcold.png" alt="hotcold"></p>\n<p><a href="https://github.com/Kruithne" native="">@Kruithne</a> has added a skill calculator plugin.</p>\n<p><img src="/img/blog/1.3.9-Release/skillcalc.png" alt="skillcalc"></p>\n<p>An anti-drag plugin has been added from\n<a href="https://github.com/devdennis" native="">@devdennis</a>. It lets you configure the &quot;drag\ndelay&quot; which can help prevent you from dragging items you meant to click on.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The opponent info plugin now displays approximate players hitpoints instead of\na percentage</li>\n<li>Show GE and high alch prices on shop items when examined</li>\n<li>Made existing config option for higlighting marks of grace also affect overlay\ncolor</li>\n<li>Add trap obstacles to agility plugin</li>\n<li>Fix motherlode mine plugin when it is enabled when inside of the mine</li>\n<li>Mitigate a rare crash in the official client at certain areas ingame</li>\n<li>Add a tooltip font type configuration option</li>\n<li>Auto complete hiscore lookups based on friends, clan members, and players</li>\n</ul>\n<p>Also thanks to trimbe, Shuhao Wu, Jordan Atwood, and Alex Kolpa for contributing\nclue fixes.</p>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 22 contributors this release!</p>\n<pre><code>Adam (20):\n      agility plugin: use immutableset\n      slayer plugin: move widget inventory check to game tick\n      runelite-api: expose friends\n      runelite-mixins: fix setting menu preventing menu add event from being fired\n      friend notes plugin: only add menu entry after &quot;Message&quot;\n      agility plugin: fix exception if obstacle is off screen\n      runelite-api: add getWorldType()\n      runelite-client: add hiscore manager\n      opponent info: use player hitpoints from hiscores\n      item controller: don\'t return duplicate items in bulk lookup\n      http-service: optimize bulk item price lookup\n      http-service: lombok item api\n      item manager: cache no price when unable to batch lookup\n      injector: support field hooks prior to field being changed\n      runelite-mixins: fire npc despawn event before composition is nulled\n      runelite-mixins: wrap drawTileUnderlay in try/catch\n      Revert &quot;fix: Hide vanilla raid points box when inside chambers of xeric&quot;\n      speccounter plugin: fix kalphite queen spelling\n      Update pom and README to reflect changes to project structure\n      Remove distribution management\n\nAlex Kolpa (2):\n      Fix typo cryptic clue\n      Check player position on state change\n\nDennis (1):\n      runelite-client: add anti drag plugin\n\nDimitris Karittevlis (1):\n      shows ge and high alch prices for shop items that are examined\n\nHSJ-OSRS (1):\n      Make existing config options for highlighting marks of grace also affect the overlay color\n\nHashes (1):\n      Fix ProgressBar percentage displaying (#2609)\n\nJeremy Plsek (2):\n      agility plugin: add trap obstacle overlay\n      overlayutil: reset stroke for renderpolygon\n\nJordan Atwood (4):\n      Fix wording/locations of kill x elite cryptic clues (#2628)\n      Fix Warrior\'s guild emote clue\n      Use British floor numbering in cipher clues\n      Fix Gypsy Aris cryptic clue\n\nKamiel (1):\n      fix: Hide vanilla raid points box when inside chambers of xeric\n\nKruithne (1):\n      Implement Skill Calculator plug-in\n\nLars \xd8rnlo (1):\n      Motherlode Mine - Region check on plugin startup\n\nMax Weber (10):\n      http-api: print a more helpful error message when resources are not filtered\n      Make VarbitChanged only fire once, after everything has settled\n      runelite-api: Annotate Perspective methods with `@Nonnull`\n      groundmarkers: Fix NPE in drawTile\n      kourendlibrary: Fix for rev 170 menu code\n      runelite-api: Update ID files\n      cache: Strip tags from java names\n      Rename varcs &gt; varCInts\n      Rename varcstrings &gt; varCStrings\n      Revert #2530 &quot;Make VarbitChanged only fire once...&quot;\n\nMorgan Lewis (2):\n      Fix world map overlay to draw pixel perfect on the World Map\n      Add tooltip and custom icon to World Map fairy ring destinations\n\nReasel (1):\n      runelite-client: add tooltip font type dropdown\n\nSebastiaan Holthuis (1):\n      Add &quot; fps&quot; after the number of FPS\n\nShuhao Wu (1):\n      Fix &quot;Clap in the magic axe&quot; master clue. (#2685)\n\nTomas Slusny (13):\n      Improve ProgressBarComponent to support %/FULL\n      Update opponent info to use PanelComponent\n      Add ItemLayer height to GroundItems overlay\n      Fix World Map widget check in Hooks.java\n      Reset Fight Cave plugin prayer background color\n      Merge clearMapPoint with resetClue\n      Improve performance of ClueScrollWorldMapPoint\n      Move Hot/Cold message logic to HotColdClue\n      Add support for map for hot/cold clues\n      Do not floor percentage in progress bars\n      Fix updating of Hot/Cold clue\n      Reset clue overlay preferred size each render\n      Calculate child preferred size based on max size\n\nTzZek (1):\n      Add Elf Area Obstacles\n\nUnknown (1):\n      Add Overlay for Silver Jewelry to Slayer Plugin\n\npettenge (1):\n      hiscore plugin: autocomplete name lookup based on friends, clan members, and players\n\ntrimbe (1):\n      Fix hot cold location south of gnome stronghold\n\nypperlig (1):\n      Clear previous image components in fight caves overlay\n</code></pre>\n'}}}]);
//# sourceMappingURL=41.5e9e0303.chunk.js.map