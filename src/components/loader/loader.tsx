// components/Loader.tsx

import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <style jsx>{`
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .loader__spinner {
          border: 8px solid rgba(0, 0, 0, 0.1);
          border-left-color: #555;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className="loader__spinner" />
    </div>
  );
};

export default Loader;
