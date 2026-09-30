"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "./BrandIcons";
import { CONTACT } from "./contact";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar no WhatsApp ${CONTACT.whatsappDisplay} (abre em nova aba)`}
      title={`WhatsApp ${CONTACT.whatsappDisplay}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed right-5 bottom-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.6)] transition-shadow hover:shadow-[0_8px_40px_-4px_rgba(37,211,102,0.8)]"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </motion.a>
  );
}
