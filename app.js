function ChangeImage(imageUrl) {
  var imageElement = document.getElementById("placeholderImgLeft");
  imageElement.src = imageUrl;
  GenerateThrow();
}

function GenerateThrow() {
  var imageElement = document.getElementById("placeholderImgRight");
  var pcThrow = Math.floor(Math.random() * 7);
  console.log(pcThrow);
  switch (pcThrow) {
    case 0:
      imageElement.src = "images/throw/defence-export.png";
      break;
    case 1:
      imageElement.src = "images/throw/one-export.png";
      break;
    case 2:
      imageElement.src = "images/throw/two-export.png";
      break;
    case 3:
      imageElement.src = "images/throw/three-export.png";
      break;
    case 4:
      imageElement.src = "images/throw/four-export.png";
      break;
    case 5:
      imageElement.src = "images/throw/five-export.png";
      break;
    case 6:
      imageElement.src = "images/throw/six.png";
      break;
  }
}
