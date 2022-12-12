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

// Run Contenteditable
    document.getElementById('edit').addEventListener('click', run);
    // Shortcut to Enter Edit Mode
    document.addEventListener('keydown', function(event) {
         if (event.ctrlKey && event.key === 'e') {
        run();
        }
    });

// Stop Contenteditable
    // Attach event listener for click on element with ID "stop"
        document.getElementById('stop').addEventListener('click', stop);

    // Attach event listener for keydown on document
        document.addEventListener('keydown', function(event) {
    // Check if CTRL + S key combination is pressed
        if (event.ctrlKey && event.key === 's') {
        stop();
  }
});

// Adding Elements
//H1
document.getElementById('h1').addEventListener('click', function() {
  var h1 = document.createElement('h1');
  h1.innerHTML = 'Write something';
  document.execCommand('insertHTML', false, h1.outerHTML);
});

//H2
document.getElementById('h2').addEventListener('click', function() {
  var h2 = document.createElement('h2');
  h2.innerHTML = 'Write something';
  document.execCommand('insertHTML', false, h2.outerHTML);
});

document.getElementById('h3').addEventListener('click', function() {
  var h3 = document.createElement('h3');
  h3.innerHTML = 'Write something';
  document.execCommand('insertHTML', false, h3.outerHTML);
});

document.getElementById('h4').addEventListener('click', function() {
  var h4 = document.createElement('h4');
  h4.innerHTML = 'Write something';
  document.execCommand('insertHTML', false, h4.outerHTML);
});

// Experimental

function changeTags() {
  var selection = window.getSelection();
  if (selection.rangeCount > 0) {
    var range = selection.getRangeAt(0);
    var selectedElement = range.commonAncestorContainer;
    if (selectedElement.nodeType === 1 && selectedElement.tagName.toLowerCase() !== 'h1') {
      var newElement = document.createElement('h1');
      newElement.innerHTML = selectedElement.innerHTML;
      selectedElement.parentNode.replaceChild(newElement, selectedElement);
    }
  }
}

// Run Contenteditable when FN + 1 is clicked on keyboard
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.keyCode === 49) {
    run();
  }
});

function addH1() {
  var selection = window.getSelection();
  if (selection.rangeCount > 0) {
    var range = selection.getRangeAt(0);
    var selectedElement = range.commonAncestorContainer;
    var h1 = document.createElement('h1');
    h1.innerHTML = 'Write something';
    selectedElement.parentNode.appendChild(h1);
  }
}
// If Ctrl + 2 is clicked adding H1 element in parent group without div block
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.keyCode === 49) {
    addH1();
  }
});


// Adding H1 Element if CTRL + 1 is clicked 
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.keyCode === 49) {
    var h1 = document.createElement('h1');
    h1.innerHTML = 'Write something';
    document.execCommand('insertHTML', false, h1.outerHTML);
  }
});

/* document.getElementById('h1').addEventListener('click', function() {
  var selection = window.getSelection();
  if (selection.rangeCount > 0) {
    var range = selection.getRangeAt(0);
    var h1 = document.createElement('h1');
    h1.innerHTML = range.toString();
    range.deleteContents();
    range.insertNode(h1);
  }
}); */
