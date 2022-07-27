document.getElementById("goBtn").addEventListener("click", go);
document.getElementById("showBtn").addEventListener("click", show);


// On click, get base64 string, decode to ASCII, assume result is a url,
// send browser to url.
function go(event) {
    var str = document.getElementById("encoded").value;
    a = decode(str);

    location.assign(a.pop());

    event.preventDefault();
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

    event.preventDefault();
};


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
    console.log("Error: No url found in 9 base64 decodings.")
    return(a);
};