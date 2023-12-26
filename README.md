### Document Fragment
/**
* ! Document Fragment

A common use for DocumentFragment is to create one, assemble a DOM subtree within it, then append or insert the fragment into the DOM using Node interface methods such as appendChild(), append(), or insertBefore(). Doing this moves the fragment's nodes into the DOM, leaving behind an empty DocumentFragment.

This interface is also of great use with Web components: <template> elements contain a DocumentFragment in their HTMLTemplateElement.content property.

An empty DocumentFragment can be created using the document.createDocumentFragment() method or the constructor.

### Instance methods
This interface inherits the methods of its parent, Node.

DocumentFragment.append()
Inserts a set of Node objects or string objects after the last child of the document fragment.

DocumentFragment.prepend()
Inserts a set of Node objects or string objects before the first child of the document fragment.

DocumentFragment.querySelector()
Returns the first Element node within the DocumentFragment, in document order, that matches the specified selectors.

DocumentFragment.querySelectorAll()
Returns a NodeList of all the Element nodes within the DocumentFragment that match the specified selectors.

DocumentFragment.replaceChildren()
Replaces the existing children of a DocumentFragment with a specified new set of children.

DocumentFragment.getElementById()
Returns the first Element node within the DocumentFragment, in document order, that matches the specified ID. Functionally equivalent to Document.getElementById().



const ul = document.querySelector("ul");
const fruits = ["Apple", "Orange", "Banana", "Melon"];

const fragment = new DocumentFragment();

for (const fruit of fruits) {
  const li = document.createElement("li");
  li.textContent = fruit;
  fragment.append(li);
}

ul.append(fragment);
**/