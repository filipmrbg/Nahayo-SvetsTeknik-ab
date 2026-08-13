import { useEffect, useRef, useState, ReactNode, useMemo } from 'react';

type Animation =
  | 'fade'
  | 'glide-in'
  | 'fade-up'
  | 'fade-left'
  | 'fade-right'
  | 'blur-in'
  | 'scale-in'
  | 'clip-in'
  | 'reveal-mask'
  | 'slide-up-fade'
  | 'scale-x-left'
  | 'scale-x-center';

interface Props {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  threshold?: number;
  duration?: number;
  easing?: string;
}

interface HiddenStyle {
  opacity: number;
  transform: string;
  filter: string;
  clipPath: string;
  transformOrigin?: string;
}

function getHidden(animation: Animation): HiddenStyle {
  const yOffset = '20px';
  const xOffset = '20px';

  switch (animation) {
    case 'fade':
      return { opacity: 0, transform: 'none', filter: 'none', clipPath: 'none' };
    case 'glide-in':
      return { opacity: 0, transform: 'translate3d(0, 10px, 0)', filter: 'none', clipPath: 'none' };
    case 'fade-up':
      return { opacity: 0, transform: `translate3d(0, ${yOffset}, 0)`, filter: 'none', clipPath: 'none' };
    case 'fade-left':
      return { opacity: 0, transform: `translate3d(-${xOffset}, 0, 0)`, filter: 'none', clipPath: 'none' };
    case 'fade-right':
      return { opacity: 0, transform: `translate3d(${xOffset}, 0, 0)`, filter: 'none', clipPath: 'none' };
    case 'blur-in':
      return { opacity: 0, transform: 'none', filter: 'blur(8px)', clipPath: 'none' };
    case 'scale-in':
      return { opacity: 0, transform: 'scale3d(0.97, 0.97, 1)', filter: 'none', clipPath: 'none' };
    case 'clip-in':
      return { opacity: 1, transform: 'none', filter: 'none', clipPath: 'inset(0 0 100% 0)' };
    case 'reveal-mask':
      return { opacity: 1, transform: 'none', filter: 'none', clipPath: 'inset(0 100% 0 0)' };
    case 'slide-up-fade':
      return { opacity: 0, transform: `translate3d(0, 30px, 0)`, filter: 'none', clipPath: 'none' };
    case 'scale-x-left':
      return { opacity: 1, transform: 'scaleX(0) translate3d(0, 0, 0)', filter: 'none', clipPath: 'none', transformOrigin: 'left' };
    case 'scale-x-center':
      return { opacity: 1, transform: 'scaleX(0) translate3d(0, 0, 0)', filter: 'none', clipPath: 'none', transformOrigin: 'center' };
    default:
      return { opacity: 0, transform: `translate3d(0, ${yOffset}, 0)`, filter: 'none', clipPath: 'none' };
  }
}

export default function ScrollReveal({
  children,
  animation = 'glide-in',
  delay = 0,
  threshold = 0.02, // Triggers instantly as soon as the element enters
  duration = 0.8,    // Unified premium transition duration
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  // Detect mobile view
  const mobile = useMemo(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches, []);
  
  // Mobile animations are crisp and slightly faster (450ms) with snappy delays for smooth touch scrolling
  const effectiveDuration = mobile ? Math.min(0.45, duration) : duration;
  const effectiveDelay = mobile ? Math.round(delay * 0.4) : delay;

  const actualThreshold = threshold;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: actualThreshold, rootMargin: '60px 0px 60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [actualThreshold]);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setAnimationDone(true);
      }, effectiveDuration * 1000 + effectiveDelay);
      return () => clearTimeout(timer);
    }
  }, [visible, effectiveDuration, effectiveDelay]);

  const hidden = getHidden(animation);

  // Custom premium curve: gentler start than easeOutExpo to avoid frame drops,
  // but still has a luxurious deceleration tail (easeOutQuint).
  const easingStyle = 'cubic-bezier(0.22, 1, 0.36, 1)';

  const isClipAnimation = animation === 'clip-in' || animation === 'reveal-mask';

  // Build transition properties dynamically so we do not animate unused/expensive properties
  const outerTransitionProps = ['opacity', 'transform'];
  if (animation === 'blur-in') {
    outerTransitionProps.push('filter');
  }
  const outerTransitionStyle = outerTransitionProps
    .map((prop) => `${prop} ${effectiveDuration}s ${easingStyle}`)
    .join(', ');

  const getVisibleTransform = (anim: Animation) => {
    if (anim === 'scale-x-left' || anim === 'scale-x-center') {
      return 'scaleX(1) translate3d(0, 0, 0)';
    }
    if (anim === 'scale-in') {
      return 'scale3d(1, 1, 1) translate3d(0, 0, 0)';
    }
    return 'translate3d(0, 0, 0)';
  };

  const renderContent = () => {
    if (isClipAnimation) {
      return (
        <div
          style={{
            clipPath: animationDone ? 'none' : (visible ? 'inset(0 0 0 0)' : hidden.clipPath),
            WebkitClipPath: animationDone ? 'none' : (visible ? 'inset(0 0 0 0)' : hidden.clipPath),
            transition: `clip-path ${effectiveDuration}s ${easingStyle}, -webkit-clip-path ${effectiveDuration}s ${easingStyle}`,
            transitionDelay: `${effectiveDelay}ms`,
          }}
        >
          {children}
        </div>
      );
    }
    return children;
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : (isClipAnimation ? 1 : hidden.opacity), // Keep outer div opaque for clip animations
        transform: animationDone ? 'none' : (visible ? getVisibleTransform(animation) : hidden.transform),
        filter: animationDone ? 'none' : (visible ? 'none' : hidden.filter),
        transformOrigin: hidden.transformOrigin,
        transition: outerTransitionStyle,
        transitionDelay: `${effectiveDelay}ms`,
        willChange: animationDone ? undefined : 'opacity, transform',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      {renderContent()}
    </div>
  );
}
