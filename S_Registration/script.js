
// Select the registration form

const form = document.getElementById("registrationForm");


// Listen for form submission

form.addEventListener("submit", function(event) {

    // Prevent normal form submission

    event.preventDefault();


    // Get input values

    const name = document.getElementById("fullname").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const dob = document.getElementById("dob").value;

    const course = document.getElementById("course").value;

    const college = document.getElementById("college").value.trim();

    const year = document.getElementById("year").value;

    const address = document.getElementById("address").value.trim();

    const district = document.getElementById("district").value.trim();

    const pin = document.getElementById("pin").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;


    // Get gender

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );


    // Reset old error messages

    document.querySelectorAll(".error").forEach(function(error) {

        error.innerText = "";

    });


    // Reset old input styles

    document.querySelectorAll("input, select, textarea").forEach(function(field) {

        field.classList.remove("input-error", "input-success");

    });


    // Hide old success message

    document.getElementById("successMessage").innerText = "";


    // Track validation result

    let isValid = true;


    // Helper function to display errors

    function showError(fieldId, errorId, message) {

        document.getElementById(errorId).innerText = message;

        document.getElementById(fieldId).classList.add("input-error");

        isValid = false;

    }


    // 1. Validate name

    if (name === "") {

        showError("fullname", "nameError", "Name is required.");

    }


    // 2. Validate email

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        showError("email", "emailError", "Enter a valid email address.");

    }


    if (email === "") {

        showError("email", "emailError", "Email is required.");

    }


    // 3. Validate phone

    if (!/^[0-9]{10}$/.test(phone)) {

        showError("phone", "phoneError", "Enter a valid 10 digit phone number.");

    }


    // 4. Validate date of birth

    if (dob === "") {

        document.getElementById("dobError").innerText =
            "Date of birth is required.";

        document.getElementById("dob").classList.add("input-error");

        isValid = false;

    } else if (dob > new Date().toISOString().split("T")[0]) {

        document.getElementById("dobError").innerText =
            "Date of birth cannot be in the future.";

        document.getElementById("dob").classList.add("input-error");

        isValid = false;

    }


    // 5. Validate gender

    if (!gender) {

        document.getElementById("genderError").innerText =
            "Please select your gender.";

        isValid = false;

    }


    // 6. Validate course

    if (course === "") {

        showError("course", "courseError", "Please select a course.");

    }


    // 7. Validate college

    if (college === "") {

        showError("college", "collegeError", "College name is required.");

    }


    // 8. Validate year

    if (year === "") {

        showError("year", "yearError", "Please select your year.");

    }


    // 9. Validate address

    if (address === "") {

        showError("address", "addressError", "Address is required.");

    }


    // 10. Validate district

    if (district === "") {

        showError("district", "districtError", "District is required.");

    }


    // 11. Validate PIN code

    if (!/^[0-9]{6}$/.test(pin)) {

        showError("pin", "pinError", "Enter a valid 6 digit PIN code.");

    }


    // 12. Validate password

    if (password.length < 8) {

        showError(
            "password",
            "passwordError",
            "Password must contain at least 8 characters."
        );

    }


    // 13. Confirm password

    if (confirmPassword === "") {

        showError(
            "confirmPassword",
            "confirmPasswordError",
            "Please confirm your password."
        );

    }

    else if (password !== confirmPassword) {

        showError(
            "confirmPassword",
            "confirmPasswordError",
            "Passwords do not match."
        );

    }


    // 14. Validate terms

    if (!document.getElementById("terms").checked) {

        document.getElementById("termsError").innerText =
            "Please accept the terms and conditions.";

        isValid = false;

    }


    // Final result

    if (isValid) {

        document.getElementById("successMessage").innerText =
            "Registration Successful!";

        alert("Student registered successfully!");

        form.reset();

    }

});


// Clear errors when the user resets the form

form.addEventListener("reset", function() {

    setTimeout(function() {

        document.querySelectorAll(".error").forEach(function(error) {

            error.innerText = "";

        });

        document.querySelectorAll("input, select, textarea").forEach(function(field) {

            field.classList.remove("input-error", "input-success");

        });

        document.getElementById("successMessage").innerText = "";

    }, 0);

});
