var socket = io();

$('form').on('submit', function () {
    var text = $('#message').val();
    var init = $('#initials').val();
    socket.emit('message', init + ' dijo: ' + text);
    $('#message').val('');


    return false;
});

socket.on('message', function (msg) {
    $('<li>').text(msg).appendTo('#history');
});