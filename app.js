const shirtColor = document.getElementById("shirtColor");
const collarsColor = document.getElementById("collarsColor");
const buttonsColor = document.getElementById("buttonsColor");
const hairColor = document.getElementById("hairColor");
const faceColor = document.getElementById("faceColor");
const bgColor = document.getElementById("bgColor");
const downloadBtn = document.getElementById("download");
const capture = document.getElementById("capture")

const shirt = document.querySelector(".shirt");
const hair = document.querySelector(".hair");
const face = document.querySelector(".face");
const neck = document.querySelector(".neck");
const collars = document.querySelectorAll(".collar");
const buttons = document.querySelectorAll(".button");

shirtColor.addEventListener("change", (e) => {
  shirt.style.fill = shirtColor.value;
});

hairColor.addEventListener("change", (e) => {
  hair.style.fill = hairColor.value;
});

bgColor.addEventListener("change", (e) => {
  capture.style.backgroundColor = bgColor.value;
});

faceColor.addEventListener("change", (e) => {
  face.style.fill = faceColor.value;
  neck.style.fill = faceColor.value;
});

collarsColor.addEventListener("change", (e) => {
  collars.forEach((collar) => {
    collar.style.fill = collarsColor.value;
  });
});

buttonsColor.addEventListener("change", (e) => {
  buttons.forEach((button) => {
    button.style.fill = buttonsColor.value;
  });
});


// domtoimage
//       .toPng(capture)
//       .then(function (dataUrl) {
//         var img = new Image();
//         img.src = dataUrl;
//         document.body.appendChild(img);
//       })
//       .catch(function (error) {
//         console.error("oops, something went wrong!", error);
//       });

downloadBtn.addEventListener("click", () => {
  domtoimage.toBlob(document.getElementById("capture")).then(function (blob) {
    window.saveAs(blob, "pixel" + ".png");
  });
});
