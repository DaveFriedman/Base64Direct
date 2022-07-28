// On click, get base64 string, decode to ASCII, assume result is a url,
// send browser to url.
function go(event) {
    var str = document.getElementById("encoded").value;
    console.log(str);
    a = decode(str);

    location.assign(a.pop());

    return false;
};


// On click, get base64 string, decode to ASCII, show intial string, all
// subsequent strings, and final, linkified ASCII result.
function show(event) {
    var str = document.getElementById("encoded").value;
    a = decode(str);

    showDiv = document.getElementById("showDiv");
    showDiv.innerHTML = "";
    for (let i=0; i<(a.length-1); i++) {
        showDiv.insertAdjacentHTML("beforeend", `<p>${a[i]}</p>`);
    }
    url = a.pop();
    showDiv.insertAdjacentHTML("beforeend", `<p><a href="${url}">${url}</a></p>`);

    return false;
};

// Take a string, check if it's base64, decode if so, repeat until b64 check
// fails or 9 attempts, return an array of all decodings.
function decode(str) {
    const a = [];
    for (let i=0; i<9; i++) {
        a.push(str);
        try {
            window.atob(str);
        } catch (e) {
            return(a);
        }
        str = decodeURIComponent(escape(window.atob(str)));
        console.log(a[i]);
    }
    console.log("Error: Too many (10+) base64 decodings.")
    return(a);
};
