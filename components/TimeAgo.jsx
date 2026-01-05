import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

export default function TimeAgoComponent() {
  const formatter = buildFormatter(frenchStrings);
  
  // Automatically uses current date/time - updates automatically when component renders
  // For build-time timestamp, set NEXT_PUBLIC_BUILD_TIME environment variable
  const updateTime = process.env.NEXT_PUBLIC_BUILD_TIME 
    ? new Date(process.env.NEXT_PUBLIC_BUILD_TIME)
    : new Date();
  
  return (
    <>
      <div className="px-6 text-xs italic text-gray-500">
        Updated: <TimeAgo date={updateTime} locale="pg" />
      </div>
    </>
  );
}
