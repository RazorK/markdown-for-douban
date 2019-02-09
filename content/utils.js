var DEBUG = true;
var utils = {
    log: function(obj) {
        if(DEBUG) console.log(obj);
    },
    extractText: function (selectObj) {
        let res = "";
        for(let i=0; i<selectObj.length; i++) {
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
    }
}