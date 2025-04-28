// CSS-based animation components (no framer-motion dependency)

// Create a motion div component that uses CSS animations
export const MotionDiv = ({ children, className = '', 
  initial, animate, whileHover, whileTap, transition, 
  whileInView, viewport, ...props }) => {
  
  // Generate a unique ID for the inline styles
  const uniqueId = `motion-${Math.random().toString(36).substr(2, 9)}`;
  
  // Build animation styles based on props
  let animationStyles = '';
  let hoverStyles = '';
  let transitionDuration = transition?.duration || 0.3;
  let transitionDelay = transition?.delay || 0;
  
  // Process initial and animate props
  if (initial && animate) {
    const initialProps = getTransformString(initial);
    const animateProps = getTransformString(animate);
    
    if (initialProps || animateProps) {
      animationStyles = `
        #${uniqueId} {
          ${initialProps};
          opacity: ${initial.opacity !== undefined ? initial.opacity : 1};
          animation: ${uniqueId}-anim ${transitionDuration}s forwards;
          animation-delay: ${transitionDelay}s;
        }
        
        @keyframes ${uniqueId}-anim {
          to {
            ${animateProps};
            opacity: ${animate.opacity !== undefined ? animate.opacity : 1};
          }
        }
      `;
    }
  }
  
  // Process hover animations
  if (whileHover) {
    const hoverProps = getTransformString(whileHover);
    if (hoverProps) {
      hoverStyles = `
        #${uniqueId}:hover {
          ${hoverProps};
          opacity: ${whileHover.opacity !== undefined ? whileHover.opacity : 1};
        }
      `;
    }
  }
  
  // Combine all styles
  const combinedStyles = animationStyles + hoverStyles;
  
  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <div id={uniqueId} className={className} style={{
        transition: `all ${transitionDuration}s ease`,
        ...props.style
      }} {...props}>
        {children}
      </div>
    </>
  );
};

// Create a motion image component
export const MotionImage = ({ src, alt, className = '', 
  initial, animate, whileHover, transition, ...props }) => {
  
  // Generate a unique ID for the inline styles
  const uniqueId = `motion-img-${Math.random().toString(36).substr(2, 9)}`;
  
  // Build animation styles based on props
  let animationStyles = '';
  let hoverStyles = '';
  let transitionDuration = transition?.duration || 0.3;
  let transitionDelay = transition?.delay || 0;
  
  // Process initial and animate props
  if (initial && animate) {
    const initialProps = getTransformString(initial);
    const animateProps = getTransformString(animate);
    
    if (initialProps || animateProps) {
      animationStyles = `
        #${uniqueId} {
          ${initialProps};
          opacity: ${initial.opacity !== undefined ? initial.opacity : 1};
          animation: ${uniqueId}-anim ${transitionDuration}s forwards;
          animation-delay: ${transitionDelay}s;
        }
        
        @keyframes ${uniqueId}-anim {
          to {
            ${animateProps};
            opacity: ${animate.opacity !== undefined ? animate.opacity : 1};
          }
        }
      `;
    }
  }
  
  // Process hover animations
  if (whileHover) {
    const hoverProps = getTransformString(whileHover);
    if (hoverProps) {
      hoverStyles = `
        #${uniqueId}:hover {
          ${hoverProps};
          opacity: ${whileHover.opacity !== undefined ? whileHover.opacity : 1};
        }
      `;
    }
  }
  
  // Combine all styles
  const combinedStyles = animationStyles + hoverStyles;
  
  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <div id={uniqueId} style={{
        transition: `all ${transitionDuration}s ease`,
        ...props.style
      }} {...props}>
        <img src={src} alt={alt || 'Image'} className={className} />
      </div>
    </>
  );
};

