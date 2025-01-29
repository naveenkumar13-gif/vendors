import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-lg z-50">
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="w-5 h-5 bg-blue-500 rounded-full"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.span
          className="w-5 h-5 bg-green-500 rounded-full"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.span
          className="w-5 h-5 bg-red-500 rounded-full"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
