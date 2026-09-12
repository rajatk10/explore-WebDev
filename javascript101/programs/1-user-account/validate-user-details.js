// A program to validate the user details which are entered by the user in the form field.
// The user details should be validated using the following rules:
// 1. The phone number should be of 10 digits and should start with 6, 7, 8 or 9.
// 2. The first name should not be a number.
// 3. The last name should not be a number.
// 4. The email should be a valid email address.
// If the user details are valid, then show a message "User details are valid".
// If the user details are invalid, then show a message "User details are invalid".

function validatePhone(phone) {
    if (phone.length !== 10) {
        return false;
    }
    if (phone[0] !== '6' && phone[0] !== '7' && phone[0] !== '8' && phone[0] !== '9') {
        return false;
    }
    for (let i = 0; i < phone.length; i++) {
        if (isNaN(phone[i])) {
            return false;
        }
        if (phone[i] < '0' || phone[i] > '9') {
            return false;
        }
    }
    return true;
}
// This is where we add event listener to the phone input field.
// DOM - document object model - is a programming interface for HTML and XML documents.

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateFirstName(firstName) {
    if (isNaN(firstName)) {
        return true;
    }
    return false;
}

function validateLastName(lastName) {
    if (isNaN(lastName)) {
        return true;
    }
    return false;
}
function setStatus(element, status) {
    const el = document.getElementById(element);
    const row = el.parentElement;
    el.textContent = status ? 'Valid' : 'Invalid';
    el.classList.remove('is-valid', 'is-invalid');
    el.classList.add(status ? 'is-valid' : 'is-invalid');
    if (!status) {
        row.classList.remove('is-hidden');
    } else {
        row.classList.add('is-hidden');
    }
}
async function postUserDetails(phone, firstName, lastName, email) {
    const response = await fetch('http://localhost:4141/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone, firstName, lastName, email })
    });
    if (response.status !== 201) {
        console.error('Failed to post user details');
        throw new Error('Failed to post user details');
    }
    return response.json();
}

document.getElementById('personal-details-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const phone = document.getElementById('phone').value.trim();
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    setStatus('first-name-status', validateFirstName(firstName));
    setStatus('last-name-status', validateLastName(lastName));
    setStatus('email-status', validateEmail(email));
    setStatus('phone-status', validatePhone(phone));
    const allValid = validatePhone(phone) && validateFirstName(firstName) && validateLastName(lastName) && validateEmail(email);
    //setStatus('all-details-status', allValid);
    const summary = document.getElementById('all-details-status');
    const summaryRow = summary.parentElement;
    summaryRow.classList.remove('is-hidden',"is-valid","is-invalid");
    summary.classList.remove('is-valid', 'is-invalid');

    if (allValid) {
        // summary.textContent = 'Form submitted successfully';
        // summaryRow.classList.add('is-valid');
        try {
            const _ =  postUserDetails(phone, firstName, lastName, email);
            summary.textContent = 'Form submitted successfully';
            summaryRow.classList.add('is-valid');
        } catch (error) {
            console.error('Error posting user details:', error);
            summary.textContent = 'Form submission failed';
            summaryRow.classList.add('is-invalid');
            return;
        }
    } else {
        summary.textContent = 'Form submission failed';
        summaryRow.classList.add('is-invalid');
    }
});