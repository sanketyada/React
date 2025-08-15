import React from "react";

function ShowData({ data }) {
  if (!data) {
    return <p className="text-center mt-4">No joke yet. Click the button above!</p>;
  }

  return (
    <div className="text-center mt-6">
      <img
        src={data.message}
        alt="Random Dog"
        className="mx-auto rounded-lg shadow-lg"
        width="300"
      />
    </div>
  );
}

export default ShowData;
