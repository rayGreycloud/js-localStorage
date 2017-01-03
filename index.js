// Grab input form
const addItems = document.querySelector('.add-items');
// Grab list element
const itemsList = document.querySelector('.plates');
// Initialize list
const items = [];

function addItem(e) {
  // stop reload
  e.preventDefault();
  // Grab input
  const text = (this.querySelector('[name=item]')).value;
  // Add text to item object
  const item = {
    text,
    done: false
  }
  // Add input item to items array
  items.push(item);
  // Clear form
  this.reset();
}
// Listen for submit not click
addItems.addEventListener('submit', addItem);
