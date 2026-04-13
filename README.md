TEMPLAR is a client-side SPA router, of "TEMPLATES." TEMPLAR stores a "helm" which is an array of functions to be run mapped on each TEMPLATE. It requires JQuery (for now).

TEMPLAR allows for setting params without changing the page, routing to an #ANCHOR, and updating the DOM so that a.TEMPLAR automatically routes (it's plug-and-play that way!)

a.TEMPLAR.on(click) routes to the second class after TEMPLAR in the [a] tag. If you dynamically add an a.TEMPLAR tag to the DOM, you must call TEMPLAR.DOM() afterwards (synchronously) so that the anchor routes.

TEMPLAR.route("#partial_name") routes by #ANCHOR.

TEMPLAR.paramREC() returns query-params as a JSON Object, so to get "?id=" you would do TEMPLAR.paramREC().id. It is currently best practice to check for TEMPLAR.paramREC() in your conditional, followed by && TEMPLAR.paramREC().uuid === '123', etc.

TEMPLAR.pageREC() returns the page without the '#'. So you can do if(TEMPLAR.pageREC() !== "home") TEMPLAR.route("#home"). on $(document).ready().

Set your default Template directory, helm (the automatic function calls when a partial is loaded), & defaultPage in the TEMPLAR.initialize() function. There is also a fade toggle.

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
  <!--Renders content from dir/home.html, where dir is set in TEMPLAR.initialize() !-->
</div>
<div class="TEMPLAR person">
  <!--Renders content from dir/person.html, where dir is set in TEMPLAR.initialize() !-->
</div?

Please note that a header in default 'dir' is automatically loaded, must be titled header.html, on TEMPLAR.initialize(), on every route.

BONUS: 
$(document).on("TEMPLAR_SHIFT", function(){
  //catches shift+click on .TEMPLAR <a> tags for interactive apps.
})

See index.js for the helm format!
