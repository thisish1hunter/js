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
}

xhr.send()