// Create a motion link component
export const MotionLink = ({ href, target, rel, className = '', children,
  initial, animate, whileHover, transition, ...props }) => {
  
  // Generate a unique ID for the inline styles
  const uniqueId = `motion-link-${Math.random().toString(36).substr(2, 9)}`;
  
  // Build animation styles based on props
  let animationStyles = '';
  let hoverStyles = '';
  let transitionDuration = transition?.duration || 0.3;
  let transitionDelay = transition?.delay || 0;
  
  // Process initial and animate props
  if (initial && animate) {
    const initialProps = getTransformString(initial);
    const animateProps = getTransformString(animate);
    
    if (initialProps || animateProps) {
      animationStyles = `
        #${uniqueId} {
          ${initialProps};
          opacity: ${initial.opacity !== undefined ? initial.opacity : 1};
          animation: ${uniqueId}-anim ${transitionDuration}s forwards;
          animation-delay: ${transitionDelay}s;
        }
        
        @keyframes ${uniqueId}-anim {
          to {
            ${animateProps};
            opacity: ${animate.opacity !== undefined ? animate.opacity : 1};
          }
        }
      `;
    }
  }
  
  // Process hover animations
  if (whileHover) {
    const hoverProps = getTransformString(whileHover);
    if (hoverProps) {
      hoverStyles = `
        #${uniqueId}:hover {
          ${hoverProps};
          opacity: ${whileHover.opacity !== undefined ? whileHover.opacity : 1};
        }
      `;
    }
  }
  
  // Combine all styles
  const combinedStyles = animationStyles + hoverStyles;
  
  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <a 
        id={uniqueId} 
        href={href} 
        target={target} 
        rel={rel} 
        className={className}
        style={{
          transition: `all ${transitionDuration}s ease`,
          ...props.style
        }} 
        {...props}
      >
        {children}
      </a>
    </>
  );
};

// Simple motion figure wrapper
export const MotionFigure = ({ children, className = '', 
  initial, animate, whileHover, transition, whileInView, viewport, ...props }) => {
  
  // Generate a unique ID for the inline styles
  const uniqueId = `motion-figure-${Math.random().toString(36).substr(2, 9)}`;
  
  // Build animation styles based on props
  let animationStyles = '';
  let hoverStyles = '';
  let transitionDuration = transition?.duration || 0.3;
  let transitionDelay = transition?.delay || 0;
  
  // Process initial and animate props
  const animateObj = whileInView || animate;
  if (initial && animateObj) {
    const initialProps = getTransformString(initial);
    const animateProps = getTransformString(animateObj);
    
    if (initialProps || animateProps) {
      animationStyles = `
        #${uniqueId} {
          ${initialProps};
          opacity: ${initial.opacity !== undefined ? initial.opacity : 1};
          animation: ${uniqueId}-anim ${transitionDuration}s forwards;
          animation-delay: ${transitionDelay}s;
        }
        
        @keyframes ${uniqueId}-anim {
          to {
            ${animateProps};
            opacity: ${animateObj.opacity !== undefined ? animateObj.opacity : 1};
          }
        }
      `;
    }
  }
  
  // Process hover animations
  if (whileHover) {
    const hoverProps = getTransformString(whileHover);
    if (hoverProps) {
      hoverStyles = `
        #${uniqueId}:hover {
          ${hoverProps};
          opacity: ${whileHover.opacity !== undefined ? whileHover.opacity : 1};
        }
      `;
    }
  }
  
  // Combine all styles
  const combinedStyles = animationStyles + hoverStyles;
  
  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <figure 
        id={uniqueId} 
        className={className}
        style={{
          transition: `all ${transitionDuration}s ease`,
          ...props.style
        }} 
        {...props}
      >
        {children}
      </figure>
    </>
  );
};

// Helper function to convert transform properties to CSS
function getTransformString(props) {
  const transforms = [];
  
  if (props.x !== undefined) transforms.push(`translateX(${props.x}px)`);
  if (props.y !== undefined) transforms.push(`translateY(${props.y}px)`);
  if (props.rotate !== undefined) transforms.push(`rotate(${props.rotate}deg)`);
  if (props.scale !== undefined) transforms.push(`scale(${props.scale})`);
  
  return transforms.length ? `transform: ${transforms.join(' ')};` : '';
} 