// Reusable generic function
function surroundInElement(el, regex, surrounderCreateFunc) {
  // script and style elements are left alone
  if (!/^(script|style)$/.test(el.tagName)) {
    var child = el.lastChild;
    while (child) {
      if (child.nodeType == 1) {
        surroundInElement(child, regex, surrounderCreateFunc);
      } else if (child.nodeType == 3) {
        surroundMatchingText(child, regex, surrounderCreateFunc);
      }
      child = child.previousSibling;
    }
  }
}

// Reusable generic function
function surroundMatchingText(textNode, regex, surrounderCreateFunc) {
  var parent = textNode.parentNode;
  var result, surroundingNode, matchedTextNode, matchLength, matchedText;
  while (textNode && (result = regex.exec(textNode.data))) {
    matchedTextNode = textNode.splitText(result.index);
    matchedText = result[0];
    matchLength = matchedText.length;
    textNode = (matchedTextNode.length > matchLength) ?
      matchedTextNode.splitText(matchLength) : null;
    // Ensure searching starts at the beginning of the text node
    regex.lastIndex = 0;
    surroundingNode = surrounderCreateFunc(matchedTextNode.cloneNode(true));
    parent.insertBefore(surroundingNode, matchedTextNode);
    parent.removeChild(matchedTextNode);
  }
}

// This function does the surrounding for every matched piece of text
// and can be customized  to do what you like
function createSpan(matchedTextNode) {
  var el = document.createElement("span");
  el.style.color = "red";
  el.appendChild(matchedTextNode);
  return el;
}

// The main function
function wrapWords(container, words) {
  // Replace the words one at a time to ensure "test2" gets matched
  for (var i = 0, len = words.length; i < len; ++i) {
    surroundInElement(container, new RegExp(words[i]), createSpan);
  }
}

// wrapWords(document.getElementById("container"), ["test2", "test"]);
wrapWords(document.getElementById("container"), ["test2", "test"]);
// wrapWords(document.body.innerHTML, ["test2", "test"]);
wrapWords(document.body.innerText, ["test"]);
// document.body.innerHTML