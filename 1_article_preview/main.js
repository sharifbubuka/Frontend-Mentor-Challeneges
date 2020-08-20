const share = document.getElementById('share');
const tooltip = document.getElementById('tooltip');

// On mouseover share button, show tooltip
share.addEventListener('mouseover', () => {
  tooltip.classList.replace('invisible', 'visible');
});

// On mouseout of share button, hide tooltip
share.addEventListener('mouseout', () => {
  tooltip.classList.replace('visible', 'invisible');
});
