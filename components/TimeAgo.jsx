import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import { useState, useEffect } from 'react';

export default function TimeAgoComponent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const formatter = buildFormatter(frenchStrings);
  
  // Automatically uses current date/time - updates automatically when component renders
  // For build-time timestamp, set NEXT_PUBLIC_BUILD_TIME environment variable
  const updateTime = process.env.NEXT_PUBLIC_BUILD_TIME 
    ? new Date(process.env.NEXT_PUBLIC_BUILD_TIME)
    : new Date();
  
  if (!mounted) {
    return (
      <div className="px-6 text-xs italic text-gray-500">
        Updated:
      </div>
    );
  }

  return (
    <>
      <div className="px-6 text-xs italic text-gray-500">
        Updated: <TimeAgo date={updateTime} locale="pg" />
      </div>
    </>
  );
}
