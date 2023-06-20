

const Sidebar = (
  { showSide }: { showSide: boolean }
) => {

  if (!showSide) return null;

  return <>

    <div className="fixed h-screen left-0 z-50 bg-red-200">
      <div className="flex flex-col h-full">
        <p>Your Account</p>
        <p>Your Orders</p>
        <p>Your Groups</p>
        <p>Your Love List</p>
        <p>Log out</p>
      </div>
    </div>

  </>

};


export default Sidebar;