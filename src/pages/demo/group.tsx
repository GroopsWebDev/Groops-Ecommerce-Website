// import { api } from "~/utils/api";
// import { useAuth } from "@clerk/nextjs";
// import Link from "next/link";
// import { LoadingSpinner } from "~/components/loading";
// import { useState } from "react";
// import InputWithLabel from "~/components/Input_with_label";
// import MinusButton from "~/components/minus_button";

// export default function Test() {
//   const { isLoaded, userId, sessionId, getToken } = useAuth();
//   const { data, isLoading, refetch } = api.groupApi.getAllGroups.useQuery();
//   const [isFetching, setIsFetching] = useState(false);
//   const [inputValue, setInputValue] = useState("");

//   const create_group = api.groupApi.createGroup.useMutation();
//   const delete_group = api.groupApi.deleteGroup.useMutation();

//   const [groupId, setGroupId] = useState("group id");
//   const deleteGroup = async (groupId: string) => {
//     setIsFetching(true); // set isFetching to true before refetch
//     await delete_group.mutateAsync({ groupId: groupId ? groupId : "1" });
//     await refetch(); // Trigger a refetch of the user's love list
//     setIsFetching(false); // set isFetching to false after refetch
//     setInputValue("");
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setGroupId(e.target.value);
//     setInputValue(e.target.value);
//   };

//   if (isLoading) {
//     return <LoadingSpinner />;
//   }

//   return (
//     <>
//       {isFetching && <LoadingSpinner />}
//       <Link href="/" className="bg-black p-1 text-white">
//         Back to home page
//       </Link>
//       <br></br>
//       <br></br>
//       <Link href="/demo/createGroup" className="bg-black p-1 text-white">
//         Go To Create Group Page
//       </Link>

//       <h1 className="mb-10 mt-10 text-center">My user Id: {userId}</h1>

//       <div className="flex flex-col place-items-center">
//         {/* {data?.map((group) => (
//           <div key={group.groupName}>
//             group name: {group.groupName}, || group id: {group.groupId}
//           </div>
//         ))} */}
//         {data?.map((group) => (
//           <div key={group.group_name}>
//             group name: {group.group_name}, || group id: {group.group_code}
//             <MinusButton onClick={() => deleteGroup(group.group_code)} />
//           </div>
//         ))}
//       </div>

//       {/* <div className="flex flex-col place-items-center">
//         <InputWithLabel
//           onChange={handleChange}
//           value={inputValue}
//           input_id="delete_group"
//           label_name="Group ID"
//           input_name="Group ID"
//           input_placeholder="Group ID"
//           input_type="text"
//         />
//         <button
//           type="submit"
//           className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           onClick={() => deleteGroup()}
//         >
//           Button: Delete Group
//         </button>
//       </div> */}
//     </>
//   );
// }




//

import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const About = () => {
  const { locale, locales } = useRouter();
  const { t: translate } = useTranslation("about");
  return (
    <div className="flex flex-col items-center justify-center">
    <div className="flex flex-row">
      {locales?.map((l) => (
        <h4 key={l} className="mr-2 mt-2 bg-gray-500 p-2 text-white">
          <Link href="" locale={l}>
            {l}
          </Link>
        </h4>
      ))}
    </div>
    <h1 className="text-center">Locale: {locale}</h1>
    <h2 className="text-center">{translate("hello Groops")}</h2>
    <h2 className="text-center">{translate("test")}</h2>
  </div>
  );
};

export async function getStaticProps({ locale = "en" }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  };
}

export default About;
