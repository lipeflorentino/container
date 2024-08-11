import React, {
  useState,
  useCallback,
  useEffect,
  forwardRef,
  useRef,
} from 'react';

export interface CloseEventsProps {
  isOpen: boolean;
  blockOutside?: boolean;
  closeAction: () => void;
}

export interface CloseEventsHOCProps {
  closeCallback?: () => void;
  closing?: boolean;
}

const withCloseEvents = <T extends unknown>(
  Component: React.ComponentType<T>,
  usingClick?: boolean,
) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forwardRef((props: CloseEventsProps & T, ref: any) => {
    const { isOpen, blockOutside, closeAction } = props;

    const modalWrapper = useRef(null);

    const componentRef = ref || modalWrapper;

    const [closing, setClosing] = useState<boolean>(false);

    const handleClose = useCallback(() => {
      setClosing(true);
    }, []);

    const closeCallback = useCallback(() => {
      closeAction();
      setClosing(false);
    }, [closeAction]);

    const closeModalIfEscIsPressed = useCallback(
      (event: KeyboardEvent) => {
        const key = event.key || event.keyCode;

        if (key === 'Escape' || key === 'Esc' || key === 27) handleClose();
      },
      [handleClose],
    );

    const closeModalIfClickOutside = useCallback(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (event: any) => {
        const isChildrenOfModal = event.path?.includes(componentRef.current);
        const isInside = event.target === componentRef.current;

        if (!isInside && !isChildrenOfModal) handleClose();
      },
      [componentRef, handleClose],
    );

    useEffect(() => {
      if (isOpen && !blockOutside) {
        const eventName = usingClick ? 'click' : 'mousedown';

        document.addEventListener(eventName, closeModalIfClickOutside);
        document.addEventListener('keydown', closeModalIfEscIsPressed);

        return () => {
          document.removeEventListener(eventName, closeModalIfClickOutside);
          document.removeEventListener('keydown', closeModalIfEscIsPressed);
        };
      }
    }, [
      isOpen,
      closeModalIfClickOutside,
      closeModalIfEscIsPressed,
      blockOutside,
    ]);

    useEffect(() => {
      if (closing) {
        closeCallback();
      }
    }, [closing, closeCallback]);

    return isOpen ? (
      <Component
        {...props}
        closeCallback={closeCallback}
        closing={closing}
        ref={componentRef}
      />
    ) : null;
  });

export default withCloseEvents;
