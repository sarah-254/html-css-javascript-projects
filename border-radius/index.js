const box = document.querySelector('.rect');
let borderRadius = box.style.borderRadius;
let userRadius = document.querySelector('#radius');
let radiusOutput = document.querySelector('.output');
let button = document.querySelector('button');

radiusOutput.textContent = 'border-radius: ' + borderRadius + ';';
userRadius.addEventListener('input', changeRadius);
button.addEventListener('click', copyRadius)

function changeRadius() {
  let radius = userRadius.value;
  box.style.borderRadius = radius;
  radiusOutput.textContent = 'border-radius: ' + radius + ';';
}
function copyRadius() {
  let textArea = document.createElement('textarea');
  textArea.value = radiusOutput.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('Copy');
  textArea.remove();
  alert('radius copied to Clipboard');
  userRadius.value = '';
}