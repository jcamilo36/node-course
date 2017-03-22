var socket = io();

socket.on('connect', function() {
  console.log('Connected to socket.io server.');
});

socket.on('message', function(message) {
  console.log('New message: ' + message.text + '; utc: ' + message.timestamp);
  var timestampMoment = moment.utc(message.timestamp);

  jQuery('.messages').append('<p>' + message.text + ' <strong>' + timestampMoment.local().format('h:mm a') + '</strong></p>');
});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
  event.preventDefault();

  var message = $form.find('input[name=message]');

  socket.emit('message', {
    text: message.val()
  });

  message.val('');
});
