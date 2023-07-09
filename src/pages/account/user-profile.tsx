import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="flex justify-center items-center">
  <UserProfile 
   appearance={{
    elements: {
      profileSectionPrimaryButton__username: 'hover:bg-rose-100',
      nternal_rscu79: 'text-rose-100', //not working
    }
  }} />
  </div>

  );

export default UserProfilePage;