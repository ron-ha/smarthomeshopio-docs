import{_ as e,c as t,o as i,a2 as o}from"./chunks/framework.CEgrwLex.js";const d=JSON.parse('{"title":"Calibration Guide for UltimateSensor Mini","description":"","frontmatter":{},"headers":[],"relativePath":"nl/ultimatesensor-mini/calibration.md","filePath":"nl/ultimatesensor-mini/calibration.md","lastUpdated":null}'),a={name:"nl/ultimatesensor-mini/calibration.md"},r=o('<h1 id="calibration-guide-for-ultimatesensor-mini" tabindex="-1">Calibration Guide for UltimateSensor Mini <a class="header-anchor" href="#calibration-guide-for-ultimatesensor-mini" aria-label="Permalink to &quot;Calibration Guide for UltimateSensor Mini&quot;">​</a></h1><p>Calibrating your UltimateSensor Mini ensures accurate measurements of CO2 levels and other environmental parameters. Follow these steps to properly calibrate your sensor.</p><h2 id="co2-sensor-calibration" tabindex="-1">CO2 Sensor Calibration <a class="header-anchor" href="#co2-sensor-calibration" aria-label="Permalink to &quot;CO2 Sensor Calibration&quot;">​</a></h2><p>The UltimateSensor Mini uses the SCD41.</p><p><strong>SCD41 Specifications</strong></p><ul><li><strong>CO2 Measurement Range</strong>: 400 to 5,000 ppm</li><li><strong>Temperature Measurement Range</strong>: -10 to 60 °C (14 to 140 °F)</li><li><strong>Humidity Measurement Range</strong>: 0 to 100 %RH</li></ul><p><strong>CO2 Accuracy Specifications:</strong></p><ul><li><strong>400-1,000 ppm</strong>: ±(50 ppm + 2.5% of reading)</li><li><strong>1,001-2,000 ppm</strong>: ±(50 ppm + 3% of reading)</li><li><strong>2,001-5,000 ppm</strong>: ±(40 ppm + 5% of reading)</li></ul><ol><li><p><strong>Automatic Baseline Calibration (ABC)</strong></p><ul><li>The sensor uses an Automatic Baseline Calibration (ABC) algorithm to self-calibrate over time. Ensure the sensor is exposed to fresh air (400 ppm CO2) regularly for the ABC to function correctly.</li></ul></li><li><p><strong>Manual Calibration</strong></p><ul><li><p>If you need to calibrate the sensor manually, follow these steps:</p><h3 id="step-by-step-manual-calibration-via-home-assistant" tabindex="-1">Step-by-Step Manual Calibration via Home Assistant <a class="header-anchor" href="#step-by-step-manual-calibration-via-home-assistant" aria-label="Permalink to &quot;Step-by-Step Manual Calibration via Home Assistant&quot;">​</a></h3><ol><li><p><strong>Prepare the Environment &amp; Ultimate Sensor Mini</strong></p><ul><li>Place the Ultimate Sensor Mini outdoors on a clear day within range of your WiFi network (note that the sensor is not waterproof). Power on the UltimateSensor Mini and wait at least 5 minutes before continuing to the next step.</li></ul></li><li><p><strong>Access Home Assistant</strong></p><ul><li>Open Home Assistant in your web browser or the mobile app.</li></ul></li><li><p><strong>Navigate to ESPHome Integration</strong></p><ul><li>Go to <strong>Settings</strong>.</li><li>Select <strong>Devices &amp; Services</strong>.</li><li>Find and open the <strong>ESPHome</strong> integration.</li></ul></li><li><p><strong>Select UltimateSensor Mini</strong></p><ul><li>Locate the UltimateSensor Mini device from the list of ESPHome devices.</li><li>Click on the device to open its settings.</li></ul></li><li><p><strong>Calibrate the CO2 Sensor</strong></p><ul><li>Press the Calibrate CO2 button in the <strong>Controls</strong> section. The sensor will start to calibrate. Let the calibration process run for at least 1 minute. Note: The sensor is calibrated to 419 ppm. As of April 2022, the average fresh air CO2 concentration is 419 ppm.</li></ul></li><li><p><strong>Verify Calibration</strong></p><ul><li>After calibrating, verify that the CO2 readings are accurate.</li><li>You may need to repeat the process or adjust the settings if the readings are not correct.</li></ul></li></ol></li></ul></li></ol><h4 id="co2-levels-and-health-implications" tabindex="-1">CO2 Levels and Health Implications <a class="header-anchor" href="#co2-levels-and-health-implications" aria-label="Permalink to &quot;CO2 Levels and Health Implications&quot;">​</a></h4><p>The levels of CO2 in the air and potential health effects are:</p><ul><li><strong>350-450 ppm</strong>: Healthy outdoor air level.</li><li><strong>600 ppm</strong>: Healthy indoor air level.</li><li><strong>800 ppm</strong>: Acceptable level for indoor air quality.</li><li><strong>1,000 ppm</strong>: Ventilation recommended.</li><li><strong>1,200 ppm</strong>: Ventilation necessary.</li><li><strong>2,000 ppm</strong>: Negative health effects, such as drowsiness and poor air quality.</li><li><strong>5,000 ppm</strong>: Dangerous with long-term exposure.</li></ul><h2 id="additional-notes" tabindex="-1">Additional Notes <a class="header-anchor" href="#additional-notes" aria-label="Permalink to &quot;Additional Notes&quot;">​</a></h2><ul><li><p><strong>Calibration Frequency</strong></p><ul><li>Regular calibration ensures ongoing accuracy. Perform manual calibration every 6-12 months or after relocating the sensor.</li></ul></li><li><p><strong>Environmental Factors</strong></p><ul><li>Avoid placing the sensor in direct sunlight or areas with extreme temperatures and humidity for prolonged periods.</li></ul></li></ul><p>For detailed instructions, refer to the ESPHome or Home Assistant documentation on sensor calibration. If you encounter issues, join our <a href="https://smarthomeshop.io/discord" target="_blank" rel="noreferrer">Discord community</a> for support.</p><p>By following these calibration steps, you can ensure that your UltimateSensor Mini provides accurate and reliable environmental data for your smart home system.</p>',16),n=[r];function l(s,p,c,u,m,h){return i(),t("div",null,n)}const b=e(a,[["render",l]]);export{d as __pageData,b as default};
