
const form = document.querySelector("#ticketForm");
const personType = document.querySelector("#personType");
const iNumberContainer = document.querySelector("#iNumberContainer");
const accessCodeContainer = document.querySelector("#accessCodeContainer");
const iNumber = document.querySelector("#iNumber");
const accessCode = document.querySelector("#accessCode");
const output = document.querySelector("#output");

function updateInputField() {
  const value = personType.value;

  const isStudent = value === "student";
  const isGuest = value === "guest";

  iNumberContainer.hidden = !isStudent;
  iNumber.required = isStudent;
  if (!isStudent) {
    iNumber.value = "";
  }

  accessCodeContainer.hidden = !isGuest;
  accessCode.required = isGuest;
  if (!isGuest) {
    accessCode.value = "";
  }
}

personType.addEventListener("change", updateInputField);
updateInputField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const selectedPersonType = form.personType.value;
  const eventDate = form.eventDate.value;
  const iNumber = form.iNumber.value.trim();
  const accessCode = form.accessCode.value.trim();

  if (selectedPersonType === "student") {
    if (iNumber.length === 0) {
      output.textContent = "Please enter your I Number.";
      return;
    }

    if (!/^\d{9}$/.test(iNumber)) {
      output.textContent = "An I Number should be 9 digits.";
      return;
    }
  }

  if (selectedPersonType === "guest") {
    if (accessCode.length === 0) {
      output.textContent = "Please enter your Access Code.";
      return;
    }

    if (accessCode !== "EVENT131") {
      output.textContent = "Incorrect Access Code. Please try again.";
      return;
    }
  }

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Date: ${eventDate}</p>
  <p>Ticket Type: ${selectedPersonType}</p>
  `;

  form.reset();
  updateInputField();
});
          