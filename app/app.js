console.log("lets start")

const app = angular.module("uploadApp", ['ngRoute'])
.config (($routeProvider,$locationProvider)=>{
  $locationProvider.hashPrefix('')
   firebase.initializeApp({
    apiKey: "AIzaSyDvTGEJoO53RaYQ6muv0APGUFyKesNxE_4",
    authDomain: "upload-pictures.firebaseapp.com",
    databaseURL: "https://upload-pictures.firebaseio.com",
    storageBucket: "upload-pictures.appspot.com",
    messagingSenderId: "977932051303"
  });
  $routeProvider
    .when ("/",{
      controller: "HomeCtrl",
      templateUrl: "partials/home.html"
    })
})
