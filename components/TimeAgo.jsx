
// import { useTimeAgo } from "next-time-ago";
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'


import { useEffect } from "react";
export default function TimeAgoComponent() {
 
  const formatter = buildFormatter(frenchStrings)
  useEffect(() => {}, []);
  return (
    <>
      <div className=" px-6 text-xs italic text-gray-500">
      Updated:<TimeAgo date="March 15, 2024 9:25 am" locale="pg"  />
      </div>
    </>
  );
}
