function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));

    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));

    outputArr.push("</table>");

    console.log(outputArr.join('\n'));

    function makeKeyRow(arr) {
        // TODO
    };

    function makeValueRow(obj) {
        // TODO
    };

    function escapeHtml(value) {
        // TODO
    };

}