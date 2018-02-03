$(document).ready(function() {

    // Prevent actions on links and buttons
    $('a, button').on('click', function(event) {

        event.preventDefault();
    })
    
    // Create mails samples
    var mailbox = $('.mailbox');
    var names = ['Mark Thompson', 'Victor Ramsi', 'Ricardo P. Smith', 'Michael Lanson', 'Cassandra Stone', 'Anna Roy Palmer', 'Mark Tompson'];

    names.forEach(function(name) {

        let box = $('<div></div>');
        box.addClass('box');
        box.html('<div class="line"></div><div class="circle"></div>');
        let sender = $('<p></p>');
        sender.addClass('sender');
        sender.text(name);
        let time = $('<span></span>');
        time.addClass('time');
        time.text('3 minutes ago');
        let message = $('<span></span>');
        message.addClass('message');
        message.text('Veniam marfa mustache skateboard ...');
        sender.append(time);
        sender.append(message);
        let checkbox = $('<input type="checkbox"></input>');
        checkbox.addClass('checkbox');
        let id = name.replace(/[ ]/g, '').toLowerCase();
        checkbox.attr('id', id);
        let label = $('<label></label>');
        label.attr('for', id);
        box.append(sender);
        box.append(checkbox);
        box.append(label);
        mailbox.append(box);
    })

    // Mails selection
    $('.checkbox').change(function(){

        $(this).parent().toggleClass('active');
    })

    // Select 2nd mail
    $('.checkbox').eq(1).attr('checked', true);
    $('.box').eq(1).addClass('active');
})