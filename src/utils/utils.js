import axios from "axios";

/**
 *
 * Insert user information on Database
 */
const insertUserOnDB = async (name, email) => {
  const user = { name, email };
  return await axios
    .post("http://localhost:5000/users", user)
    .then((res) => res);
};

export { insertUserOnDB };
