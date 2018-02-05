$(document).ready(function() {

    var header = $('header');
    var main = $('main');
    var sidebar = $('aside');
    var col2 = sidebar.find('.col2');
    var logoutButton = $('.logout');
    var links1 = $('nav > a').not(logoutButton);
    var links2 = $('.col2 > a');
    
    // Toggle sidebar
    function toggle() {

        if (col2.hasClass('visible')) {

            col2.removeClass('visible');
        }
        sidebar.toggleClass('small');
        sidebar.removeClass('shadow');
        logoutButton.removeClass('shadow');
        links1.removeClass('current');
        adjustWidth();
    }

    // Adjust width
    function adjustWidth() {

        if (col2.hasClass('visible')) {

            var width = sidebar.innerWidth() + col2.innerWidth() - 21;
        } else {
            
            var width = sidebar.innerWidth();
        }
        $('body').css({'padding-left': `${width}px`});
    }

    // 1st column nav links
    function expand(link) {

        // On collapsed sidebar
        if (sidebar.hasClass('small')) {
        
            sidebar.removeClass('small');
            links1.removeClass('active current');
            link.addClass('active current');
            col2.addClass('visible');
            sidebar.addClass('shadow');
            logoutButton.addClass('shadow');
            adjustWidth();
            return
        }

        // On opened sidebar
        if (link.hasClass('active')){

            link.toggleClass('current');
            col2.toggleClass('visible');
            if (col2.hasClass('visible')) {
                sidebar.addClass('shadow');
                logoutButton.addClass('shadow');
            } else {
                sidebar.removeClass('shadow');
                logoutButton.removeClass('shadow');
            }
            adjustWidth();
            return
        }

        links1.removeClass('active current');
        link.addClass('active current');
        col2.addClass('visible');
        sidebar.addClass('shadow');
        logoutButton.addClass('shadow');
        adjustWidth();
    }

    // 2nd column nav links
    function highlight(link) {

        if (link.hasClass('active')) {

            return
        } else {

            links2.removeClass('active');
            link.addClass('active');
        }
    }

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

    // Prevent default actions on links and buttons
    $('a, button').on('click', function(event) {

        event.preventDefault();
    })

    // Toggle button
    $('#toggle').on('click', function() {

        toggle();
    })

    // 1st column nav links
    links1.on('click', function() {

        expand($(this));
    })

    // 2nd column nav links
    links2.on('click', function() {

        highlight($(this));
    })

    // Mails selection
    $('.checkbox').change(function(){
        
        $(this).parent().toggleClass('active');
    })

    // Select 2nd mail
    $('.checkbox').eq(1).attr('checked', true);
    $('.box').eq(1).addClass('active');
})