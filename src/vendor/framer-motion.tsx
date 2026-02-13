import * as React from "react";

export type Variants = Record<string, Record<string, unknown>>;

type MotionLikeProps = {
  initial?: string | Record<string, unknown>;
  animate?: string | Record<string, unknown>;
  whileInView?: string | Record<string, unknown>;
  viewport?: Record<string, unknown>;
  transition?: Record<string, unknown>;
  variants?: Variants;
};

function makeMotion<K extends keyof JSX.IntrinsicElements>(tag: K) {
  const MotionComponent = React.forwardRef<HTMLElement, JSX.IntrinsicElements[K] & MotionLikeProps>((props, ref) => {
    const cleanProps = { ...props } as Record<string, unknown>;
    delete cleanProps.initial;
    delete cleanProps.animate;
    delete cleanProps.whileInView;
    delete cleanProps.viewport;
    delete cleanProps.transition;
    delete cleanProps.variants;

    return React.createElement(tag, { ...cleanProps, ref });
  });

  MotionComponent.displayName = `motion.${String(tag)}`;

  return MotionComponent;
}

export const motion = new Proxy(
  {},
  {
    get: (_, tag: string) => makeMotion(tag as keyof JSX.IntrinsicElements),
  }
) as Record<keyof JSX.IntrinsicElements, ReturnType<typeof makeMotion>>;
