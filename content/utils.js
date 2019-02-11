var DEBUG = true;
var utils = {
    log: function(obj) {
        if(DEBUG) console.log(obj);
    },
    extractText: function (selectObj) {
        let res = "";
        for(let i=0; i<selectObj.length-1; i++) {
            res += selectObj[i].innerText + "\n";
        }
        return res;
    },
    isInViewPage: function(url) {
        let re = /^https:\/\/www.douban.com\/note\/\d+(\/)?$/;
        return url.match(re) !== null;
    },
    isInEditPage: function(url) {
        let re = /^https:\/\/www.douban.com\/note\/\d+\/edit(\/)?$/;
        return url.match(re) !== null;
    },
    isCreatedByExtension: function(noteNodes) {
        // check whether the last line is unique identifier
        if(noteNodes === null || noteNodes.length < 1) return false;
        return noteNodes[noteNodes.length-1].innerText === UNIQUE_IDENTIFIER;
    },
    beautifyMarkDownHTML(html) {
        //console.log(html);
        let res = document.createElement('div');
        res.setAttribute("id", MARKDOWN_DIV_ID);
        res.innerHTML = html;
        return res.outerHTML;
    },
}