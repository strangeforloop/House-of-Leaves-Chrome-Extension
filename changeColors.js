"use strict";

const elementsOnPage = Array.from(document.body.getElementsByTagName('*'));

function getTextNodesandElements() {
  elementsOnPage.forEach(element => {
    element.childNodes.forEach(child => { 
      if (child.nodeType === 3) {   // text node type
        changeColor(element, child);
      }
    });
  });
}

function changeColor(element, node) {
  if (node.nodeValue != null)   // or use textContent on an element
  {   
    console.log("node.nodeValue: ", node.nodeValue);
    let value=node.nodeValue;
    element.innerHTML=element.innerHTML.replace(/house/g, "<span>house</span>");
    element.innerHTML=element.innerHTML.replace(/House/g, "<span>House</span>");
    element.innerHTML=element.innerHTML.replace(/HOUSE/g, "<span>HOUSE</span>");
  } 
}

getTextNodesandElements();