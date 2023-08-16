
import { useTimeAgo } from "next-time-ago";
import { useEffect } from "react";
export default function TimeAgoComponent() {
 
  const { TimeAgo } = useTimeAgo();
  useEffect(() => {}, []);
  return (
    <>
      <div className=" px-6 text-xs italic text-gray-500">
                      Updated:{" "}
                      <TimeAgo date="August 17, 2023 8:18 am" locale="pg" />
                    </div>
    </>
  );
}
