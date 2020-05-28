(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[28],{304:function(e,n){e.exports={title:"1.2.19 Release",description:"Stretched fixed mode, default world, and grand exchange price search!",author:"Adam",body:'<p>Stretched fixed mode has been added, which stretches the game screen and makes\nit more playable on high resolution monitors. Thanks to <a href="https://github.com/devLotto" native="">@devLotto</a> for making this happen.</p>\n<p><a href="https://github.com/sethtroll" native="">@sethtroll</a> added a GE search feature to the\nexisting grand exchange plugin. You may also use alt+click on your inventory to\nGE search an item now.</p>\n<p><img src="/img/blog/1.2.19-Release/ge-search.png" alt="ge-search"></p>\n<p>A news feed plugin was added which shows the latest RuneLite blog posts, Old\nSchool RuneScape news, and a Twitter feed of JMods.</p>\n<p><img src="/img/blog/1.2.19-Release/news-feed.png" alt="news-feed"></p>\n<p><a href="https://github.com/ChaoticConundrum" native="">@ChaoticConundrum</a> added Notes plugin that will allow you to\nstore notes that will be persisted via RuneLite configuration system.</p>\n<p><img src="/img/blog/1.2.19-Release/notes.png" alt="notes"></p>\n<p>Finally, the long-requested default world plugin has been added thanks to\n<a href="https://github.com/deathbeam" native="">@deathbeam</a>, which sets a preconfigured home\nworld by default.</p>\n<p>There were many smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The raids plugin now allows configuring whitelist/blacklist layouts and\nrotations.</li>\n<li>The screenshot plugin now takes screenshots of raid rewards</li>\n<li>Fix length of prayer enhance timer</li>\n<li>The instance map can now be closed with escape and floor can be changed with scrollbar</li>\n<li>The &quot;You are fishing&quot; overlay now works again since the last OSRS update</li>\n<li><a href="https://github.com/arlyon" native="">@arlyon</a> improved native OSX support - with native fullscreen, and focus\nrequesting</li>\n<li>Fix cannon plugin showing incorrect double hit spots after region change</li>\n<li>Allow disabling of the skill icons on XP drops</li>\n<li>Clear saved private chat history upon clear request</li>\n<li>Fix clanchat icons not showing during region loading</li>\n<li>Add configuation option to make the client size fixed</li>\n<li>Add minimum threshold to teamcape configuration, and now disable by default</li>\n<li>Most of the plugins has been renamed to proper names, abbreviations was removed and casing was fixed\n(for example Raids plugin is now named &quot;Chambers Of Xeric&quot;)</li>\n<li>Special Attack Orb plugin was removed in favour of native OSRS special attack orb</li>\n<li>Various notifaction-related settings was moved to &quot;RuneLite&quot; config section, and now they are applied\nto all notifications</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 14 contributors this release!</p>\n<pre><code>Adam (12):\n      runescape-client: add jav_config\n      cannon plugin: use infobox counter instead of overlay\n      http-service: add session service\n      http-api: add session client\n      runelite-client: add client session manager\n      client session manager: delete session on shutdown too\n      http-service: queue item lookups from images\n      input: don\'t allow duplicate input handlers\n      item service: process pending lookups in order\n      Change mouse wheel listener back to an interface as the instance map input listener uses it\n      ge panel: use static number formatter\n      runelite-client: add configuration option for resizable\n\nCharlie Waters (3):\n      Add Notes plugin\n      Add waterskin charges to jewellerycount plugin. Fixes #825.\n      Fix notes plugin loading notes from account\n\nDavid Kosub (1):\n      Notifier improvements and fixes\n\nDesetude (3):\n      Fixed HiscorePanel text\n      Allow customization of the default color for ground items\n      Renamed \'Experience drop\' -&gt; \'XP Drop\'\n\nKamiel (13):\n      Add ability to whitelist layouts\n      Add ability to highlight rooms\n      Add ability to whitelist boss rotations\n      Add floor duration(s) to infobox tooltip\n      Get points from varbits instead of widget\n      Set size properly\n      Make rotation whitelist not case-sensitive\n      Raids plugin: read proper input for room whitelist\n      Instance map: Add support for user input\n      Clear saved private chat history upon clear request\n      Allow disabling of the skill icons on XP drops\n      Fix cannon plugin showing incorrect double hit spots after region change\n      Fix clanchat messages not showing rank icons at certain moments\n\nLotto (18):\n      deobfuscator: fix aic failing to determine if a field is imported\n      http-api: add feed types\n      http-service: add services for getting blog posts, tweets and osrs news\n      http-service: add feed api endpoint\n      http-api: add client for looking up feed\n      runelite-client: add news feed plugin\n      Improve deob method finding in the injector\n      Use a mixin for calling Hooks.draw instead of a @Hook\n      Move the 765x503 constants to a Constants API class\n      Add a mixin for storing stretched fixed mode setting states\n      Add logic for game image stretching in Hooks#draw\n      Modify the size and location of the game canvas if stretched is enabled\n      Add support for proxying mouseWheelMoved events\n      Add support for specifying the position to insert mouse listeners in\n      Add mouse listeners that stretch event x/y\n      Add stretched fixed mode plugin\n      runelite-client: fix Use tooltip arrow not being displayed\n      runelite-api: fix worldToMiniMap not working correctly in stretched mode\n\nMax Weber (52):\n      Move the Login and Logout buttons to the TitleToolbar\n      draw(IIIIII)V &gt; drawRegion\n      AudioInstrument.SINE &gt; AUDIO_SINE\n      zoom: Fix pitch relaxer after rev 165 changes\n      Reuse NumberFormatter to reduce allocations\n      inline RSHashTableMixin.getNodes into RSWidgetMixin.getParentId to reduce allocations\n      specorb: Cache draws to reduce allocations\n      field429 &gt; WorldMapRegionX\n      field432 &gt; worldMapRegionWidth\n      field426 &gt; worldMapRegionY\n      field427 &gt; worldMapRegionHeight\n      field3005 &gt; rsOrdinal\n      class41 &gt; MapCacheArchiveNames\n      field546 &gt; DETAILS\n      field541 &gt; COMPOSITE_MAP\n      field548 &gt; COMPOSITE_TEXTURE\n      field542 &gt; AREA\n      field545 &gt; LABELS\n      field542 &gt; name\n      field450 &gt; objectDefinitionId\n      class247 &gt; WorldMapDecorationType\n      field446 &gt; decoration\n      field452 &gt; rotation\n      class31 &gt; WorldMapDecoration\n      field417 &gt; decorations\n      class29 &gt; WorldMapRectangle\n      method588 &gt; getRegionRectForViewport\n      field544 &gt; mapRegions\n      class35 &gt; WorldMapRegion\n      field3464 &gt; value\n      class284 &gt; HorizontalAlignment\n      class266 &gt; VerticalAlignment\n      field3436 &gt; value\n      field3464 &gt; horizontalAlignment\n      field3463 &gt; verticalAlignment\n      field538 &gt; screenX\n      field537 &gt; screenY\n      field459 &gt; minX\n      method312 &gt; getMinX\n      method302 &gt; getMinY\n      field453 &gt; minY\n      method294 &gt; getFileId\n      field465 &gt; identifier\n      method296 &gt; getIdentifier\n      field455 &gt; name\n      method288 &gt; getName\n      field4014 &gt; worldMapDataByIdentifier\n      method6175 &gt; getWorldMapDataByFileId\n      method6077 &gt; getWorldMapDataContainingCoord\n      method290 &gt; containsCoord\n      vmethod712 &gt; containsCoord\n      method6122 &gt; onMapClicked\n\nSeth (7):\n      opponent info: remove color tags from opponentOpponent name\n      item stat: add raid food\n      screenshot plugin: fix up chatMessage events\n      screenshot plugin: Add raids reward\n      item client: add getIcon method\n      ge: Add search feature\n      idle notifier: add barbtail/dragon harpoon animation\n\nSomeoneWithAnInternetConnection (1):\n      Remove left click calling from BA plugin\n\nTomas Slusny (23):\n      Add fuzzy searching to config panel\n      Move the notification options to Notifier\n      Remove duplicate options from IdleNotifier\n      Remove notification settings from NMZ\n      Add support for oily rod fishing to idle notifier\n      Remove unnecessary chatCommandsEnabled from config\n      Allow other types of alerts when messages are off\n      Fix &quot;You are fishing&quot; in fishing plugin\n      Remove the timeout for HP/pray thresholds\n      Correctly focus game canvas when requesting focus\n      Make idle notifier work for splashing/missing\n      Improve scoring of Jaro-Winkler\n      Add link browser utility service\n      Use new LinkBrowser in SessionManager\n      Use new link browser in Grand Exchange plugin\n      Use new link browser in feed plugin\n      Continue running in case Discord lib load failed\n      Restore original username on syncer shutdown\n      Disable team capes plugin by default\n      Add support for changing world to API\n      Simplify RuneLite API world\n      Add default world plugin\n      Inverse window resize condition\n\nUnknown (1):\n      Team Capes: Added minimum cape count\n\narlyon (4):\n      extract mac-specific functionality into OSXUtil\n      notifier: fix to request focus on OSX\n      extract out number formatting utility\n      Update plugins to use either NumberFormat or the StackFormatter\n\njoshpfox (1):\n      Remove duplicate anti-venom+ config check\n\nl2- (1):\n      fix prayer enhance timer. its actually 10 seconds shorter than 5 minutes\n</code></pre>\n'}}}]);
//# sourceMappingURL=28.ce7de9fa.chunk.js.map