(function() {
    let curUrl = window.location.href;
    
    if(utils.isInViewPage(curUrl)) {
        let noteNodes = $("#link-report p");
        let parser = new Remarkable();
        let newHTML = parser.render(utils.extractText(noteNodes));

        let updateNode = $('#link-report');
        if(updateNode !== null && updateNode.length >= 1) {
            updateNode[0].innerHTML = newHTML;
        }
    }
})()
