import React from "react";

const AIUploader = ({ createdNFT, setOpenTab }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{
          height: "auto",
          width: "50%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
        src={`${createdNFT}`}
      />
      <div className="flex rounded-lg justify-center items-center text-center flex-col px-8 h-48 md:h-60 md:bg-default mt-6">
        <p className="text-sm sm:text-base font-normal text-alternative">
          NFTs generation is successfully completed, And uploaded to IPFS,
        </p>
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={() => setOpenTab("All NFTs")}
            style={{
              marginRight: "20px",
            }}
            className=" transition px-5 py-2 rounded-full border flex items-center justify-center text-center w-full text-sm  border-primary-default bg-primary-default text-primary-inverse mb-4"
          >
            <span>View All NFTs </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIUploader;
