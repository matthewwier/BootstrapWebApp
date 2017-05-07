/**
 * Created by Maciej on 2017-05-01.
 */

$(document).ready(function() {
    $('#example').DataTable( {
        "searching": false,
        "paging": false,
        "info": false,
        "ajax": 'files/ajax.txt'
    } );
} );
var myApp = angular.module('myApp', ["ngRoute"]);
var page;
myApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            template: '<div><h1>{{message}}</h1></div><br>',
            controller : "homeController"
        })
        .when("/europe", {
            template: '<div><h1>{{message}}</h1></div><br>',
            controller : "europeController"
        })
        .when("/asia", {
            template: '<div><h1>{{message}}</h1></div><br>',
            controller : "asiaController"
        })
        .when("/africa", {
            template: '<div><h1>{{message}}</h1></div><br>',
            controller : "africaController"
        })
        .when("/northamerica", {
            template: '<div><h1>{{message}}</h1></div><br>',
            controller : "northController"
        })
        .when("/southamerica", {
            template: '<div><h1>{{message}}</h1></div><br>',
            controller : "southController"
         })
        .when("/watchmore", {
            template: '<div><h1>{{message1}}<a href="#here" onclick="scrollSouthAmerica()" >here</a>{{message2}}</h1></div>',
            controller : "watchController"
        });
});

// create the controller and inject Angular's $scope
myApp.controller('homeController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Here Home. Select continent and watch images!';
});

myApp.controller('europeController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Selected Europe';
});

myApp.controller('asiaController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Selected Asia';
});

myApp.controller('africaController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Selected Africa';
});
myApp.controller('northController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Selected North America';
});
myApp.controller('southController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Selected South America';
});
myApp.controller('watchController', function($scope) {
    // create a message to display in our view
    $scope.message1 = 'To watch more click ';
    $scope.message2 = ' and next scroll down';
});

function scrollHome(){
    $('html,body').animate({
            scrollTop: $(".parallax-window2").offset().top},
        'slow');
}

function scrollEurope(){
    $('html,body').animate({
            scrollTop: $(".parallax-europe").offset().top},
        'slow');
}

function scrollAsia(){
    $('html,body').animate({
            scrollTop: $(".parallax-asia").offset().top},
        'slow');
}

function scrollAfrica(){
    $('html,body').animate({
            scrollTop: $(".parallax-africa").offset().top},
        'slow');
}
function scrollNorthAmerica(){
    $('html,body').animate({
            scrollTop: $(".parallax-north-america").offset().top},
        'slow');
}
function scrollSouthAmerica(){
    $('html,body').animate({
            scrollTop: $(".parallax-south-america").offset().top},
        'slow');
}

function scrollToTable(){
    $('html,body').animate({
            scrollTop: $("#example").offset().top},
        'slow');
}

$("img.lazy").lazyload({
    effect : "fadeIn"
});