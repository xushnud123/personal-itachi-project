'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 hidden h-16 w-1 rounded-full bg-gray-300 dark:bg-opacity-20 sm:block"
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    />
  );
}
