// Index
// 1. Hide popup when clicked close icon
    // If ESC is pressed hide popup
// 2. Show popup when clicked shortcut icon
// 3. Hide Popup when clicked outside of popup
// 4. Notification / Response on CTRL + E
// 5. Micro Interaction for shortcuts icon ;)

// If ID Close-popup is clicked hide popup
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
     });

  document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) { // `ESC` key
        document.getElementById('popup').style.display = 'none';
    }
}
); 

// If shortcut icon is clicked show popup
document.getElementById('icon-help').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
}  
);

// If clicked outside of popup hide popup
document.addEventListener('click', function (e) {
    if (e.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
}
);

// ------ Notification Section ----------------------------

    // Intally hide notification
    $('.notification').hide();
    $('.notification').css('bottom', '-40px');

    // When CTRL + E is pressed show notification
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.keyCode == 69) {
            e.preventDefault();
            $('.notification').show();
            $('.notification').animate({
                bottom: '24px'
            }, 500);
        }
    }
    );

    // Hide notification after 8 seconds
    setTimeout(function() {
        $('.notification').fadeOut(500);
    }
    , 4000);

    // Hide notification when CTRL + S is clicked
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.keyCode == 83) {
            e.preventDefault();
            $('.notification').fadeOut(500);
        }
    }
    );

// Micro Interaction for shortcuts icon ;)
    $('#icon-help').animate({
        opacity: 0.25
    }, 1000, function() {
        $('#icon-help').animate({
            opacity: 1
        }, 1000);
    }
    );
    setInterval(function() {
        $('#icon-help').animate({
            opacity: 0.25
        }, 1000, function() {
            $('#icon-help').animate({
                opacity: 1
            }, 1000);
        }
        );
    }
    , 2000);

// Select class key and add blinking animation like keyboard
    $('.key').animate({
        opacity: 0.25
    }, 1000, function() {
        $('.key').animate({
            opacity: 1
        }, 1000);
    }
    );
    setInterval(function() {
        $('.key').animate({
            opacity: 0.25
        }, 1000, function() {
            $('.key').animate({
                opacity: 1
            }, 1000);
        }
        );
    }
    , 2000);