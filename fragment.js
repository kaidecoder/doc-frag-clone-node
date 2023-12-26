/**
 * ! HTML TEMPLATE: This technique allows you to pass in an HTML string and receive an HTML object back, so you have access to things like class list, event listeners, text content etc.
 * Reference:  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
 * 
 * the HTMLTemplateElement interface includes a standard content property (without an equivalent content/markup attribute). This content property is read-only and holds a DocumentFragment that contains the DOM subtree represented by the template. Be careful when using the content property because the returned DocumentFragment can exhibit unexpected behavior.
 * 
 * example HTML
 * 
 * <table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- existing data could optionally be included here -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>

 * 
 * example JS
 * // Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ("content" in document.createElement("template")) {
  // Instantiate the table with the existing HTML tbody
  // and the row with the template
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#productrow");

  // Clone the new row and insert it into the table
  const clone = template.content.cloneNode(true);
  let td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  tbody.appendChild(clone);

  // Clone the new row and insert it into the table
  const clone2 = template.content.cloneNode(true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans 2";

  tbody.appendChild(clone2);
} else {
  // Find another way to add the rows to the table because
  // the HTML template element is not supported.
}

    SUMMARY:  Make a template then clone it with cloneNode.  When using the "content" property during the cloning stage, a DocumentFragment gets returned!!!

    NOTE: When a DocumentFragment value is passed, Node.appendChild and similar methods move only the child nodes of that value into the target node. Therefore, it is usually preferable to attach event handlers to the children of a DocumentFragment, rather than to the DocumentFragment itself.
 **/
/**
 * ! HTML Template
**/
//given an html string, this function will return an object for you
function elementFromHTML(html){
    //create a template element to store html
    const template = document.createElement("template")
    template.innerHTML = html.trim()
    //this return statement returns a document fragment
    return template.content.firstElementChild
}
const myList = elementFromHTML(`
    <ul>
        <li>Oranges</li>
        <li>Bananas</li>
        <li>Apples</li>
    </ul>
`)
//this drops the fragment into the code as if it were typed from the start
document.body.append(myList)

//Now copy then add an item to my template using CloneNode.  The cloneNode method does not include the child nodes by default.  You must use "true" to include the child nodes.
console.log(myList)
const listChildren = myList.children
const bananasItem = listChildren[1]
console.log(bananasItem)

const bananasCopy = bananasItem.cloneNode(true)

myList.appendChild(bananasCopy)

/**
 * ! Make a document fragment.  Append children to that document fragment.  Append the fragment to some parent element.
**/
//Let's make a bunch of list items and append the document fragment to the template from above.

const newList = myList
const docFrag = document.createDocumentFragment()
let item1 = document.createElement("li")
item1.textContent = "Dounce Plum"
let item2 = document.createElement("li")
item2.textContent = "Sugar Apple"
docFrag.appendChild(item1)
docFrag.appendChild(item2)
console.log(docFrag)
//by appending a document fragment to a parent, items are moved from the document fragment to the parent
newList.appendChild(docFrag)
//logging the doc frag after the move shows it is empty
console.log(docFrag)
