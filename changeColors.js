"use strict";

const elementsOnPage = Array.from(document.body.getElementsByTagName('*'));
console.log("Elements on Page: ", elementsOnPage);

function getTextNodesandElements() {
  elementsOnPage.forEach(element => {
    // console.log("Element ", element, " is ", element.nodeType);
    element.childNodes.forEach(child => { 
      // console.log(child, " is of type ", child.nodeType);
      // console.log("child is", child);
      if (child.nodeType === 3) { // text node type
        changeColor(element, child);
      }
    });
  });
}

function changeColor(element, node) {
  console.log('inside change color');
  console.log('element: ', element);
  console.log("node: ", node);
  console.log("node value: ", node.nodeValue);
  if (node.nodeValue != null) // or textContent on an element
  {
    // console.log("node.nodeValue: ", node.nodeValue);
    // let value = node.nodeValue;
    // value = value.replace(/house/gi, "<span>TEST</span>");
    // value = value.replace(/House/gi, "<span>TEST</span>");
    // console.log("updated value: ", value);
    // // node.nodeValue=value;
    // let newElement = document.createElement('span');
    // newElement.innerHTML = node.nodeValue;
    // // element.innerHtml = node.nodeValue;
    // element.appendChild(newElement);
    
    console.log("node.nodeValue: ", node.nodeValue);
    let value=node.nodeValue;
    element.innerHTML=element.innerHTML.replace(/house/g, "<span>house</span>");
    element.innerHTML=element.innerHTML.replace(/House/g, "<span>House</span>");
    element.innerHTML=element.innerHTML.replace(/HOUSE/g, "<span>HOUSE</span>");
  } 
}

// gets all paragraph tags on page and changes the color to blue
function testingChangingElementColor() {
  // sets all paragraph tags to null
  let paragraphTagArray = document.getElementsByTagName('p');
  for (let i=0; i<paragraphTagArray.length; i++) {
    paragraphTagArray[i].style.color='blue';
    // prints all paragraph tag text
    console.log(paragraphTagArray[i].innerText);
  }
}

// testingChangingElementColor();
getTextNodesandElements();