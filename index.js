// Grab input form
const addItems = document.querySelector('.add-items');
// Grab list element
const itemsList = document.querySelector('.plates');
// Initialize list with localStorage or blank array
const items = JSON.parse(localStorage.getItem('items')) || [];

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
  // Populate list element with items
  populateList(items, itemsList);
  // Convert from objects and save
  localStorage.setItem('items', JSON.stringify(items));
  // Clear form
  this.reset();
}

function populateList(plates = [], platesList) {
  // Map over plates and create li for each
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
    // Create one string of li's
  }).join('');
}

function toggleDone(e) {
  // Skip if not input click
  if (!e.target.matches('input')) return;
  // Grab target element
  const el = e.target;
  // Get index from element
  const index = el.dataset.index;
  // Toggle done status
  items[index].done = !items[index].done;
  // Convert from objects and save
  localStorage.setItem('items', JSON.stringify(items));
  // Update list
  populateList(items, itemsList);
}

// Listen for submit not click
addItems.addEventListener('submit', addItem);
// Listen for checkbox on parent because item may not exist when listeners added
itemsList.addEventListener('click', toggleDone);

// Show list
populateList(items, itemsList);
