import { useState, useEffect, useRef } from 'react';
import { Copy, Check } from 'lucide-react';

export function CopyButton({ code, codeRef, className = '' }) {
  const [copied, setCopied] = useState(false);
  const [codeText, setCodeText] = useState(code || '');
  const timeoutRef = useRef(null);

  // Extract text from code element if ref is provided
  useEffect(() => {
    if (codeRef?.current) {
      const text = codeRef.current.textContent || codeRef.current.innerText || '';
      if (text) {
        setCodeText(text);
      }
    } else if (code) {
      setCodeText(code);
    }
  }, [code, codeRef]);

  const handleCopy = async () => {
    // codeRef can be either a ref object with .current or directly an element
    const codeElement = codeRef?.current || codeRef;
    const textToCopy = codeElement 
      ? (codeElement.textContent || codeElement.innerText || '')
      : codeText;
    
    if (!textToCopy) return;
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Reset after 2 seconds
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <button
      onClick={handleCopy}
      className={`absolute top-2 right-2 z-10 flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 ${
        copied
          ? 'bg-green-500 text-white dark:bg-green-600 opacity-100'
          : 'bg-gray-200/90 text-gray-700 hover:bg-gray-300 dark:bg-gray-800/90 dark:text-gray-300 dark:hover:bg-gray-700 backdrop-blur-sm'
      } ${className}`}
      title={copied ? 'Copied!' : 'Copy code'}
      aria-label={copied ? 'Copied!' : 'Copy code'}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

