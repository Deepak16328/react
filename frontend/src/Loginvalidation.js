function validation(values) {
  let error = {};

  // Email validation pattern
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Email validation
  if (values.email === "") {
    error.email = 'Email should not be empty';
  } else if (!email_pattern.test(values.email)) {
    error.email = "Please enter a valid email format";
  }

  // Password validation
  if (values.password === "") {
    error.password = 'Password should not be empty';
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password is incorrect";
  }

  return error;
}

export default validation;
