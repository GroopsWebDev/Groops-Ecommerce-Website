// import { api } from "~/utils/api";
// import { useAuth } from "@clerk/nextjs";
// import Link from "next/link";
// import { LoadingSpinner } from "~/components/loading";

// export default function Test() {
//   const { isLoaded, userId, sessionId, getToken } = useAuth();
//   const { data, isLoading, refetch } = api.lovelistApi.getUserLoveList.useQuery({
//     userId: userId ? userId : "1",
//   });

//   const add_mutation = api.lovelistApi.addLoveListItem.useMutation();
//   const delete_all_mutation = api.lovelistApi.deleteAllLoveListItems.useMutation();

//   const create = async () => {
//     await add_mutation.mutateAsync({ userId: userId ? userId : "1", skuid: "1" });
//     await refetch(); // Trigger a refetch of the user's love list
//   };

//   const deleteAllLovedItems = async () => {
//     await delete_all_mutation.mutateAsync({ userId: userId ? userId : "1"});
//     await refetch(); // Trigger a refetch of the user's love list
//   }

//   if (isLoading) {
//     return <LoadingSpinner />;
//   }

//   return (
//     <>
//       <Link href="/" className="bg-black p-1 text-white">
//         Back to home page
//       </Link>
      
//       <h1 className="mb-10 mt-10 text-center">My user Id: {userId}</h1>

//       <div className="flex flex-row justify-center">
//         <button onClick={create} className="m-20 border">
//           Create entry in lovelist
//         </button>
//         <button onClick={deleteAllLovedItems} className="m-20 border">
//           Empty lovelist
//         </button>
//       </div>

//       <div className="flex flex-col place-items-center">
//         {data?.map((loved_item) => (
//           <div key={loved_item.id}>Love list item id: {loved_item.skuid}</div>
//         ))}
//       </div>
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
