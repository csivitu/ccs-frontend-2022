export const constants = {
  vitEmailRegex:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((vitstudent.ac.in)|(vit.ac.in))$/,
  passwordRegex: /^[a-zA-Z0-9`!@#$%^&*()-/:'.,{}_"~]{8,50}$/, // 8-50 characters,
  regNoRegex: /^\d\d[A-Z]{3}[0-9]{4}$/,
  usernameRegex: /^[a-zA-Z0-9`!@#$%^&*()-/:'.,{}_"~]{3,20}$/,
};

export const validateData = ({
  username = false,
  email = false,
  password = false,
  passwordConfirmation = false,
  regNo = false,
  gender = false,
}) => {
  let responseMessage = [];

  if (username && !constants.usernameRegex.test(username)) {
    responseMessage.push("Invalid Username.");
  }

  if (email && !constants.vitEmailRegex.test(email)) {
    responseMessage.push("Invalid VIT Email Address.");
  }

  if (password && !constants.passwordRegex.test(password)) {
    responseMessage.push("Invalid Password.");
  }

  if (passwordConfirmation && passwordConfirmation !== password) {
    responseMessage.push("Password and Confirm Password do not match.");
  }

  if (regNo && !constants.regNoRegex.test(regNo)) {
    responseMessage.push("Invalid Registration Number.");
  }

  if (gender && gender !== "M" && gender !== "F") {
    responseMessage.push("Invalid Gender");
  }

  const responseText = responseMessage.join(" ");

  return {
    success: !responseText,
    message: responseText,
  };
};