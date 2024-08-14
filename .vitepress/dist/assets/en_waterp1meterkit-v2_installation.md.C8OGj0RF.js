import{_ as e,a as t,b as o,c as a,d as r,e as n}from"./chunks/connect-ha.nUe3yKKV.js";import{_ as i,c as s,o as l,a2 as h}from"./chunks/framework.CEgrwLex.js";const S=JSON.parse('{"title":"Installation Guide","description":"","frontmatter":{},"headers":[],"relativePath":"en/waterp1meterkit-v2/installation.md","filePath":"en/waterp1meterkit-v2/installation.md","lastUpdated":1723621006000}'),p={name:"en/waterp1meterkit-v2/installation.md"},c=h('<h1 id="installation-guide" tabindex="-1">Installation Guide <a class="header-anchor" href="#installation-guide" aria-label="Permalink to &quot;Installation Guide&quot;">​</a></h1><h2 id="unboxing" tabindex="-1">Unboxing <a class="header-anchor" href="#unboxing" aria-label="Permalink to &quot;Unboxing&quot;">​</a></h2><p>Unbox the WaterP1MeterKit package and identify all the components. You should have the following items:</p><ul><li>WaterP1MeterKit</li><li>RJ12 cable for energy meter</li><li>Screws for Universal Holder</li><li>WaterSensor with Universal Holder</li></ul><p>Optional if you selected the option &quot;With USB-C Adapter Set&quot;:</p><ul><li>USB-A to USB-C cable (3 meters)</li><li>Power adapter (European)</li></ul><p><img src="'+e+'" alt="Unboxing"></p><h2 id="step-1-connect-to-energymeter-install-the-sensor-holder" tabindex="-1">Step 1: Connect to Energymeter &amp; Install the Sensor Holder <a class="header-anchor" href="#step-1-connect-to-energymeter-install-the-sensor-holder" aria-label="Permalink to &quot;Step 1: Connect to Energymeter &amp; Install the Sensor Holder&quot;">​</a></h2><p>The WaterP1MeterKit allows you to connect both your water meter and energy meter, or just one of the two.</p><h3 id="connect-to-energymeter" tabindex="-1">Connect to Energymeter <a class="header-anchor" href="#connect-to-energymeter" aria-label="Permalink to &quot;Connect to Energymeter&quot;">​</a></h3><p>Plug the provided RJ12 cable into the P1 port of your energy meter. Ensure your energy meter has a P1 port and is an ESMR/DSMR v5 meter. Sometimes there is also an MBus port on the meter, but this port will not work; only the P1 port is compatible. Plug the other end of the cable into the WaterP1MeterKit.</p><h3 id="connect-to-watermeter" tabindex="-1">Connect to Watermeter <a class="header-anchor" href="#connect-to-watermeter" aria-label="Permalink to &quot;Connect to Watermeter&quot;">​</a></h3><p>Attach the universal holder adapter plate to your water meter with the provided screws. Do not over-tighten. Ensure the sensor is firmly pressed down into the holder, with the black side always visible and facing upwards.</p><p>Note: Sometimes the lid (the outer plastic part) of your water meter can get in the way. You can often turn this lid by hand to make room for the holder.</p><p><img src="'+t+'" alt="Install Kit"></p><h3 id="compatible-water-meters" tabindex="-1">Compatible Water Meters <a class="header-anchor" href="#compatible-water-meters" aria-label="Permalink to &quot;Compatible Water Meters&quot;">​</a></h3><ul><li><strong>Elster/Honeywell</strong></li><li><strong>Sensus</strong></li><li><strong>Itron/Actaris/Schlumberger</strong></li></ul><h2 id="step-2-power-by-cable-or-poe" tabindex="-1">Step 2: Power by Cable or PoE <a class="header-anchor" href="#step-2-power-by-cable-or-poe" aria-label="Permalink to &quot;Step 2: Power by Cable or PoE&quot;">​</a></h2><p>Connect the WaterP1MeterKit to a power source using the provided USB-C cable and power adapter, or use Power over Ethernet (PoE) for a direct and stable network connection without additional power cables. When first powered up, the kit will flash a red status light to indicate it is not yet connected to your network or Home Assistant. This issue will be resolved in the following steps when you connect it to your network.</p><p>Please note that powering the device by PoE or using an Ethernet connection instead of WiFi only works if the device has the Ethernet firmware installed. All WaterP1MeterKit V2 versions support PoE if the Ethernet firmware is installed. To switch between the firmware versions, please visit our <a href="https://smarthomeshop.io/firmware" target="_blank" rel="noreferrer">firmware page</a>.</p><p>By default, if you ordered the WaterP1MeterKit with the option &quot;With USB-C Adapter Set&quot; selected at checkout, then the WiFi firmware is installed by default and the Ethernet port is disabled. If you selected &quot;Without USB-C Adapter Set,&quot; then the Ethernet firmware is installed by default.</p><p><img src="'+o+'" alt="Power by Cable"></p><h2 id="step-3-test-sensor-position" tabindex="-1">Step 3: Test Sensor Position <a class="header-anchor" href="#step-3-test-sensor-position" aria-label="Permalink to &quot;Step 3: Test Sensor Position&quot;">​</a></h2><p>After mounting the holder, turn on a tap. The WaterP1MeterKit should flash a green light for 1 second after each liter of water used to confirm measurement. If this does not happen, you may need to adjust the sensor&#39;s position slightly, sometimes by as little as 1mm.</p><p>Note: Ignore the red flashing status LED for now. This will be resolved in the following steps when you connect the WaterP1MeterKit to your WiFi network and Home Assistant server.</p><p><img src="'+a+'" alt="Test Sensor Position"></p><h2 id="step-4-connect-to-wifi" tabindex="-1">Step 4: Connect to WiFi <a class="header-anchor" href="#step-4-connect-to-wifi" aria-label="Permalink to &quot;Step 4: Connect to WiFi&quot;">​</a></h2><p>Ignore this step if you plan to connect the WaterP1MeterKit via an Ethernet cable. As mentioned in Step 2, you need to have the Ethernet firmware installed for this. For more information on switching firmware, please visit our <a href="https://smarthomeshop.io/firmware" target="_blank" rel="noreferrer">firmware page</a>.</p><p>Upon starting up the kit, the WaterP1MeterKit emits a WiFi hotspot named &#39;waterp1meterkit&#39; with the password &#39;waterp1meterkit&#39;. Once you are connected to this hotspot, a pop-up window will appear where you can select your own WiFi network.</p><p><img src="'+r+'" alt="Connect to WiFi"></p><p>Note: When you connect to the fallback network, the web interface should open automatically. If that does not work, you can also navigate to <a href="http://192.168.4.1/" target="_blank" rel="noreferrer">http://192.168.4.1/</a> manually in your browser.</p><h2 id="step-5-connect-to-home-assistant" tabindex="-1">Step 5: Connect to Home Assistant <a class="header-anchor" href="#step-5-connect-to-home-assistant" aria-label="Permalink to &quot;Step 5: Connect to Home Assistant&quot;">​</a></h2><p>Once connected to your home WiFi network, Home Assistant will automatically detect the WaterP1MeterKit under the &#39;Devices &amp; Services&#39; section.</p><p><img src="'+n+'" alt="Connect to Home Assistant"></p><p>To use the WaterP1MeterKit for water and energy data on the Home Assistant Energy Dashboard, please continue to the next step in the manual <a href="./usage">Usage Guide</a>.</p><p>SmartHomeShop is a hobby-based webshop dedicated to innovative smart home products. Please note that we are not responsible for the accuracy of sensor readings or future software changes by third parties.</p>',36),d=[c];function m(u,w,f,b,g,y){return l(),s("div",null,d)}const k=i(p,[["render",m]]);export{S as __pageData,k as default};
