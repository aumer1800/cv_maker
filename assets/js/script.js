window.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements for the form inputs (only if on form page)
    const firstNameInput = document.querySelector('.fname');
    const lastNameInput = document.querySelector('.lname');
    const descriptionInput = document.querySelector('.description_area');
    const dateInput = document.querySelector('#date');
    const cityInput = document.querySelector('#city');
    const countryInput = document.querySelector('#country');
    const nationalityInput = document.querySelector('#nationality');
    const phoneInput = document.querySelector('#phone_number');
    const emailInput = document.querySelector('#email');
    const addressInput = document.querySelector('#address');
    const genderInput = document.querySelector('#gender');
    const qualificationInput = document.querySelector('#qualification');
    const id = document.querySelector('#id');
    const imageInput = document.querySelector('#image');
    const submitBtn = document.querySelector('#submit');

    // Submit button handler
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent form submission

            // Save form input values to localStorage
            localStorage.setItem('fname', firstNameInput.value);
            localStorage.setItem('lname', lastNameInput.value);
            localStorage.setItem('description_area', descriptionInput.value);
            localStorage.setItem('date', dateInput.value);
            localStorage.setItem('city', cityInput.value);
            localStorage.setItem('country', countryInput.value);
            localStorage.setItem('nationality', nationalityInput.value);
            localStorage.setItem('phone_number', phoneInput.value);
            localStorage.setItem('email', emailInput.value);
            localStorage.setItem('address', addressInput.value);
            localStorage.setItem('gender', genderInput.value);
            localStorage.setItem('id', id.value);
            localStorage.setItem('qualification', qualificationInput.value);

            const selectedFile = imageInput.files[0];

            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    localStorage.setItem('image', event.target.result); // Save image as base64
                    window.location.href = './cv.html'; // Redirect after image is saved
                };
                reader.readAsDataURL(selectedFile);
            } else {
                // No image selected, just redirect
                window.location.href = './cv.html';
            }
        });
    }

    // If on the CV page, populate data
    const nameData = document.querySelector('#name_data');
    if (nameData) {
        const firstName = localStorage.getItem('fname') || '';
        const lastName = localStorage.getItem('lname') || '';
        const description = localStorage.getItem('description_area') || '';
        const date = localStorage.getItem('date') || '';
        const city = localStorage.getItem('city') || '';
        const country = localStorage.getItem('country') || '';
        const nationality = localStorage.getItem('nationality') || '';
        const phone = localStorage.getItem('phone_number') || '';
        const email = localStorage.getItem('email') || '';
        const address = localStorage.getItem('address') || '';
        const gender = localStorage.getItem('gender') || '';
        const id = localStorage.getItem('id') || '';
        const qualification = localStorage.getItem('qualification') || '';
        const image = localStorage.getItem('image');

        // Populate text fields
        nameData.innerText = `${firstName} ${lastName}`;
        document.querySelector('#birth_data').innerText = `D.O.B: ${date}`;
        document.querySelector('#place_data').innerText = `Place of Birth: ${city}, ${country}`;
        document.querySelector('#nationality_data').innerText = `Nationality: ${nationality}`;
        document.querySelector('#gender_data').innerText = `Gender: ${gender}`;
        document.querySelector('#number_data').innerText = `Phone number: ${phone}`;
        document.querySelector('#email_data').innerText = `Email: ${email}`;
        document.querySelector('#address_data').innerText = `Address: ${address}`;
        document.querySelector('#id_data').innerText = `ID: ${id}`;
        document.querySelector('#description').innerText = `${description}`;
        document.querySelector('#qualification_data').innerText = `Qualification: ${qualification}`;

        // Populate image once, then remove from localStorage
        const imageElem = document.querySelector('#image_data');
        if (imageElem) {
            if (image) {
                imageElem.src = image;
                localStorage.removeItem('image'); // ✅ Remove after displaying
            } else {
                imageElem.src = ''; // Clear image if not found
            }
        }
    }
});
