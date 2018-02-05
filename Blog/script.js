$(document).ready(function() {

    var header = $('header');
    var main = $('main');
    var sidebar = $('aside');
    var col2 = sidebar.find('.col2');
    var logoutButton = $('.logout');
    var links1 = $('nav > a').not(logoutButton);
    var links2 = $('.col2 > a');

    // Extend sidebar to bottom
    extend();
    function extend() {

        var totalHeight = header.innerHeight() + main.innerHeight();
        sidebar.css({'height': `${totalHeight}px`});
        col2.css({'height': `${totalHeight}px`});
    }

    // Create article samples
    var articles = $('.articles');
    for (i = 1; i <= 6; i++) {

        let box = $('<div></div>');
        box.addClass('box');
        let background = $('<div></div>');
        background.addClass('background');
        box.append(background);
        let content =$('<div></div>');
        content.addClass('content');
        box.append(content);
        let title = $('<h3></h3>');
        title.addClass('box-title');
        title.text('An article (abbreviated art) is a word that is used');
        content.append(title);
        let line = $('<div></div>');
        line.addClass('line');
        content.append(line);
        let text = $('<p></p>');
        text.addClass('text');
        text.text('In languages that employ articles, every common noun, with some exceptions, is expressed with definiteness (e.g. definite or indefinite)');
        content.append(text);
        let more = $('<a href="#"></a>');
        more.addClass('more');
        more.text('more');
        content.append(more);
        articles.append(box);
    }

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
})