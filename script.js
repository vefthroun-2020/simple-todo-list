// Array - list
var list = ["Do laundry", "Finish guides", "Present Project I"];

// Display all items in the list
function displayItems() {
  console.log("Displaying items...");

  // Display all list items
  list.forEach(function (item) {
    console.log(item);
  });
}

// Add new list item
function addListItem(newListItem) {
  list.push(newListItem);

  // Display updated list
  displayItems();
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
  displayItems();
}

// Mark list item as done
