import { useRef, useEffect } from 'react';
import { CopyButton } from './CopyButton';

export function PreWithCopy({ children, className, ...rest }) {
  const preRef = useRef(null);
  const codeRef = useRef(null);

  // Find the code element inside pre after render
  useEffect(() => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector('code');
      if (codeElement) {
        codeRef.current = codeElement;
      }
    }
  }, [children]);

  return (
    <pre
      ref={preRef}
      {...rest}
      className={`${className || ''} relative overflow-x-auto rounded-lg bg-gray-100 dark:bg-gray-900 p-4 my-4 group`}
    >
      <CopyButton codeRef={codeRef} />
      {children}
    </pre>
  );
}

