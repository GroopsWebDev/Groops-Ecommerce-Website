import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import { LoadingSpinner } from "~/components/others/loading";

//       <div className="flex flex-row justify-center">
//         <button onClick={deleteAllLovedItems} className="m-20 border">
//           Empty cart
//         </button>
//       </div>

//       <div className="flex flex-col place-items-center">
//         {data?.map((item) => (
//           <div key={item.id}>
//             <p>Love list item: {item.skuid}, quantity: {item.quantity}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }





// for passing build test purpose
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
