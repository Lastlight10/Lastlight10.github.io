var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("pic");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

let slideIndex_2 = 1;
showDivs_2(slideIndex_2);

function plusDivs_2(n) {
    showDivs_2(slideIndex_2 += n);
}

function showDivs_2(n) {
    let i;
    let x = document.getElementsByClassName("pic_2");
    if (n > x.length) {slideIndex_2 = 1}
    if (n < 1) {slideIndex_2 = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex_2-1].style.display = "block";
}

let slideIndex_3 = 1;
showDivs_3(slideIndex_3);

function plusDivs_3(n) {
    showDivs_3(slideIndex_3 += n);
}

function showDivs_3(n) {
    let i;
    let x = document.getElementsByClassName("pic_3");
    if (n > x.length) {slideIndex_3 = 1}
    if (n < 1) {slideIndex_3 = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex_3-1].style.display = "block";
}

let slideIndex_4 = 1;
showDivs_4(slideIndex_4);

function plusDivs_4(n) {
    showDivs_4(slideIndex_4 += n);
}

function showDivs_4(n) {
    let i;
    let x = document.getElementsByClassName("pic_4");
    if (n > x.length) {slideIndex_4 = 1}
    if (n < 1) {slideIndex_4 = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex_4-1].style.display = "block";
}
