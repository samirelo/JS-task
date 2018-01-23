console.log('hahah');

sliderCount = 1;

function changeSliderImage(sliderDir) {
  if(sliderDir=="left")
    sliderCount -= 1;
  else
    sliderCount += 1;
  if (sliderCount>7 && sliderDir=="right")
    sliderCount = 1;
  else if (sliderCount<1 && sliderDir=="left")
    sliderCount = 7;
  document.getElementById('myimage').src = "./images/image_"+String(sliderCount)+".jpg";
}
