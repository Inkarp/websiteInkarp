// Configuration for framer-motion
import { domMax } from 'framer-motion';

// Export the domMax feature to properly configure HTML element prop forwarding
export const motionConfig = {
  domAnimation: domMax,
};

// Standalone function to extract motion props from elements to prevent errors
export function extractMotionProps(props) {
  // Common motion props to be extracted
  const motionSpecificProps = [
    'initial', 'animate', 'exit', 'variants', 'transition', 'whileHover',
    'whileTap', 'whileFocus', 'whileDrag', 'whileInView', 'viewport',
    'drag', 'dragConstraints', 'dragElastic', 'dragMomentum'
  ];
  
  // Separate motion props from regular props
  const motionProps = {};
  const otherProps = {};
  
  Object.keys(props).forEach(key => {
    if (motionSpecificProps.includes(key)) {
      motionProps[key] = props[key];
    } else {
      otherProps[key] = props[key];
    }
  });
  
  return { motionProps, otherProps };
} 