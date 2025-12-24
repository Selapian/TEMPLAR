TEMPLAR is a client-side SPA router, of "TEMPLATES." TEMPLAR stores a "helm" which is an array of functions to be run mapped on each TEMPLATE. It requires JQuery (for now).

TEMPLAR allows for setting params without changing the page, routing to an #ANCHOR, and updating the DOM so that a.TEMPLAR automatically routes (it's plug-and-play that way!)

a.TEMPLAR.on(click) routes to the second class after TEMPLAR in the [a] tag. If you dynamically add an a.TEMPLAR tag to the DOM, you must call TEMPLAR.DOM() afterwards (synchronously) so that the anchor routes.

TEMPLAR.route("#partial_name") routes by #ANCHOR.

TEMPLAR.paramREC() returns query-params as a JSON Object, so to get "?id=" you would do TEMPLAR.paramREC().id

TEMPLAR.pageREC() returns the page without the '#'. So you can do if(TEMPLAR.pageREC() !== "home") TEMPLAR.route("#home"). on $(document).ready().

See dew.js 
