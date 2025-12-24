/**
 * THE TEMPLAR INDEX: A fusion of maritime discipline and existential clarity.
 * We resolve to make the code sail by ensuring its properties are 'Ready-to-hand'.
 */
function go() {
    TEMPLAR.initialize({
        defaultPage: "home",
        dir: "client/partials",
        fade: true,
        pages: ["home", "node", "set"],
        helm: [
            {
                page: "home",
                fn: function() {
                    initializeHome();
                    if(TEMPLAR.paramREC() && TEMPLAR.paramREC().graph === "true"){
                        initializeGraph();
                    }
                }
            },
            {
                page: "node",
                fn: function() {
                   initializeNode();      
                }
            },
            {
                page: "set",
                fn: function() {
                    crossWard();
                }
            }
        ]
    }, function(){
        afterDOMLoaded();
        
        //just a demonstration of pageREC(), you should initialize TEMPLAR.helm (as done above) to load functions in practice.
        if(TEMPLAR.pageREC() === "set"){
            redundant();
        }
        
    });
}

$(document).ready(function(){
    go();

    //demonstration of TEMPLAR.DOM()
    setTimeout(function(){
       $("body").append("<a class='TEMPLAR node' href='#node?id=3'>Node 3</a>")
       TEMPLAR.DOM() //Now a.click() routes to #node automatically, and you can pick up by calling TEMPLAR.paramREC().id in the helm or external controller!
    },7777)
})


