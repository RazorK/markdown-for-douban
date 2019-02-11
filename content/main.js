(function() {
    let curUrl = window.location.href;

    function viewPageUpdate() {
        let rootNode = $('#link-report');
        let noteNodes = $("#link-report p");

        if(rootNode === null || rootNode.length < 1 
            || !utils.isCreatedByExtension(noteNodes)) return;
        
        let parser = new Remarkable();
        let newHTML = utils.beautifyMarkDownHTML(parser.render(utils.extractText(noteNodes)));
        rootNode[0].innerHTML = newHTML;
    }

    // return button node
    function addMarkdownButton() {
        
    }

    if(utils.isInViewPage(curUrl)) {
        viewPageUpdate();
    } else if(utils.isInEditPage(curUrl)) {
        // show button
        addMarkdownButton();
    }
})()