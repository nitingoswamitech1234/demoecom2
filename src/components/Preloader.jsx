import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="w-full fixed inset-0 bg-white flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.img
            src="/lawfirm.webp"
            alt="Logo"
            className="w-38 h-28 drop-shadow-xl"
            initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
            animate={{
              scale: [0.5, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: 1,
            }}
            exit={{
              scale: 0.5,
              opacity: 0,
              y: -100,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
