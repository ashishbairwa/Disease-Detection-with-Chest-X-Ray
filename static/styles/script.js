var count=0;
function checkFileDetails() {
	    //console.log(count);
        var fi = document.getElementById('file');
        if (fi.files.length > 0) { 
            //validation lol script
            for (var i = 0; i <= fi.files.length - 1; i++) {
                var fileName, fileExtension, fileSize, fileType, dateModified;
                fileName = fi.files.item(i).name;
                fileExtension = fileName.replace(/^.*\./, '');
                if (fileExtension == 'jpg' || fileExtension == 'jpeg'||fileExtension == 'JPG') {
                   readImageFile(fi.files.item(i));          
                }
                else {
                    fileSize = fi.files.item(i).size;  
                    fileType = fi.files.item(i).type; 
                    dateModified = fi.files.item(i).lastModifiedDate; 

                    document.getElementById('fileInfo').innerHTML =
                        document.getElementById('fileInfo').innerHTML + '<div class="alert alert-danger" role="alert" id="warn">'+
                            'Only Image files are allowed. Kindly provide images with .jpg and .jpeg extension'+'</div>';
                            document.getElementById('plug').disabled=true;
							count +=1;
							//console.log(count);
                }
            }

            function readImageFile(file) {
                var reader = new FileReader(); 

                reader.onload = function (e) {
                    var img = new Image();      
                    img.src = e.target.result;

                    img.onload = function () {
                        var w = this.width;
                        var h = this.height;
                        if(w<255||h<255){
                        document.getElementById('fileInfo').innerHTML =
                            document.getElementById('fileInfo').innerHTML + '<div class="alert alert-danger" role="alert" id="warn">' +
                                'Provided image is not suitable for processing, Please provide an image greater than width and height 255,255'+'</div>'+'</br>';
                                document.getElementById('plug').disabled=true;
								count +=1;
								//console.log(count);
                        }
                        else{
						console.log("else triggered");
                                    document.getElementById("plug").disabled = false;
									for (i = 0; i < count; i++){
								    var element = document.getElementById("warn");
                                    element.parentNode.removeChild(element);
									}
									count=0;
									//console.log(count);
                        }
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    }
	
 function relocate_home()
     {
     location.href = "/";
     } 
