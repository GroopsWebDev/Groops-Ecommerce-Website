import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Test() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { data: groupData, isLoading: loadingData } =
    api.groupApi.getAllGroups.useQuery();
  const imagePath = "https://api.gr-oops.com/";
  const date = new Date();
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Link href="/" className="bg-black p-1 text-white">
        Back to home page
      </Link>
      {console.log(groupData)}
      <div className="flex flex-col place-items-center">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Group ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Group Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Group Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Group Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Final Discount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Count Down
              </th>
            </tr>
          </thead>
          <tbody>
            {groupData?.map((groupData) => {
              const startDate = new Date();
              const endDate = new Date(groupData.endDate);
              const difference = endDate - startDate;

              const hours = Math.floor(difference / (1000 * 60 * 60));
              const minutes = Math.floor((difference / (1000 * 60)) % 60);
              const seconds = Math.floor((difference / 1000) % 60);

              return (
                <tr key={groupData.groupId}>
                  <td>{groupData.groupId}</td>
                  <td>{groupData.groupName}</td>
                  <td>
                    <img
                      src={imagePath + groupData.groupImg}
                      style={{ height: "150px", width: "250px" }}
                    />
                  </td>
                  <td>{groupData.groupCode}</td>
                  <td>{groupData.finalDiscount}</td>
                  {hours < 0 ? (
                    <td>Times Up</td>
                  ) : (
                    <td>
                      {hours + " Hrs"} : {minutes + " Min"} : {seconds + " S"}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
