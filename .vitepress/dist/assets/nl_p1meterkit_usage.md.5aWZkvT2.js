import{_ as t,c as e,o as i,a2 as o}from"./chunks/framework.CEgrwLex.js";const p=JSON.parse('{"title":"Usage Guide","description":"","frontmatter":{},"headers":[],"relativePath":"nl/p1meterkit/usage.md","filePath":"nl/p1meterkit/usage.md","lastUpdated":1723578252000}'),a={name:"nl/p1meterkit/usage.md"},n=o('<h1 id="usage-guide" tabindex="-1">Usage Guide <a class="header-anchor" href="#usage-guide" aria-label="Permalink to &quot;Usage Guide&quot;">​</a></h1><p>The P1MeterKit allows you to monitor your energy consumption in real-time through Home Assistant.</p><h2 id="real-time-monitoring" tabindex="-1">Real-Time Monitoring <a class="header-anchor" href="#real-time-monitoring" aria-label="Permalink to &quot;Real-Time Monitoring&quot;">​</a></h2><ol><li><strong>Open Home Assistant</strong> and navigate to <strong>Settings</strong>.</li><li>Go to <strong>Devices &amp; Services</strong> and look for the <strong>ESPHome</strong> integration. Open the <strong>ESPHome</strong> integration.</li><li>Select the <strong>P1MeterKit</strong> device.</li><li>Here, you will find all the entities associated with the P1MeterKit, such as electricity and gas consumption.</li><li>If you are only using one of the sensors, you can disable the unused entities.</li></ol><h2 id="historical-data" tabindex="-1">Historical Data <a class="header-anchor" href="#historical-data" aria-label="Permalink to &quot;Historical Data&quot;">​</a></h2><p>To view historical energy data:</p><ol><li>Navigate to the <strong>History</strong> section in Home Assistant.</li><li>Select the desired time period (hour, day, month, or year) and select the P1MeterKit entity to see your data over that period.</li></ol><h2 id="integrating-with-ha-energy-dashboard" tabindex="-1">Integrating with HA Energy Dashboard <a class="header-anchor" href="#integrating-with-ha-energy-dashboard" aria-label="Permalink to &quot;Integrating with HA Energy Dashboard&quot;">​</a></h2><ol><li><strong>Open Home Assistant</strong> and navigate to <strong>Settings -&gt; Dashboards</strong>.</li><li>Go to the <strong>Energy</strong> dashboard.</li><li>Under <strong>Electricity Consumption</strong>, click on <strong>Add Consumption</strong>.</li><li>Select the P1MeterKit entity that corresponds to your electricity consumption.</li><li>Under <strong>Return to Grid</strong> (if applicable), add the entity for energy fed back to the grid.</li></ol><p>By following these steps, you can effectively monitor and analyze your energy consumption using the P1MeterKit and Home Assistant.</p>',10),r=[n];function s(l,g,d,h,c,u){return i(),e("div",null,r)}const y=t(a,[["render",s]]);export{p as __pageData,y as default};
