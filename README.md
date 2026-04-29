TEMPLAR is a client-side SPA router, of "TEMPLATES." TEMPLAR stores a "helm" which is an array of functions to be run mapped on each TEMPLATE (partial) route. You run the helm in an index.js mount() function on document.ready(). <a> links with the TEMPLAR [page] class list automatically route and call the corresponding helm functions; or you can set up click() handlers and call TEMPLAR.route(). It requires JQuery (for now).

The helm function allows for an MVC architecture akin to AngularJS, but you only need to learn the code for the initialization function to get it to work. 

TEMPLAR allows for setting params without changing the page, routing to an #ANCHOR, and updating the DOM so that a.TEMPLAR automatically routes (it's plug-and-play that way!)

a.TEMPLAR.on(click) routes to the second class after TEMPLAR in the <a> tag. If you dynamically add an a.TEMPLAR tag to the DOM, you must call TEMPLAR.DOM() afterwards (synchronously) so that the anchor routes, or alternatively use document.on("click", "a.TEMPLAR", function(){}).

TEMPLAR.route("#partial_name") routes by #ANCHOR. You must include the #partial_name as partial_name.html in your default partial 'dir'. So $("button").click(TEMPLAR.route("#home") is valid.

TEMPLAR.paramREC() returns query-params as a JSON Object, so to get "?id=" you would do TEMPLAR.paramREC().id. It is currently best practice to check for TEMPLAR.paramREC() in your conditional, followed by && TEMPLAR.paramREC().uuid === '123', etc., so that JS doesn't throw an error when there are no params. 

TEMPLAR.pageREC() returns the page without the '#'. e.g.:
```
        $(document).ready(function(){
                if(TEMPLAR.pageREC() === "home")
                        homeFn(); // alternative to helm
        })
```

Set your default Template directory ('dir') (which should include a list of .html files named [<a> page class].html), helm (the automatic function calls when a partial from the directory is loaded/routed), fade boolean, & defaultPage in the TEMPLAR.initialize() function. TEMPLAR calls render() on defaultPage() on initialize. Helm is an array of objects mapped page, fn(). There is also a fade toggle for TEMPLATE transitions.

HELM EXAMPLE:
```
TEMPLAR.initialize({
        defaultPage: "home",
        dir: "client/partials",
        fade: true,
        pages: ["home", "person"],
        helm: [
            {
                page: "home",
                fn: function() {                                       
                    loadstats();                  
                }
            },
            {
                page: "person",
                fn: function() {
                    loadPerson(TEMPLAR.paramREC().person_uuid)
                }
            }
      ]
})
```

INDEX.HTML:
```
<header>
  <h1>My Website</h1>
</header>
<div class="TEMPLAR home">
  <!--Renders content from client/partials/home.html, where dir is set in TEMPLAR.initialize() !-->
</div>
<div class="TEMPLAR person">
  <!--Renders content from client/partials/person.html, where dir is set in TEMPLAR.initialize() !-->
</div?
