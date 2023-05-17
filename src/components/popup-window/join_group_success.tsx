import Link from "next/link";
import React from "react";
import { confirmAlert } from "react-confirm-alert";
import ExitPopupButton from "../../components/tailwind-buttons/exit-pop-up-btn";

const JoinGroupSuccess = () => {
  const goToGroupOrder = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="rounded-md border-2 border-black bg-white">
            <div className="m-4">
              <h1>Group Mode</h1>
              <p>You’re entering the group mode. </p>
              <p>
                In this mode you will go to the group order directly when
                checkout, The minimum order amount will be $39 (tax excluded).
              </p>
              <p>
                Your group/group member status will be canceled if you leave
                Groops! without completing an order.
              </p>
              <p>
                You can click on “Select items” on the process bar to continue
                the group order, or you can go to “Shopping Cart” to continue
                the group order.
              </p>
              <p>
                By clicking “OK”, you agree to the above terms and conditions.
              </p>
              <div className="flex justify-center">
                <Link href="/group">
                  <ExitPopupButton
                    onClick={() => {
                      onClose();
                    }}
                    text="OK"
                    className="ml-4"
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      },
    });
  };

  return (
    <div>
      <button
        style={{
          margin: "20px",
          marginRight: "40px",
          cursor: "pointer",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
          width: "18rem",
          height: "5rem",
          background:
            "linear-gradient(to right , rgb(100,12,161),  rgb(244,157,94))",
          color: "white",
          textAlign: "center",
          fontSize: "1.5rem",
          lineHeight: "5rem",
        }}
        onClick={goToGroupOrder}
      >
        Group Order
      </button>
    </div>
  );
};

export default JoinGroupSuccess;
