
const fetchButton = document.getElementById("fetchButton");

const message = document.getElementById("message");

const userContainer = document.getElementById("userContainer");

fetchButton.addEventListener("click", async function() {

    try {

        // Show loading message
        message.textContent = "Loading data...";
        message.className = "";

        userContainer.innerHTML = "";

        fetchButton.disabled = true;

        // Send API request
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        // Check HTTP response
        if (!response.ok) {
            throw new Error(
                "HTTP Error: " + response.status
            );
        }

        // Convert response into JSON
        const user = await response.json();

        // Display user details
        const card = document.createElement("div");

        card.className = "user-card";

        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = "Email: " + user.email;

        const city = document.createElement("p");
        city.textContent = "City: " + user.address.city;

        card.appendChild(heading);
        card.appendChild(email);
        card.appendChild(city);

        userContainer.appendChild(card);

        message.textContent = "Data fetched successfully!";
        message.className = "success";

    }

    catch (error) {

        // Handle API errors
        message.textContent = "Something went wrong: " + error.message;

        message.className = "error";

        console.error("API Error:", error);

    }

    finally {

        // Always execute this block
        fetchButton.disabled = false;

    }

});
