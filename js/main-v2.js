console.log("Testing Prototype V2")

// ------ Funcation to start and stop content editing -----------------------------------------------

// Add Contenteditable
function run() {
  var previewElements = document.getElementsByClassName('preview');
  for (var i = 0; i < previewElements.length; i++) {
    previewElements[i].setAttribute('contenteditable', true);
  }
}

// Remove Contenteditable
function stop() {
    var previewElements = document.querySelectorAll('.preview');
    for (var i = 0; i < previewElements.length; i++) {
        previewElements[i].removeAttribute('contenteditable');
    }
}

// -------- Shortcuts to Start & Stop Editing ---------------------------------------------------------------

// Run Fucntions run when CTRL + E is pressed - Prevent Default
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 69) {
        e.preventDefault();
        run();
    }
}
);

// Run Fucntions stop when CTRL + S is pressed - Prevent Default
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 83) {
        e.preventDefault();
        stop();
    }
}
);

// 1st click start funcation run and 2nd click run funcation stop on id edit
document.getElementById('edit').addEventListener('click', function () {
    if (document.getElementById('edit').innerHTML == 'CTRL + E to Edit') {
        run();
        document.getElementById('edit').innerHTML = 'CTRL + S to Save';
    } else {
        stop();
        document.getElementById('edit').innerHTML = 'CTRL + E to Edit';
    }
}
);

// If CTRL + E is pressed change edit id inner text to CTRL + S to Save
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 69) {
        e.preventDefault();
        document.getElementById('edit').innerHTML = 'CTRL + S to Save';
    }
}
);

// If CTRL + S is pressed change edit id inner text to CTRL + E to Edit
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 83) {
        e.preventDefault();
        document.getElementById('edit').innerHTML = 'CTRL + E to Edit';
    }
}
);

// -------- Funcation To Add Elements ---------------------------------------------------------------------------

// Create a funcation to add H1 element to the source code with place holder text write something
function addH1() {
  var h1 = document.createElement('h1');
  h1.innerHTML = 'Write something';
  document.execCommand('insertHTML', false, h1.outerHTML);
}

// Create a funcation to add H2 element to the source code with place holder text write something
function addH2() {
  var h2 = document.createElement('h2');
  h2.innerHTML = 'Write something';
  document.execCommand('insertHTML', false, h2.outerHTML);
}

// Create a funcation to add H3 element to the source code with place holder text write something
function addH3() {  
  var h3 = document.createElement('h3');
  h3.innerHTML = 'Write something';
  document.execCommand('insertHTML', false, h3.outerHTML);
}

// Create a funcation to add H4 element to the source code with place holder text write something
function addH4() {  
  var h4 = document.createElement('h4');
  h4.innerHTML = 'Write something';
  document.execCommand('insertHTML', false, h4.outerHTML);
}

// Create a funcation to add H5 element to the source code with place holder text write something
function addH5() {  
  var h5 = document.createElement('h5');
  h5.innerHTML = 'Write something';
  document.execCommand('insertHTML', false, h5.outerHTML);
}

// Create a funcation to add para element to the source code with place holder text write something
function addPara() {  
  var para = document.createElement('p');
  para.innerHTML = 'Write something';
  document.execCommand('insertHTML', false, para.outerHTML);
}

// -------------- Funcation to Style Including Shortcuts  ------------------------------------------------------------

// Create a funcation to make selected text bold in the source code when ctrl + b is pressed prevent default
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 66) {
        e.preventDefault();
        document.execCommand('bold', false, null);
    }
}  
);

// Create a funcation to make selected text italic in the source code when ctrl + i is pressed prevent default
document.addEventListener('keydown', function (e) { 
    if (e.ctrlKey && e.keyCode == 73) {
        e.preventDefault();
        document.execCommand('italic', false, null);
    }
}
);

// Create a funcation to make selected text underline in the source code when ctrl + u is pressed prevent default
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 85) {
        e.preventDefault();
        document.execCommand('underline', false, null);
    }
}
);

// Create a funcation to make selected text strikethrough in the source code when ctrl + x is pressed prevent default
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 88) {
        e.preventDefault();
        document.execCommand('strikeThrough', false, null);
    }
}
);

// ------ Shortcuts to add elements (Basically Running add element funcation) ---------------------------------

// Run Fucntions addH1 when CTRL + 1 is pressed - Prevent Default
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 49) {
        e.preventDefault();
        addH1();
    }
}
);

// Run Fucntions addH2 when CTRL + 2 is pressed - Prevent Default
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 50) {
        e.preventDefault();
        addH2();
    }
}
);

// Run Fucntions addH3 when CTRL + 3 is pressed - Prevent Default
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 51) {
        e.preventDefault();
        addH3();
    }
}
);

// Run Fucntions addH4 when CTRL + 4 is pressed - Prevent Default
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 52) {
        e.preventDefault();
        addH4();
    }
}
);

// Run Fucntions addH5 when CTRL + 5 is pressed - Prevent Default
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 53) {
        e.preventDefault();
        addH5();
    }
}
);

// Run Fucntions addPara when CTRL + 6 is pressed - Prevent Default
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 54) {
        e.preventDefault();
        addPara();
    }
}
);

// When text is selected and CTRl + L is clicked ask for a link and add it to the selected text - Prevent Default and open link in new tab
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 76) {
        e.preventDefault();
        var link = prompt('Enter a link');
        document.execCommand('createLink', false, link);
        
    }
}
);

// All links will be opened in a new tab
document.addEventListener('click', function (e) {
    if (e.target.tagName == 'A') {
        e.preventDefault();
        window.open(e.target.href, '_blank');
    }   
}
);

// ----- Interaction Section ---------
// If ID Close-popup is clicked hide popup
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
     });

  document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        document.getElementById('popup').style.display = 'none';
    }
}
);  

// If Ctrl + ? is pressed show popup 
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 191) {
        document.getElementById('popup').style.display = 'flex';
    }
}
);

// If clicked outside of popup hide popup
document.addEventListener('click', function (e) {
    if (e.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
}
);

// If id icon-help is clicked show popup
document.getElementById('icon-help').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
}  
);


// ------ Notification Section ---------
// class notification intally hidden and below 40px
$('.notification').hide();
$('.notification').css('bottom', '-40px');
var once = true;
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 69 && once) {
        e.preventDefault();
        $('.notification').show();
        $('.notification').animate({
            bottom: '24px'
        }, 500);
        once = false;
    }
}
);
setTimeout(function() {
    $('.notification').fadeOut(500); // Fade out notification
}
, 8000); // Duration of show notification
$('.notification').hide(); // Hide notification after 8 seconds



// Loop roating animation with easing duration targeting id help-icon
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

  