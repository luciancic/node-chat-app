const locationButton = document.querySelector('#send-location');

locationButton.onclick = function () {
  if (!navigator.geolocation) {
    return window.alert('Geolocation not supported on your browser');
  }

  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);
  }, function () {
    console.log('Unable to retreive location');
  });
}
