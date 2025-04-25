import { motion } from 'framer-motion';

// Create a safer motion div component that properly handles prop forwarding
export const MotionDiv = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

// Create a safer motion image component
export const MotionImage = ({ src, alt, className, ...props }) => {
  return (
    <motion.div {...props}>
      <img src={src} alt={alt || 'Image'} className={className} />
    </motion.div>
  );
};

// Create a motion link component
export const MotionLink = ({ href, target, rel, className, children, ...props }) => {
  return (
    <motion.a href={href} target={target} rel={rel} className={className} {...props}>
      {children}
    </motion.a>
  );
};

// Simple motion figure wrapper
export const MotionFigure = ({ children, ...props }) => {
  return <motion.figure {...props}>{children}</motion.figure>;
}; 