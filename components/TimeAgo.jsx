
import { useTimeAgo } from "next-time-ago";
import { useEffect } from "react";
export default function TimeAgoComponent() {
 
  const { TimeAgo } = useTimeAgo();
  useEffect(() => {}, []);
  return (
    <>
      <div className=" px-6 text-xs italic text-gray-500">
                      Updated:{" "}
                      <TimeAgo date="March 29, 2023 6:30 am" locale="pg" />
                    </div>
    </>
  );
}
