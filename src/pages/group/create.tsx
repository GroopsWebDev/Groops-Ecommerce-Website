import { useRouter } from "next/router";
import { useState } from "react";

const CreateGroupPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <h2>page {currentPage}</h2>
    </>
  );
};

export default CreateGroupPage;
