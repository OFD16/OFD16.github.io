function php_email_form_submit(thisForm, action, formData) {
  fetch(action, {
    method: 'POST',
    body: formData,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
  })
  .then(response => {
    if (response.ok) {
      return response.json(); // Get JSON response from Formspree
    } else {
      throw new Error(`${response.status} ${response.statusText} ${response.url}`);
    }
  })
  .then(data => {
    thisForm.querySelector('.loading').classList.remove('d-block');
    
    // Check if the response contains "next" URL
    if (data.ok && data.next) {
      window.location.href = data.next; // Redirect to the "thank you" page
    } else {
      thisForm.querySelector('.sent-message').classList.add('d-block');
      thisForm.reset(); 
    }
  })
  .catch((error) => {
    displayError(thisForm, error);
  });
}
