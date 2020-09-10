const ValidateEmail = (text) => {
  let error = '';
  text = text.trim();
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (text === '') {
    error = 'Field is required';
  } else if (reg.test(text) === false) {
    error = 'Invalid email format';
  } else {
    error = '';
  }
  return error;
};

const ValidatePassword = (text) => {
  let error = '';
  if (text === '') {
    error = 'Field is required';
  } else if (text.length < 8) {
    error = 'Passwords must be at least 8 characters in length';
  } else {
    error = '';
  }
  return error;
};

const ValidateEmpty = (text) => {
  let error = '';
  if (text === '') {
    error = 'Field is required';
  }
  return error;
};

export default {
  ValidateEmail,
  ValidatePassword,
  ValidateEmpty,
};
