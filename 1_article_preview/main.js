const share = document.getElementById('share');
const tooltip = document.getElementById('tooltip');

// On mouseover share button, show tooltip
function show() {
  tooltip.classList.replace('invisible', 'visible');
  console.debug('Tool tip is visible now');
}

// On mouseout of share button, hide tooltip
function hide() {
  tooltip.classList.remove('display');
  console.debug('Tool tip is visible now');
}

share.addEventListener('mouseover', show());
share.addEventListener('mouseout', hide());
