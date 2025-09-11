document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Error messages
    const nameError = nameInput.nextElementSibling;
    const emailError = emailInput.nextElementSibling;
    const subjectError = subjectInput.nextElementSibling;
    const messageError = messageInput.nextElementSibling;
    
    // Form messages
    const successMessage = document.querySelector('.form-message.success');
    const errorMessage = document.querySelector('.form-message.error');
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validate name
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            return false;
        } else {
            nameError.style.display = 'none';
            return true;
        }
    }
    
    // Validate email
    function validateEmail() {
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }
    
    // Validate subject
    function validateSubject() {
        if (subjectInput.value.trim() === '') {
            subjectError.style.display = 'block';
            return false;
        } else {
            subjectError.style.display = 'none';
            return true;
        }
    }
    
    // Validate message
    function validateMessage() {
        if (messageInput.value.trim() === '') {
            messageError.style.display = 'block';
            return false;
        } else {
            messageError.style.display = 'none';
            return true;
        }
    }
    
    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    subjectInput.addEventListener('blur', validateSubject);
    messageInput.addEventListener('blur', validateMessage);
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            // Simulate form submission
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                subject: subjectInput.value,
                message: messageInput.value
            };
            
            // In a real application, you would send the data to a server here
            console.log('Form submitted:', formData);
            
            // Show success message
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            // Show error message
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            
            // Hide error message after 5 seconds
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 5000);
        }
    });
});