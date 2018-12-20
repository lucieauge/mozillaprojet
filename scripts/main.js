let monImage = document.querySelector('img');

monImage.addEventListener('click', function() {
    let monSrc = monImage.getAttribute('src');
    if (monSrc === 'images/firefox-icon.png') {
      monImage.setAttribute('src', 'images/firefox2.png');
    } else {
      monImage.setAttribute('src', 'images/firefox-icon.png');
    }
});

