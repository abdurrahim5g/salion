/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { AuthContex } from "../context/AuthProvider";

const useAuthContex = () => useContext(AuthContex);

export default useAuthContex;
