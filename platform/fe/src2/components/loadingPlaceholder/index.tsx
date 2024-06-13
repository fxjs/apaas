import React, { useRef } from "react";
import classNames from "classnames";

import css from "./index.less";

interface LoadingPlaceholderProps {
  className?: string;
  size?: number;
  primary?: boolean;
}

const ANIMATION_TIME = 1000;
const BAR_HEIGHT = {
  16: 4,
  24: 6,
  64: 8,
};
const INNER_BAR_WIDTH = {
  16: 8,
  24: 10,
  64: 20,
};

export default function LoadingPlaceholder({
  className,
  size = 24,
  primary = false
}: LoadingPlaceholderProps) {
  const mountTime = useRef(Date.now());
  // 实现加载动画的同步
  const mountDelay = -(mountTime.current % ANIMATION_TIME);

  return (
    <span
      style={{
        width: size,
        fontSize: `${BAR_HEIGHT[size]}px`,
        color: primary ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.55)",
        "--loading-inner-bar-width": `${INNER_BAR_WIDTH[size]}px`,
        "--loading-mountDelay": `${mountDelay}ms`,
      } as any}
      className={classNames(css.loadingAnimationComponent, className)}
    >
      <span className={css.barWrapper}>
        <span className={css.bar}></span>
      </span>
    </span>
  )
}
