export const checkvalidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (!isEmailValid) return "Email not valid";
  if (!isPasswordValid) return "Password not valid";

  return null;
};
