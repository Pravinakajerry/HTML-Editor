// Index
// 1. Run Editing Functions (CTRL + E)
// 2. Run Stop Functions (CTRL + S)
// 3. Adding Elements
   // 3.1. Adding H1 (CTRL + 1)
    // 3.2. Adding H2 (CTRL + 2)
    // 3.3. Adding H3 (CTRL + 3)
    // 3.4. Adding H4 (CTRL + 4)
    // 3.5. Adding H5 (CTRL + 5)
    // 3.6. Adding Paragraph (CTRL + 6)
    // 3.7. Adding Bold (CTRL + B)
    // 3.8. Adding Italic (CTRL + I)
    // 3.9. Adding Underline (CTRL + U)
    // 3.10. Adding Strikethrough (CTRL + X)
    // 3.11. Adding Link (CTRL + L)
// 4. Show popup on (CTRL + ?)


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

// When text is selected and CTRl + L is clicked ask for a link and add it to the selected text - Prevent Default and open link in new tab
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 76) {
        e.preventDefault();
        var link = prompt('Enter a link');
        document.execCommand('createLink', false, link);
        
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