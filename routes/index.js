
/*
 * GET page.
 */

var TITLE = 'Web Artists';
var navData = [{
    path : '/',
    str  : 'Entrance',
}, {
    path : '/lounge/',
    str  : 'Lounge',
}, {
    path : '/studio/',
    str  : 'Studio',
}, {
    path : '/editroom/',
    str  : 'Edit Room',
}, {
    path : '/gear/',
    str : 'Gear',
}];

exports.index = function(req, res){
    res.render('index', {
        title : TITLE,
        currentNav : 0,
        navData : navData
    });
};

exports.lounge = function(req, res){
  res.render('lounge', {
        title : TITLE,
        currentNav : 1,
        navData : navData
    });
};

exports.studio = function(req, res){
  res.render('studio', {
        title : TITLE,
        currentNav : 2,
        navData : navData
    });
};