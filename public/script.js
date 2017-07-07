function AddressComplete_Interactive_AutoComplete_v1_00Begin(Key, SearchTerm, Location, LocationAccuracy, Country, LanguagePreference) {
    var script = document.createElement("script"),
        head = document.getElementsByTagName("head")[0],
        url = "http://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/AutoComplete/v1.00/json3.ws?";

    // Build the query string
    url += "&Key=" + encodeURIComponent(Key);
    url += "&SearchTerm=" + encodeURIComponent(SearchTerm);
    url += "&Location=" + encodeURIComponent(Location);
    url += "&LocationAccuracy=" + encodeURIComponent(LocationAccuracy);
    url += "&Country=" + encodeURIComponent(Country);
    url += "&LanguagePreference=" + encodeURIComponent(LanguagePreference);
    url += "&callback=AddressComplete_Interactive_AutoComplete_v1_00End";

    script.src = url;

    // Make the request
    script.onload = script.onreadystatechange = function () {
        if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
            script.onload = script.onreadystatechange = null;
            if (head && script.parentNode)
                head.removeChild(script);
        }
    }

    head.insertBefore(script, head.firstChild);
}

function AddressComplete_Interactive_AutoComplete_v1_00End(response) {
    // Test for an error
    if (response.Items.length == 1 && typeof(response.Items[0].Error) != "undefined") {
        // Show the error message
        alert(response.Items[0].Description);
    }
    else {
        // Check if there were any items found
        if (response.Items.length == 0)
            alert("Sorry, there were no results");
        else {
					console.log(response);
            // PUT YOUR CODE HERE
            //FYI: The output is an array of key value pairs (e.g. response.Items[0].Id), the keys being:
            //Id
            //Text
            //Highlight
            //Description
            //IsRetrievable
        }
    }
}

let key = 'BT11-WH23-RX67-PU84';
let search = document.getElementById('street-address').value;
AddressComplete_Interactive_AutoComplete_v1_00Begin(key, search, '52.7,-8.1', 124, 'CAN');


// url = "http://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/AutoComplete/v1.00/json3.ws?";
// // Build the query string
// url += "&Key=" + encodeURIComponent(Key);
// url += "&SearchTerm=" + encodeURIComponent(SearchTerm);
// url += "&Location=" + encodeURIComponent(Location);
// url += "&LocationAccuracy=" + encodeURIComponent(LocationAccuracy);
// url += "&Country=" + encodeURIComponent(Country);
// url += "&LanguagePreference=" + encodeURIComponent(LanguagePreference);
// url += "&callback=AddressComplete_Interactive_AutoComplete_v1_00End";
//
//
//
// var fields = [
// 	{ element: "street-address", field: "Line1" },
// 	{ element: "street-address2", field: "Line2", mode: pca.fieldMode.POPULATE },
// 	{ element: "city", field: "City", mode: pca.fieldMode.POPULATE },
// 	{ element: "state", field: "ProvinceName", mode: pca.fieldMode.POPULATE },
// 	{ element: "postcode", field: "PostalCode" },
// 	{ element: "country", field: "CountryName", mode: pca.fieldMode.COUNTRY }
// ],
// options = {
// 	key: "BT11-WH23-RX67-PU84"
// },
// control = new pca.Address(fields, options);
