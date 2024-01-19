// invert document without inverting images

document.body.style.backgroundColor = "black";
document.body.style.filter = "invert(1)";


for (let img of document.querySelectorAll("img")) {
  img.style.filter = "invert(1)"
}
for (let video of document.querySelectorAll("video")) {
  video.style.filter = "invert(1)"
}