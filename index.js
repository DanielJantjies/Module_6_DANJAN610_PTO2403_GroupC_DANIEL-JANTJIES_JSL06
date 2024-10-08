// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');
    if (!menuContainer) {
        console.error('Menu Container Not Found');
        return;
    }


    // Loop through each category and its items in the menu object
    for (const category in menu) {

        // Create an element to represent the category
        // Set the text content of the category element to the category name
        // Append the category element to the menu container

    const categoryElement = document.createElement('h3');
    categoryElement.textContent = category;
    menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items

    const itemsList = document.createElement('ul');

        // Loop through the items in the category and create list items

    menu[category].forEach(item => {

            // Create a list item element
            // Set the text content of the list item element to the item name

    const listItem = document.createElement('li');
    listItem.textContent = item; 

            // Attach a click event listener to the list item to add it to the order
            // Append the list item to the list of items to the menu container
    listItem.addEventListener('click', () => addToOrder(item)); 
    itemsList.appendChild(listItem);
    });
     
    menuContainer.appendChild(itemsList);

  }      
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItems = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');


    // Create a list item for the order
    // Set the text content of the list item to the item name

    const orderItem = document.createElement('li');
    orderItem.textContent = itemName;

    // Append the list item to the order items list

    orderItems.appendChild(orderItem);

    // Calculate and update the total price
    const price = 30.00;
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const newTotal = currentTotal + price;

    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
