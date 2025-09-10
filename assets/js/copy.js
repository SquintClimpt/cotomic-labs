function copyFunction() {
    // Get the text field
    var copyText = document.getElementById("code-1").innerText;
    

    navigator.clipboard.writeText(copyText)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
} 
