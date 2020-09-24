var listEl = document.querySelector(".list ul");
var form = document.querySelector(".add-task-container form");

// Array - list
// var list = ["Do laundry", "Finish guides", "Present Project I"];

var list = [
  {
    name: "Do laundry",
    isDone: false,
  },
  {
    name: "Finish guides",
    isDone: true,
  },
];

// Display all items in the list
function displayItemsInConsole() {
  console.log("Displaying items...");

  // Display all list items
  for (item of list) {
    console.log("- " + item);
  }
}

// Add new list item
function addListItem(newListItem) {
  list.push(newListItem);

  // Display updated list
  displayListItemsInDOM();
}

// Remove list item
function removeListItem(listItem) {
  // Look for matching list item
  var foundItemIndex = list.indexOf(listItem);

  // Remove the matching list item, if it exists
  if (foundItemIndex === -1) {
    console.log("Item not found.");
    return;
  } else {
    console.log("Removing item...");
    // Remove item
    list.splice(foundItemIndex, 1);
  }

  // Display the updated list
  displayListItemsInDOM();
}

// Mark list item as done
function addListItemToDOM(item) {
  // Create a remove button
  var removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.classList.add("remove");

  removeButton.addEventListener("click", function (e) {
    var btn = e.target;

    var parentListItem = btn.parentNode.parentNode;
    var itemName = parentListItem.querySelector("p").innerText;

    removeListItem(itemName);
  });

  // Create list item
  var listItem = document.createElement("li");

  if (item.isDone) {
    listItem.classList.add("done");
  }

  listItem.innerHTML = `
    <p>${item.name}</p>

    <footer>
    </footer>
  `;

  // Add remove button to list item's footer
  var listItemFooter = listItem.querySelector("footer");
  listItemFooter.appendChild(removeButton);

  // Add list item to list DOM
  listEl.appendChild(listItem);
}

// Update list in DOM
function displayListItemsInDOM() {
  // Clear list
  listEl.innerHTML = "";

  // Add all list items to listEl
  for (item of list) {
    // Concatenation
    addListItemToDOM(item);
  }
}

// Add event listener to form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var form = e.target;
  var newItem = form.elements.newItem;

  addListItem(newItem.value);

  newItem.value = "";
});

displayListItemsInDOM();
