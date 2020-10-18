document.addEventListener('DOMContentLoaded', function () {
  let slider = this.getElementById('brightness');
  slider.addEventListener('input', adjustSlider);
  adjustSlider(slider);
});
function adjustSlider(e) {
  let body = document.body,
    switchLightMin = 40,
    switchLightMax = 100,
    tar = e.target || e,
    pct = +tar.value / +tar.max,
    L1 = pct * (switchLightMax - switchLightMin) + switchLightMin,
    L2 = L1 - 10,
    L3 = L1 - 37,
    L = [L1, L2, L3],
    thumbHueMin = 0,
    thumbHueMax = 120,
    thumbHue = pct * (thumbHueMax - thumbHueMin) + thumbHueMin,
    thumbSat = 90.4,
    thumbLight = 44.9,
    thumbHSL = `${thumbHue},${thumbSat}%,${thumbLight}%`;

  // update the slider shade
  L.forEach((light, i) => {
    if (light < 0) light = 0;
    body.style.setProperty(`--l${i + 1}`, `hsl(228,9.8%,${light}%)`);
  });
  // update the thumb icon hue
  body.style.setProperty(`--p`, `hsl(${thumbHSL})`);
  body.style.setProperty(`--pT`, `hsla(${thumbHSL},0)`);
}
