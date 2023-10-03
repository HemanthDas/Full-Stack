const data = require("../data.json");
const userPass = (details) => {
  const found = data.find(({ email, password }) => {
    return email === details.email && password === details.password;
  });
  console.log(found);
  return !!found;
};
const userExists = (email) => {
  return data.some((user) => user.email === email);
};
module.exports = { userPass, userExists };
