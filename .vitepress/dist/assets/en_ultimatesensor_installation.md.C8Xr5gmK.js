import{_ as e,c as t,o,a2 as a}from"./chunks/framework.CEgrwLex.js";const n="/images/ultimatesensor/unboxing.png",i="/images/ultimatesensor/power-by-cable.png",s="/images/ultimatesensor/connect-wifi.png",r="/images/ultimatesensor/connect-ha.png",v=JSON.parse('{"title":"Installation Guide","description":"","frontmatter":{},"headers":[],"relativePath":"en/ultimatesensor/installation.md","filePath":"en/ultimatesensor/installation.md","lastUpdated":1723621006000}'),l={name:"en/ultimatesensor/installation.md"},c=a('<h1 id="installation-guide" tabindex="-1">Installation Guide <a class="header-anchor" href="#installation-guide" aria-label="Permalink to &quot;Installation Guide&quot;">​</a></h1><h2 id="unboxing" tabindex="-1">Unboxing <a class="header-anchor" href="#unboxing" aria-label="Permalink to &quot;Unboxing&quot;">​</a></h2><p>Unbox the UltimateSensor package and identify all the components. You should have the following items:</p><ul><li>UltimateSensor</li><li>USB-A to USB-C cable (3 meters)</li><li>Power adapter (European)</li></ul><p>Optional (if selected at checkout page):</p><ul><li>Wall Mount for device screws</li><li>Wall Mount (for device)</li><li>Wall Mount (for wall)</li></ul><p><img src="'+n+'" alt="Unboxing"></p><h2 id="step-1-power-by-cable-or-poe" tabindex="-1">Step 1: Power by Cable -OR- PoE <a class="header-anchor" href="#step-1-power-by-cable-or-poe" aria-label="Permalink to &quot;Step 1: Power by Cable -OR- PoE&quot;">​</a></h2><p>Connect the UltimateSensor to a power source using the provided USB-C cable and power adapter. Note that the device comes with a European USB Power Adapter. If you live outside Europe, you will still receive the adapter in the box, but you can also use any other power adapter you have at home as long as it provides at least 1A.</p><p><strong>Please note that powering the device by PoE or using an Ethernet connection instead of WiFi only works if the device has the Ethernet firmware installed. All UltimateSensor versions support PoE if the Ethernet firmware is installed. To switch between the firmware versions, please visit the <a href="./firmware">Firmware page</a>.</strong></p><p><img src="'+i+'" alt="Power by Cable"></p><h2 id="step-2-connect-to-wifi" tabindex="-1">Step 2: Connect to WiFi <a class="header-anchor" href="#step-2-connect-to-wifi" aria-label="Permalink to &quot;Step 2: Connect to WiFi&quot;">​</a></h2><p>Upon starting up the kit, the UltimateSensor emits a WiFi hotspot named &#39;ultimatesensor&#39; with the password &#39;ultimatesensor&#39;. Connect to this hotspot and a pop-up window will appear, allowing you to select and connect to your own WiFi network. Ensure that your WiFi network is a 2.4 GHz network. If the fallback hotspot does not appear, try using a different device. It may take up to one minute for the WiFi to become visible after powering on the device.</p><p><img src="'+s+'" alt="Connect to WiFi"></p><p>Note: When you connect to the fallback network, the web interface should open automatically. If that does not work, you can also navigate to <a href="http://192.168.4.1/" target="_blank" rel="noreferrer">http://192.168.4.1/</a> manually in your browser.</p><h2 id="step-3-connect-to-home-assistant" tabindex="-1">Step 3: Connect to Home Assistant <a class="header-anchor" href="#step-3-connect-to-home-assistant" aria-label="Permalink to &quot;Step 3: Connect to Home Assistant&quot;">​</a></h2><p>Once connected to your home WiFi network, Home Assistant will automatically detect the UltimateSensor under the &#39;Devices &amp; Services&#39; section. If this does not happen, you need to add the device manually. Look up the IP address of the UltimateSensor in your router, then go to Home Assistant settings -&gt; Devices &amp; Services. Click on Add Integration, select ESPHome, and enter the IP address of the device. It will then be added.</p><p><img src="'+r+'" alt="Connect to Home Assistant"></p><p>After connecting to Home Assistant, your device will be visible under Home Assistant -&gt; Settings -&gt; Devices &amp; Services -&gt; look for the ESPHome integration. Click on it to see your UltimateSensor with all its entities.</p><h2 id="step-4-configure-device-sensors" tabindex="-1">Step 4: Configure Device Sensors <a class="header-anchor" href="#step-4-configure-device-sensors" aria-label="Permalink to &quot;Step 4: Configure Device Sensors&quot;">​</a></h2><p>Note that all sensors need at least 10 minutes to start up, and the CO2 sensor may take up to 24 hours or several days. The sensors may also need calibration; please refer to the <a href="./calibration">calibration guide</a> for instructions.</p><p>Avoid placing the UltimateSensor in direct sunlight to prevent inaccurate measurements and reduce the risk of damage to the sensor. We recommend placing the sensor on a cabinet or mounting it on a wall at a height between 1 and 2 meters. Read more in our <a href="./usage">usage guide</a></p><p>SmartHomeShop is a hobby-based webshop dedicated to innovative smart home products. Please note that we are not responsible for the accuracy of sensor readings or future software changes by third parties.</p>',23),p=[c];function h(d,u,m,g,f,b){return o(),t("div",null,p)}const y=e(l,[["render",h]]);export{v as __pageData,y as default};
