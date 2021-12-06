/* Look for any elements with the class "custom-select": */
const customSelect = document.getElementsByClassName("custom-select");
const customSelectLength = customSelect.length;
for (let i = 0; i < customSelectLength; i++) {
  let selElmnt = customSelect[i].getElementsByTagName("select")[0];
  const selElmntLength = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  const DivElementSel = document.createElement("DIV");
  DivElementSel.setAttribute("class", "select-selected");
  DivElementSel.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  customSelect[i].appendChild( DivElementSel);
  /* For each element, create a new DIV that will contain the option list: */
  const optionDivElem = document.createElement("DIV");
  optionDivElem.setAttribute("class", "select-items select-hide");
  for (let j = 1; j < selElmntLength; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    let c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function() {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        let y, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (let i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (let k = 0; k <  y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    optionDivElem.appendChild(c);
  }
  customSelect[i].appendChild(optionDivElem);
  DivElementSel.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  let x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);