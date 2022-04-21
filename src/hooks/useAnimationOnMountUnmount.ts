import { useEffect, useState } from 'react';

export interface UseAnimationOnMountUnmountResult {
  shouldRender: boolean;
  onAnimationEnd: () => void;
}

export const useAnimationOnMountUnmount = (show: boolean): UseAnimationOnMountUnmountResult => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
    }
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return { shouldRender, onAnimationEnd };
};
