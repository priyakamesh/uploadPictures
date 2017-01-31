app.controller("HomeCtrl", function(){
  console.log("home ctrl")
  //root reference to firebase
  let storageRef = firebase.storage().ref();

  let inputElement = document.getElementById("fileInput");
  inputElement.addEventListener("change", handleFiles, false)
  function handleFiles() {
    var fileList = this.files; /* now you can work with the file list */
    console.log("filelist[0]", fileList[0])
    storageRef.child(fileList[0].name).put(fileList[0])
      .then(function(snapshot) {
        console.log('Uploaded a blob or file!');


    storageRef.child(fileList[0].name).getDownloadURL()
    .then((url)=>{
      var img =document.getElementById("myImg")
      img.src = url;
    })
    .catch((error)=>{
      alert("error")
    })
    });
  }
})
