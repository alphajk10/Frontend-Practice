
const loadButton = document.getElementById("loadButton");

const userContainer = document.getElementById("userContainer");

const message = document.getElementById("message");

// Fetch data when button is clicked
loadButton.addEventListener("click", async function() {

    try {

        message.textContent = "Loading user data...";
        userContainer.innerHTML = "";
        loadButton.disabled = true;

        // Fetch data from API
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Check whether request was successful
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        // Convert response into JSON
        const users = await response.json();

        // Display the fetched users
        displayUsers(users);

        message.textContent = "Users loaded successfully!";

    } catch (error) {

        message.textContent = "Error: " + error.message;

    } finally {

        loadButton.disabled = false;

    }

});

// Function to display users
function displayUsers(users) {

    users.forEach(function(user) {

        // Create a new card
        const card = document.createElement("div");

        card.className = "user-card";

        // Create card content
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = "Email: " + user.email;

        const city = document.createElement("p");
        city.textContent = "City: " + user.address.city;

        const company = document.createElement("p");
        company.textContent = "Company: " + user.company.name;

        // Add content to card
        card.appendChild(heading);
        card.appendChild(email);
        card.appendChild(city);
        card.appendChild(company);

        // Add card to webpage
        userContainer.appendChild(card);

    });

}
