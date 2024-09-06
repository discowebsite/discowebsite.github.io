function getBibtex(val) {
    // Get the text field
    // var copyText = document.getElementById("myInput");
  
    // Select the text field
    val.select();
    val.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(val);
  
    // Alert the copied text
    alert("Copied the bibtex entry: " + copyText.value);
  } 