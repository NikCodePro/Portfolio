export const generateBlurEffect = (color, intensity = 100) => ({
  filter: `blur(${intensity}px)`,
  background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
});

export const generateGlassMorphism = (bgColor, opacity = 0.7) => ({
  backgroundColor: `${bgColor}${Math.round(opacity * 255).toString(16)}`,
  backdropFilter: 'blur(8px)',
});