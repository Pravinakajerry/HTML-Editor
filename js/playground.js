// // if double clicked on any text or heading element add content editable attribute to its parent element
// document.addEventListener('dblclick', function (e) {
//     if (e.target.tagName == 'H1' || e.target.tagName == 'H2' || e.target.tagName == 'H3' || e.target.tagName == 'H4' || e.target.tagName == 'H5' || e.target.tagName == 'P') {
//         e.target.parentElement.setAttribute('contenteditable', 'true');
//     }
// }
// );

// // If clicked outside of any text or heading element remove content editable attribute from its parent element
// document.addEventListener('click', function (e) {
//     if (e.target.tagName != 'H1' && e.target.tagName != 'H2' && e.target.tagName != 'H3' && e.target.tagName != 'H4' && e.target.tagName != 'H5' && e.target.tagName != 'P') {
//         document.querySelectorAll('[contenteditable]').forEach(function (element) {
//             element.removeAttribute('contenteditable');
//         }
//         );
//     }
// }
// );

// // 1st click start funcation run and 2nd click run funcation stop on id edit
// document.getElementById('edit').addEventListener('click', function () {
//     if (document.getElementById('edit').innerHTML == 'CTRL + E to Edit') {
//         run();
//         document.getElementById('edit').innerHTML = 'CTRL + S to Save';
//     } else {
//         stop();
//         document.getElementById('edit').innerHTML = 'CTRL + E to Edit';
//     }
// }
// );