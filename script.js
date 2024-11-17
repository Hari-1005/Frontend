// Get all the boxes
const boxes = document.querySelectorAll('.box');

// Get the total price element
const totalPriceElement = document.querySelector('.total-price');

// Function to update the UI
function updateUI() {
    boxes.forEach(box => {
        const radioButton = box.querySelector('input[type="radio"]');

        if (!radioButton) {
            console.error(`No radio button found inside box: ${box}`);
            return;
        }

        // Check if the radio button is checked
        if (radioButton.checked) {
            // Hide all secound-sections
            document.querySelectorAll('.secound-section').forEach(section => {
                section.style.display = 'none';
            });

            // Show the secound-section -> table
            const secoundSection = box.querySelector('.secound-section');

            if (!secoundSection) {
                console.error(`No secound-section found inside box: ${box}`);
                return;
            }

            secoundSection.style.display = 'block';

            // Get the price from the data-price attribute of the clicked box
            const priceString = box.getAttribute('data-price');

            if (!priceString) {
                console.error(`No data-price attribute found on box: ${box}`);
                return;
            }

            const price = parseFloat(priceString);

            if (isNaN(price)) {
                console.error(`Invalid price found on box: ${box}`);
                return;
            }

            // Update the total price dynamically
            totalPriceElement.textContent = `Total: $${price.toFixed(2)} USD`;

            // Add the 'selected' class to the clicked box
            box.classList.add('selected');
        } else {
            // Remove the 'selected' class from the box if the radio is not checked
            box.classList.remove('selected');
        }
    });
}

// Add event listener to each box
boxes.forEach(box => {
    box.addEventListener('click', function () {
        // Find the radio button inside the clicked box
        const radioButton = box.querySelector('input[type="radio"]');

        if (!radioButton) {
            console.error(`No radio button found inside box: ${box}`);
            return;
        }

        // Check the radio button
        radioButton.checked = true;

        // Call updateUI to show the table and update the border color
        updateUI();
    });
});

// Set initial state on page load
document.addEventListener('DOMContentLoaded', updateUI);


// if you find any issues or have suggestions for improvement, please don't hesitate to reach out to me.
// contact details : 
// My name : kasani Hariteja,
// gmail id: hariteja.in@gmail.com

