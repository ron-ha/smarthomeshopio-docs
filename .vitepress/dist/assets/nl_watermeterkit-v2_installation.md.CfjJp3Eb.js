import{_ as e,a as t,b as a,c as r,d as n,e as i}from"./chunks/connect-ha.DKgq0t9g.js";import{_ as o,c as s,o as d,a2 as l}from"./chunks/framework.CEgrwLex.js";const f=JSON.parse('{"title":"Installatiehandleiding","description":"","frontmatter":{},"headers":[],"relativePath":"nl/watermeterkit-v2/installation.md","filePath":"nl/watermeterkit-v2/installation.md","lastUpdated":1723578252000}'),p={name:"nl/watermeterkit-v2/installation.md"},m=l('<h1 id="installatiehandleiding" tabindex="-1">Installatiehandleiding <a class="header-anchor" href="#installatiehandleiding" aria-label="Permalink to &quot;Installatiehandleiding&quot;">​</a></h1><h2 id="uitpakken" tabindex="-1">Uitpakken <a class="header-anchor" href="#uitpakken" aria-label="Permalink to &quot;Uitpakken&quot;">​</a></h2><p>Pak het WaterMeterKit pakket uit en identificeer alle onderdelen. U zou de volgende items moeten hebben:</p><ul><li>WaterMeterKit</li><li>USB-A naar USB-C kabel (3 meter)</li><li>Stroomadapter (Europees)</li><li>Schroeven (2x klein voor Elster/Honeywell, 2x groter voor Sensus, 1x groter voor Itron/Actaris/Schlumberger)</li><li>WatermeterSensor met Universele Houder</li></ul><p><img src="'+e+'" alt="Uitpakken"></p><h2 id="stap-1-installeer-de-sensorhouder" tabindex="-1">Stap 1: Installeer de Sensorhouder <a class="header-anchor" href="#stap-1-installeer-de-sensorhouder" aria-label="Permalink to &quot;Stap 1: Installeer de Sensorhouder&quot;">​</a></h2><p>Bevestig de adapterplaat aan uw watermeter met de meegeleverde schroeven. Draai niet te strak aan. Zorg ervoor dat de sensor stevig in de houder is gedrukt, met de zwarte kant altijd zichtbaar en naar boven gericht.</p><p><img src="'+t+'" alt="Installeer Sensorhouder"></p><p>Opmerking: Soms kan het deksel (het buitenste plastic deel) van uw meter in de weg zitten. U kunt dit deksel vaak met de hand draaien om ruimte te maken voor de houder.</p><h3 id="compatibele-meters" tabindex="-1">Compatibele Meters <a class="header-anchor" href="#compatibele-meters" aria-label="Permalink to &quot;Compatibele Meters&quot;">​</a></h3><ul><li><strong>Elster/Honeywell</strong></li><li><strong>Sensus</strong></li><li><strong>Itron/Actaris/Schlumberger</strong></li></ul><h2 id="stap-2-voeding-via-kabel" tabindex="-1">Stap 2: Voeding via Kabel <a class="header-anchor" href="#stap-2-voeding-via-kabel" aria-label="Permalink to &quot;Stap 2: Voeding via Kabel&quot;">​</a></h2><p>Sluit de WaterMeterKit aan op een stroombron met de meegeleverde USB-C kabel en stroomadapter. Bij het inschakelen knippert het rode statuslampje om aan te geven dat de kit nog niet is verbonden met uw WiFi-netwerk of Home Assistant. Dit probleem wordt opgelost in de volgende stappen wanneer u de kit met uw netwerk verbindt.</p><p><img src="'+a+'" alt="Voeding via Kabel"></p><h2 id="stap-3-test-de-sensorpositie" tabindex="-1">Stap 3: Test de Sensorpositie <a class="header-anchor" href="#stap-3-test-de-sensorpositie" aria-label="Permalink to &quot;Stap 3: Test de Sensorpositie&quot;">​</a></h2><p>Nadat u de houder hebt gemonteerd, opent u een kraan. De WaterMeterKit zou een groen lampje moeten laten knipperen gedurende 1 seconde na elke liter verbruikt water om de meting te bevestigen. Als dit niet gebeurt, moet u mogelijk de positie van de sensor iets aanpassen, soms met slechts 1 mm.</p><p>Opmerking: Negeer voorlopig het rood knipperende statuslampje. Dit wordt opgelost in de volgende stappen wanneer u de WaterMeterKit met uw WiFi-netwerk en Home Assistant-server verbindt.</p><p><img src="'+r+'" alt="Test Sensorpositie"></p><h2 id="stap-4-verbinden-met-wifi" tabindex="-1">Stap 4: Verbinden met WiFi <a class="header-anchor" href="#stap-4-verbinden-met-wifi" aria-label="Permalink to &quot;Stap 4: Verbinden met WiFi&quot;">​</a></h2><p>Bij het opstarten zendt de WaterMeterKit een WiFi-hotspot uit genaamd &#39;watermeterkit&#39; met het wachtwoord &#39;watermeterkit&#39;. Zodra u bent verbonden met deze hotspot, verschijnt er een pop-upvenster waarin u uw eigen WiFi-netwerk kunt selecteren.</p><p><img src="'+n+'" alt="Verbinden met WiFi"></p><p>Opmerking: Wanneer u verbinding maakt met het fallback-netwerk, zou de webinterface automatisch moeten openen. Als dit niet werkt, kunt u ook handmatig navigeren naar <a href="http://192.168.4.1/" target="_blank" rel="noreferrer">http://192.168.4.1/</a> in uw browser.</p><h2 id="stap-5-verbinden-met-home-assistant" tabindex="-1">Stap 5: Verbinden met Home Assistant <a class="header-anchor" href="#stap-5-verbinden-met-home-assistant" aria-label="Permalink to &quot;Stap 5: Verbinden met Home Assistant&quot;">​</a></h2><p>Zodra de kit verbonden is met uw WiFi-netwerk, detecteert Home Assistant de WaterMeterKit automatisch onder de sectie &#39;Apparaten en Diensten&#39;.</p><p><img src="'+i+'" alt="Verbinden met Home Assistant"></p><p>Om de WaterMeterKit te gebruiken voor watergegevens op het HA Energy Dashboard, gaat u verder met de volgende stap in de handleiding <a href="./usage">Gebruikershandleiding</a>.</p>',26),h=[m];function u(k,g,c,b,v,_){return d(),s("div",null,h)}const W=o(p,[["render",u]]);export{f as __pageData,W as default};
