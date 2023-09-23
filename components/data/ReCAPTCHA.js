const handleSubmit = (event) => {
  event.preventDefault();
  // Execute the reCAPTCHA when the form is submitted
  recaptchaRef.current.execute();
};

const onReCAPTCHAChange = (captchaCode) => {
  // If the reCAPTCHA code is null or undefined indicating that
  // the reCAPTCHA was expired then  return early
  if (!captchaCode) {
    return;
  }
  // Else reCAPTCHA was executed successfully so proceed with the
  // alert
  alert(`Hey, ${email}`);
  // Reset the reCAPTCHA so that it can be executed again if user
  // submits another email.
  recaptchaRef.current.reset();
};
