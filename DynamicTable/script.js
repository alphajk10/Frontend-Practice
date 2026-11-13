
const addButton = document.getElementById("addButton");

const nameInput = document.getElementById("studentName");
const courseInput = document.getElementById("studentCourse");
const ageInput = document.getElementById("studentAge");

const studentTable = document.getElementById("studentTable");

// Add student when button is clicked
addButton.addEventListener("click", function() {

    const name = nameInput.value.trim();
    const course = courseInput.value.trim();
    const age = ageInput.value.trim();

    // Check empty fields
    if (name === "" || course === "" || age === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Check age
    if (Number(age) <= 0 || !Number.isInteger(Number(age))) {
        alert("Please enter a valid age!");
        return;
    }

    // Create a new table row
    const row = document.createElement("tr");

    // Add student details to the row
    row.innerHTML = `
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Safely insert the user-provided values
    row.cells[1].textContent = name;
    row.cells[2].textContent = course;
    row.cells[3].textContent = age;

    // Add the row to the table
    studentTable.appendChild(row);

    // Update serial numbers
    updateSerialNumbers();

    // Clear input fields
    nameInput.value = "";
    courseInput.value = "";
    ageInput.value = "";

});

// Remove a row when Delete is clicked
studentTable.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete-btn")) {

        const row = event.target.closest("tr");

        row.remove();

        updateSerialNumbers();
    }

});

// Update table serial numbers
function updateSerialNumbers() {

    const rows = studentTable.querySelectorAll("tr");

    rows.forEach(function(row, index) {
        row.cells[0].textContent = index + 1;
    });

}
