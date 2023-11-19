import Link from "next/link";
import React, { useEffect } from "react";

const Categories = ({ images }: { images: string[] }) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (divRef.current) {
        divRef.current.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    const divElement = divRef.current;
    if (divElement) {
      divElement.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (divElement) {
        divElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);
  return (
    <div className="z-0 p-12">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <h1 className=" text-2xl font-bold text-gray-900">
            Group Categories
          </h1>
        </div>
      </div>
      <div
        className="custom-scrollbar mt-8 flex justify-start gap-24 py-4"
        ref={divRef}
        style={{
          overflowX: "scroll",
          scrollbarWidth: "thin",
        }}
      >
        <style>
          {`
            .custom-scrollbar::-webkit-scrollbar {
                height: 12px;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb {
                background-color: rgba(226,18,109, 0.1);
                border-radius: 30px;
            }

            .custom-scrollbar::-webkit-scrollbar-track {
                background-color: rgba(0, 0, 0, 0);
            }

        `}
        </style>
        {images.map((image, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <Link key={index} href={`/group/category/${index}`}>
            <img
              src={image}
              className="flex-none object-contain"
              style={{ width: 336, height: 336 }}
              alt="groups"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
