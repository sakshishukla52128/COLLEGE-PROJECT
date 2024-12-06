// Function to show the appropriate form based on the button clicked
function showForm(formId) {
    // Hide all forms
    const forms = document.querySelectorAll('.form-content');
    forms.forEach(form => {
        form.style.display = 'none';
    });

    // Show the selected form
    const formToShow = document.getElementById(formId);
    if (formToShow) {
        formToShow.style.display = 'block';
    }
}

// QR Code scanning function
function scanQRCode(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const qrCodeImg = e.target.result;
        const qrCodeImgElement = document.createElement('img');
        qrCodeImgElement.src = qrCodeImg;
        qrCodeImgElement.style.width = '100%';
        qrCodeImgElement.style.height = 'auto';

        // Show the QR code image
        const qrCodeContainer = document.querySelector('.form-content#student-registration');
        qrCodeContainer.appendChild(qrCodeImgElement);
    };
    reader.readAsDataURL(file);
}

// Form submission handling for student registration
document.querySelector('#student-registration form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Student registration form submitted!');
});

// Form submission handling for student login
document.querySelector('#student-login form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Student login form submitted!');
});

// Form submission handling for company registration
document.querySelector('#company-registration form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Company registration form submitted!');
});

// Form submission handling for company login
document.querySelector('#company-login form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Company login form submitted!');
});
function showForm(formId) {
    const forms = document.querySelectorAll('.form-content');
    forms.forEach(form => form.style.display = 'none');
    document.getElementById(formId).style.display = 'block';
}

function displayQRCode(event) {
    const qrCodeInput = event.target;
    const qrCodePreview = document.getElementById('qr-code-preview');
    const deleteQRCodeButton = document.getElementById('delete-qr-code');

    if (qrCodeInput.files && qrCodeInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            qrCodePreview.src = e.target.result;
            qrCodePreview.style.display = 'block';
            deleteQRCodeButton.style.display = 'inline'; // Show delete button
        }
        reader.readAsDataURL(qrCodeInput.files[0]);
    }
}

function deleteQRCode() {
    const qrCodeInput = document.getElementById('qr-code');
    const qrCodePreview = document.getElementById('qr-code-preview');
    const deleteQRCodeButton = document.getElementById('delete-qr-code');

    qrCodeInput.value = ''; // Clear the input
    qrCodePreview.style.display = 'none'; // Hide the preview
    deleteQRCodeButton.style.display = 'none'; // Hide the delete button
}