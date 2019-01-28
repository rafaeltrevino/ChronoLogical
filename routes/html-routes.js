var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    //listening at /index (main page) - not sure how to deal with the modal yet, so I just set this up like it's the page
    app.get("/index", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });

    //route to the mytimelines html

    //this is related to authentication - but it's basically the same route as index. I need to do more research to figure out how to just slightly change the page after login
    app.get("/index", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
      });

};