// Index:
// 1. Add H1 Funcation
// 2. Add H2 Funcation
// 3. Add H3 Funcation
// 4. Add H4 Funcation
// 5. Add H5 Funcation
// 6. Add P Funcation


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