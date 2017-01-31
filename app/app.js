console.log("lets start")

const app = angular.module("uploadApp", ['ngRoute'])
.config (($routeProvider,$locationProvider)=>{
  $locationProvider.hashPrefix('')
  $routeProvider
    .when ("/",{
      controller: "HomeCtrl",
      templateUrl: "partials/home.html"
    })
})
