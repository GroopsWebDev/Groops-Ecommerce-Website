import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import JoinGroupButton from "./join-group-btn";
import ExitPopupButton from "./exit-pop-up-btn";

const PopUpwindow = () => {

  const handleOnClick = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
            <div className="rounded-md border-2 border-black bg-white">
            <div className="m-4">
              <h1>You have joined Fairy's group successfully</h1>
              <p>This group ends in 2 days</p>
              <p>This group has in 5 members | 10% discount earned</p>
              <p>Next step to to proceed your checkout </p>
              <p>(The discount refund will be sent back to your mayment account in 3 days after this group ends.</p>
              <p> You can also view your group discount refund history in your user center.)</p>
              <div className="flex justify-center">
                <ExitPopupButton
                  onClick={onClose}
                  text="Exit"
                  className="mr-4"
                />
                <ExitPopupButton
                  onClick={() => {onClose()}}
                  text="Proceed to Checkout"
                  className="ml-4"
                />
              </div>
            </div>
          </div>
        );
      },
    });
  };

      
  const joinGroupFail = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
            <div className="rounded-md border-2 border-black bg-white">
            <div className="m-4">
              <h3>It looks like you are already in John's Group </h3>
              <p>One member can only join one group at a time</p>
              <p>You can always quit the your current group and join a new group</p>
              <div className="flex justify-center">
                <ExitPopupButton
                  onClick={onClose}
                  text="Exit"
                  className="mr-4"
                />
              </div>
            </div>
          </div>
        );
      },
    });
  };

  return (
    <>
      <div className="mb-2 text-xl">When user is not in any group</div>
      <JoinGroupButton onClick={handleOnClick} text="Join This Group" />
      <div className="mb-2 text-xl">When user is already in another group</div>
      <JoinGroupButton onClick={joinGroupFail} text="Join This Group" />
    </>
  );
};

export default PopUpwindow;
