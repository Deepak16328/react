function validation(values) {
  let error = {};

  // Email validation pattern
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (values.name === "") {
    error.name = "Name should not be empty";
  }

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Please enter a valid email format";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password must be at least 8 characters and include at least one letter and one number";
  }

  return error;
}

export default validation;

