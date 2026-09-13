function fillList(id, facts) {
    const list = document.getElementById(id);

    for (let i = 0; i < facts.length; i++) {
        const item = document.createElement("li");
        item.textContent = facts[i];
        list.appendChild(item);
    }
}

fillList("window-text", [
    "innerWidth: " + window.innerWidth,
    "innerHeight: " + window.innerHeight,
    "outerWidth: " + window.outerWidth,
    "outerHeight: " + window.outerHeight
]);

fillList("document-text", [
    "title: " + document.title,
    "URL: " + document.URL,
    "readyState: " + document.readyState
]);

fillList("screen-text", [
    "width: " + screen.width,
    "height: " + screen.height,
    "colorDepth: " + screen.colorDepth,
    "pixelDepth: " + screen.pixelDepth
]);

fillList("history-text", [
    "length: " + history.length
]);

fillList("navigator-text", [
    "language: " + navigator.language,
    "onLine: " + navigator.onLine,
    "userAgent: " + navigator.userAgent,
    "platform: " + navigator.platform,
    "cookieEnabled: " + navigator.cookieEnabled,
    "product: " + navigator.product
]);

fillList("location-text", [
    "href: " + location.href,
    "hostname: " + location.hostname,
    "pathname: " + location.pathname,
    "protocol: " + location.protocol
]);

fillList("console-text", [
    "console.log() — print a message",
    "console.error() — print an error",
    "console.table() — print data as a table"
]);

function openNewTab() {
    document.getElementById("open-window-button").addEventListener("click", () => {
        window.open("https://www.google.com", "_blank");
        return false;
    }); //prevent the default behavior of the button
}

function printPage() {
    document.getElementById("print").addEventListener("click", () => {
        window.print();
        return false;
    }); //prevent the default behavior of the button
}
openNewTab();
printPage();

