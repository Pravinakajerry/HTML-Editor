// Index
// 1. Add Contenteditable
// 2. Remove Contenteditable 
// 3. 1st click start funcation run and 2nd click run funcation stop on id edit
// 4. If CTRL + E is pressed change edit id inner text to CTRL + S to Save
// 5. If CTRL + S is pressed change edit id inner text to CTRL + E to Edit
// 6. Run Fucntions run when CTRL + E is pressed - Prevent Default
// 7. Run Fucntions stop when CTRL + S is pressed - Prevent Default
// 8. All links will be opened in a new tab
// 9. if double clicked on any text or heading element add content editable attribute to its parent element
// 10. If clicked outside of any text or heading element remove content editable attribute from its parent element


// Add Contenteditable
function run() {
  var previewElements = document.getElementsByClassName('preview-body');
  for (var i = 0; i < previewElements.length; i++) {
    previewElements[i].setAttribute('contenteditable', true);
  }
}

// Remove Contenteditable
function stop() {
    var previewElements = document.querySelectorAll('.preview-body');
    for (var i = 0; i < previewElements.length; i++) {
        previewElements[i].removeAttribute('contenteditable');
    }
}

// If CTRL + E is pressed change edit id inner text to CTRL + S to Save
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 69) {
        e.preventDefault();
        // document.getElementById('edit').innerHTML = 'CTRL + S to Save';
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

// All links will be opened in a new tab
document.addEventListener('click', function (e) {
    if (e.target.tagName == 'A') {
        e.preventDefault();
        window.open(e.target.href, '_blank');
    }   
}
);