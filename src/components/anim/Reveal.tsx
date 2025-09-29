import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ delay?: number; y?: number }>;

export default function Reveal({ children, delay = 0.1, y = 20 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
