$('.slider').slick({
    infinite: true,
    slideToShow:1,
    slideToScroll:1
});


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  var results_row = document.getElementById('filter-results-row')
  if (c == "all") {
    c = "";
    if (results_row.classList.contains('flex', 'flex-column')) results_row.classList.remove('flex', 'flex-column');
  }

  if (c.length > 0) {
    if (!results_row.classList.contains('flex', 'flex-column')) results_row.classList.add('flex', 'flex-column')
  }

  for (i = 0; i < x.length; i++) {
    fruitRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) fruitAddClass(x[i], "show");
  }
}

function fruitAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function fruitRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

