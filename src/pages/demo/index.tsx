// import { type NextPage } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
// import { UserButton, useAuth, useUser } from "@clerk/nextjs";

// import { api } from "~/utils/api";
// import { LoadingSpinner } from "~/components/loading";

// const Demo: NextPage = () => {
//   const hello = api.example.hello.useQuery({ text: "from tRPC" });
//   const { isLoaded: userLoaded, userId, sessionId, getToken } = useAuth();
//   const { data: userData, isLoading: loadingData } =
//     api.example.getAllUser.useQuery();
//   const { user } = useUser();

//   if (loadingData) {
//     return <LoadingSpinner />;
//   }

//   return (
//     <>
//       <SignedIn>
//         <div>This content is visible only to signed in users.</div>
//         {userLoaded && userId && (
//           <>
//             <h2>Logged in as {userId}</h2>
//             {user && (
//               <>
//                 <Image
//                   src={user?.profileImageUrl}
//                   alt="User Profile"
//                   width={200}
//                   height={200}
//                 ></Image>
//                 <span>user.profileImageUrl</span>
//               </>
//             )}
//             <UserButton afterSignOutUrl="http://localhost:3000" />
//           </>
//         )}
//       </SignedIn>
//       <SignedOut>
//         {/* 
//               Route matches, but no user is signed in. 
//               Redirect to the sign in page.
//             */}

//         <RedirectToSignIn />
//       </SignedOut>

//       <ul>
//         <Link href="/demo/lovelist" className="bg-black p-1 text-white">
//           Link to lovelist page
//         </Link>
//       </ul>
//       <ul>
//         <Link href="/demo/order" className="bg-black p-1 text-white">
//           Link to order page
//         </Link>
//       </ul>
//       <ul>
//         <Link href="/demo/product" className="bg-black p-1 text-white">
//           Link to product page
//         </Link>
//       </ul>
//       <ul>
//         <Link href="/demo/group" className="bg-black p-1 text-white">
//           Link to group page
//         </Link>
//       </ul>

//       <ul>
//         <Link href="/demo/createProduct" className="bg-black p-1 text-white">
//           Link to Create Product page
//         </Link>
//       </ul>

//       <ul>
//         <Link href="/demo/cart" className="bg-black p-1 text-white">
//           Link to Cart
//         </Link>
//       </ul>

//       <ul>
//         <Link href="/demo/address" className="bg-black p-1 text-white">
//           Link to Address
//         </Link>
//       </ul>

//       {userData?.map((db_user: any) => (
//         <div key={db_user.id}>{db_user.email}</div>
//       ))}
//     </>
//   );
// };

// export default Demo;


//
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
