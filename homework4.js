// Program name: patient-form.html
// Author: Aditya Rajeshbhai Boghara
// Date created: 01/27/2025
// Date last edited: April 22nd 2025
// Version: 4.1
// Description: js file for the patient html form

function setup() {
  var error_flag = 0;
  console.log(error_flag);
}

function getTheData() {
  var formcontents = document.getElementById("form");
  var formoutput;
  var datatype;
  var i;
  formoutput =
    "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) {
    console.log(
      "item: " +
        i +
        " " +
        formcontents.elements[i].name +
        " = " +
        formcontents.elements[i].value
    );
    //if (formcontents.elements[i].value !="") {
    datatype = formcontents.elements[i].type;
    switch (datatype) {
      case "checkbox":
        if (formcontents.elements[i].checked) {
          formoutput =
            formoutput +
            "<tr><td align='right'>" +
            formcontents.elements[i].value +
            "</td>";
          formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
          formoutput = formoutput + "<td class='outputdata'>Checked</td></tr>";
        }
        break;
      case "radio":
        if (formcontents.elements[i].checked) {
          formoutput =
            formoutput +
            "<tr><td align='right'>" +
            formcontents.elements[i].name +
            "</td>";
          formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
          formoutput =
            formoutput +
            "<td class='outputdata'>" +
            formcontents.elements[i].value +
            "</td></tr>";
        }
        break;
      case "password":
        formoutput +=
          "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
        formoutput += "<td align='right'>" + datatype + "</td>";
        leng = formcontents.elements[i].value.length;
        formoutput +=
          "<td class='outputdata'>" + "*".repeat(leng) + "</td></tr>";
        break;
      case "button":
      case "submit":
      case "reset":
        formoutput =
          formoutput +
          "<tr><td align='right'>" +
          formcontents.elements[i].name +
          "</td>";
        formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
        formoutput =
          formoutput +
          "<td class='outputdata'>" +
          formcontents.elements[i].value +
          "</td></tr>";
        break;
      default:
        formoutput =
          formoutput +
          "<tr><td align='right'>" +
          formcontents.elements[i].name +
          "</td>";
        formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
        formoutput =
          formoutput +
          "<td class='outputdata'>" +
          formcontents.elements[i].value +
          "</td></tr>";
    }
  }

  if (formoutput.length > 0) {
    formoutput = formoutput + "</table>";
    document.getElementById("outputformdata").innerHTML = formoutput;
  }
}

