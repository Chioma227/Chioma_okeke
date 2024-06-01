import { ReactNode, ReactComponentElement } from "react";
import { motion } from "framer-motion";
interface Lprops {
  children: ReactNode | ReactComponentElement<any, any>[];
}

const Layout = ({ children }: Lprops) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
