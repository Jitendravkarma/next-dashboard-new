export const handleChange = (e, currentState, stateUpdater) => {
  const { name, value } = e.target;
  stateUpdater({ ...currentState, [name]: value });
};


export const validatePurchaseCode = (value) => {
  if (!value) {
    return "Please enter a Purchase Code";
  }
  return false;
};

export const validateEmail = (email) => {
  const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (!email) {
    return "Email is required";
  }
  else if (email.length < 10 || email.length > 40) {
    return "Email must be between 10 and 40 characters";
  } else if (!validEmail.test(email)) {
    return "Invalid Email";
  }
  return false;
};

export const validatePassword = (password) => {
  if (password.length < 8 || password.length > 50) {
    return "Password must be between 8 and 50 characters";
  }
  return false;
};

export const validateName = (name) => {
  const nameVal = /^[a-zA-Z ]{2,30}$/
  if (!name) {
    return "Name is required";
  } else if (!nameVal.test(name)) {
    return "Please enter a valid Name";
  }
  return false;
};
export const validateVerificationCode = (value) => {
  if (!value) {
    return "Verification Code is required";
  }
  return false;
};
export const validateConfiremPass = (password, confirmPass) => {
  // console.log("confirmPass", confirmPass);
  if (!confirmPass) {
    return "Confirm Password Required";
  } else if (password !== confirmPass) {
    return "Password and Confirm Password Must be Same";
  }
  return false;
};

export const validateQuery = (query) => {
  if (!query) {
    return "Any Keyword Required";
  } 
  // else if (query.includes(",")) {
  //   return "Please search with a single keyword.";
  // }
  return false;
};


export const validateCountry = (query) => {
  if (!query) {
    return "Please Enter Your Contry Name";
  }
  return false;
};

export const validateCity = (query) => {
  if (!query) {
    return "Please Enter Your City Name";
  }
  return false;
};

export const validateContact = (query) => {
  if (!query) {
    return "Please Enter Your Contact Number";
  }
  return false;
};

export const capitalizeFirstLetter = (string) => {
  if (typeof string !== "string" || string.length === 0) {
    return string; // Return as is for non-string inputs or empty strings
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};