// WIP - Replace Image

// // write a funcation to replace image when image is clicked ask for image url and replace image with new image
// function replaceImage() {
//     var image = document.createElement('img');
//     var imageSrc = prompt('Enter image URL');
//     image.setAttribute('src', imageSrc);
//     document.execCommand('insertHTML', false, image.outerHTML);
// }

// // run replaceimage funcation when any image is clicked
// var images = document.querySelectorAll('img');
// for (var i = 0; i < images.length; i++) {
//     images[i].addEventListener('click', replaceImage);
// }


// // --------- Experimental ---------------------
// // If CTRL + SHIFT + S is pressed save the file without any library
// document.addEventListener('keydown', function (e) {
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 83) {
//         e.preventDefault();

//         // Get the HTML code of the page
//         var html = document.documentElement.outerHTML;

//         // Create a Blob object with the HTML code
//         var blob = new Blob([html], {type: "html/text;charset=utf-8"});

//         // Save the Blob object to a file
//         saveAs(blob, "new-page.html");
//     }
// });

// // ---- Save as ZIP / Experimental ----

// // Create a new JSZip object
// var zip = new JSZip();

// // Get all the CSS files that are linked to the page
// var cssLinks = document.querySelectorAll('link[rel="stylesheet"]');

// // Add each CSS file to the ZIP archive
// cssLinks.forEach(function(link) {
//   var fileName = link.href.split('/').pop(); // Get the file name from the URL
//   var fileData = fetch(link.href).then(function(response) {
//     return response.text(); // Read the file as text
//   });
//   zip.file(fileName, fileData); // Add the file to the ZIP archive
// });

// // Get all the html files are linked to the page
// var htmlLinks = document.querySelectorAll('a[href$=".html"]');
// htmlLinks.forEach(function(link) {
//     var fileName = link.href.split('/').pop(); // Get the file name from the URL
//     var fileData = fetch(link.href).then(function(response) {
//         return response.text(); // Read the file as text
//     });
//     zip.file(fileName, fileData); // Add the file to the ZIP archive
// });

// console.log('Running');

// // Get all the JavaScript files that are linked to the page
// var jsLinks = document.querySelectorAll('script[src]');

// // Add each JavaScript file to the ZIP archive
// jsLinks.forEach(function(script) {
//   var fileName = script.src.split('/').pop(); // Get the file name from the URL
//   var fileData = fetch(script.src).then(function(response) {
//     return response.text(); // Read the file as text
//   });
//   zip.file(fileName, fileData); // Add the file to the ZIP archive
// });

// // Generate the ZIP file and trigger a download
// zip.generateAsync({type:"blob"}).then(function(content) {
//   saveAs(content, "files.zip");
// });