function passwordentry() {
  let passwordInput = document.getElementById("password").value;
  let messageElement = document.getElementById("password_message1");
  let userID = document.getElementById("userId").value.toLowerCase();
  let messages = [];

  if (!/[a-z]/.test(passwordInput))
    messages.push("Enter at least 1 lowercase letter");
  if (!/[A-Z]/.test(passwordInput))
    messages.push("Enter at least 1 uppercase letter");
  if (!/[0-9]/.test(passwordInput)) messages.push("Enter at least 1 number");
  if (!/[!@#$%&*\-_\\.+()]/.test(passwordInput))
    messages.push("Enter at least 1 special character");
  if (passwordInput.length < 8)
    messages.push("Enter a minimum of 8 characters");

  if (passwordInput.toLowerCase().includes(userID)) {
    messages.push("Password cannot contain your User ID.");
  }

  messageElement.innerHTML =
    messages.length > 0
      ? messages.join("<br>")
      : "Password meets all requirements";
  messageElement.style.display = "block"; // Ensure the message element is visible
}

// Check that both passwords match
function checkpassword2() {
  x = document.getElementById("password").value;
  y = document.getElementById("confirmPassword").value;

  if (x == y) {
    document.getElementById("password2_text").innerHTML = "Passwords match!";
    document.getElementById("password2_text").style.color = "green";
  } else {
    document.getElementById("password2_text").innerHTML =
      "Passwords DO NOT match!";
    document.getElementById("password2_text").style.color = "red";
    error_flag = 1;
  }
}

function checkfirstname() {
  x = document.getElementById("firstName").value;
  if (x.length < 2) {
    document.getElementById("firstname_message").innerHTML =
      "Invalid firstname... too short.";
    error_flag = 1;
  } else {
    if (x.match(/[a-zA-Z3-5'-]+$/)) {
      document.getElementById("firstname_message").innerHTML = "";
    } else {
      document.getElementById("firstname_message").innerHTML =
        "Invalid characters in name.";
      error_flag = 1;
    }
  }
}
function checkmiddle() {
  x = document.getElementById("middleInitial").value;
  if (x.length > 0) {
    if (x.match(/[a-zA-Z ]/)) {
      document.getElementById("middlename_message").innerHTML = "";
    } else {
      document.getElementById("middlename_message").innerHTML =
        "Invalid characters in name.";
      error_flag = 1;
    }
  }
}
function checklastname() {
  x = document.getElementById("lastName").value;
  if (x.length < 2) {
    document.getElementById("lastname_message").innerHTML =
      "Invalid lastname... too short.";
    error_flag = 1;
  } else {
    if (x.match(/[a-zA-Z3-5'-]+$/)) {
      document.getElementById("lastname_message").innerHTML = "";
    } else {
      document.getElementById("lastname_message").innerHTML =
        "Invalid characters in name.";
      error_flag = 1;
    }
  }
}

function checkaddr1() {
  // x = document.getElementById("address1").value;
  // console.log(x.value);
  // console.log(x.length);
  // if (x.length < 2) {
  //   document.getElementById("address1_message").innerHTML =
  //     "Enter something on address line";
  //   error_flag = 1;
  //   console.log(error_flag);
  // } else {
  //   document.getElementById("addr1_message").innerHTML = "";
  // }

  let x = document.getElementById("address1").value.trim(); // Use trim to remove any leading/trailing spaces
  console.log(x);
  console.log(x.length);

  // Check if the address is too short
  if (x.length < 2) {
    // If the length is less than 2, show the error message
    document.getElementById("address1_message").innerHTML =
      "Enter something on address line";
    error_flag = 1;
    console.log(error_flag);
  } else {
    // Otherwise, clear the error message
    document.getElementById("address1_message").innerHTML = "";
  }
  // console.log(addr1_message);
}
function checkaddr2() {}

function checkcity() {
  if (document.getElementById("city").value.match(/^[ a-zA-Z3-5'-]+$/)) {
    document.getElementById("city_message").innerHTML = "";
  } else {
    document.getElementById("city_message").innerHTML =
      "Invalid characters in City name.";
    error_flag = 1;
  }
}
function checkstate() {
  z = document.getElementById("state").value;
  if (z == "") {
    document.getElementById("state_message").innerHTML =
      "Please choose a state";
    error_flag = 1;
  } else {
    document.getElementById("state_message").innerHTML = "";
  }
}

function checkuserid() {
  passwordentry();
  let inputElement = document.getElementById("userId");
  let messageElement = document.getElementById("userid_message");
  let inputValue = inputElement.value;
  let messages = [];

  // Ensure length is between 5 and 30 characters
  if (inputValue.length < 5 || inputValue.length > 30) {
    messages.push("User ID must be between 5 and 30 characters.");
  }

  // Ensure no spaces
  if (/\s/.test(inputValue)) {
    messages.push("No spaces allowed in User ID.");
  }

  // Ensure valid characters and first character is not a number
  if (!/^(?!\d)[a-zA-Z0-9_-]{4,29}$/.test(inputValue)) {
    messages.push(
      "Only letters, numbers (not as the first character), underscores, and dashes are allowed."
    );
  }
  // Convert to lowercase and update input field
  inputElement.value = inputValue.toLowerCase();

  // Display validation message
  messageElement.innerHTML =
    messages.length > 0 ? messages.join("<br>") : "User ID is valid.";
}

function validateDate(dateInput, type) {
  const dateValue = new Date(dob.value);
  const message = document.getElementById("dob_message");
  const today = new Date();
  let minDate, maxDate;

  if (type === "birthday") {
    minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 120);
    maxDate = today;
  }

  if (dateValue < minDate || dateValue > maxDate) {
    message.innerHTML = "Birthday cannot be in Future";
  } else {
    message.innerHTML = "";
  }
}

function isValidEmail() {
  const emailInput = document.getElementById("email");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailMessage = document.getElementById("email_message");

  if (!emailRegex.test(emailInput.value)) {
    emailMessage.innerHTML = "Email is inappropriate, please re-enter.";
    emailMessage.style.color = "red"; // Optional: Change color for visibility
  } else {
    emailMessage.innerHTML = "Email is valid!";
    emailMessage.style.color = "green"; // Optional: Change color for success
  }
}

function isValidPhoneNumber() {
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  const phone = document.getElementById("phone");
  const phoneMessage = document.getElementById("phone_message");

  if (!phoneRegex.test(phone.value)) {
    phoneMessage.innerHTML = "Phone Number is inappropriate, please re-enter.";
    phoneMessage.style.color = "red"; // Optional: Change color for visibility
  } else {
    phoneMessage.innerHTML = "Phone Number is valid!";
    phoneMessage.style.color = "green"; // Optional: Change color for success
  }
}

// Function to format the SSN as the user types (XXX-XX-XXXX)
function formatSSN(input) {
  // Remove all non-numeric characters
  let ssn = input.value.replace(/\D/g, "");

  // Ensure max length of 9 digits
  if (ssn.length > 9) {
    ssn = ssn.slice(0, 9);
  }

  // Format as XXX-XX-XXXX as the user types
  let formattedSSN = ssn.replace(
    /(\d{3})(\d{2})?(\d{0,4})?/,
    (match, p1, p2, p3) => {
      return p1 + (p2 ? "-" + p2 : "") + (p3 ? "-" + p3 : "");
    }
  );

  input.value = formattedSSN;

  // After formatting, apply the mask to hide all but the last 4 digits
  applyMask(input);
}

// Function to apply the mask after the SSN is formatted
function applyMask(input) {
  if (input) {
    // Apply the mask, ensuring that the value matches the ***-**-XXXX format
    input.value = maskSSN(input.value);
  }
}

// Function to mask SSN (hide all but the last 4 digits in the format ***-**-XXXX)
function maskSSN(ssn) {
  // Ensure input is in the expected format XXX-XX-XXXX (numeric format)
  if (!/^\d{3}-\d{2}-\d{4}$/.test(ssn)) {
    throw new Error("Invalid SSN format. Expected format: XXX-XX-XXXX");
  }

  // Mask all but the last 4 digits
  return "***-**-" + ssn.slice(-4);
}

function checkform() {
  error_flag = "0";
  checkfirstname();
  checkmiddle();
  checklastname();
  checkaddr1();
  checkaddr2();
  checkcity();
  checkstate();
  isValidEmail();
  isValidPhoneNumber();
  checkuserid();
  passwordentry();
  console.log("Error flag: " + error_flag);
  if (error_flag == "1") {
    alert("Please fix the indicated errors!");
    document.getElementById("submitButton").disabled = true;
  } else {
    document.getElementById("submitButton").disabled = false;
  }
}

function submitForm() {
  if (checkform()) {
    window.location.href = "thank-you.html";
  }
}

function setCookie(name, value, hours) {
  const d = new Date();
  d.setTime(d.getTime() + hours * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(name + "=") === 0) {
      return c.substring(name.length + 1);
    }
  }
  return "";
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function checkUserCookie() {
  const user = getCookie("firstName");
  const welcomeEl = document.getElementById("welcomeMessage");
  const inputEl = document.getElementById("firstName");
  const optionEl = document.getElementById("newUserOption");

  if (user !== "") {
    welcomeEl.textContent = `Welcome back, ${user}`;
    inputEl.value = user;

    optionEl.innerHTML = `
          <label>
            <input type="checkbox" id="resetUser" onchange="resetToNewUser('${user}')">
            Not ${user}? Click HERE to start as a NEW USER.
          </label>
        `;
  } else {
    welcomeEl.textContent = "Hello New User!";
  }
}

function resetToNewUser(user) {
  const inputEl = document.getElementById("firstName");
  const checkbox = document.getElementById("resetUser");

  if (checkbox.checked) {
    deleteCookie("firstName");
    inputEl.value = "";
    location.reload();
  }
}

function handleFormSubmit() {
  const name = document.getElementById("firstName").value.trim();
  const remember = document.getElementById("rememberMe").checked;

  if (remember) {
    setCookie("firstName", name, 48); // 48 hours
  } else {
    deleteCookie("firstName");
  }

  return true; // allow form to submit
}
