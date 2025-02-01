import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setEmail } from "../../../Store/coursesList";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmailState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(setEmail(email));
      console.log("Logging in with", { email, password });
    } else {
      dispatch(setEmail(email));
      console.log("Signing up with", { email, password, confirmPassword });
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigate("/");
  };

  return (
    <div
      className={`flex justify-center items-center h-screen transition-colors duration-500 ${
        isLogin ? "bg-blue-100" : "bg-green-100"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-96 p-6 shadow-lg rounded-2xl bg-white"
      >
        <motion.h2
          key={isLogin ? "login" : "signup"}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold mb-4 text-center"
        >
          {isLogin ? "Login" : "Sign Up"}
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmailState(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none "
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none "
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none "
            />
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </motion.button>
        </form>
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-500"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </motion.button>
        </p>
      </motion.div>
    </div>
  );
}
