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
        afterDOMLoaded()
        
    });
}

$(document).ready(function(){
    go();

})
