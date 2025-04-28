import React from "react";

const MyPage = () => {
  return (
    <div>
      <h1>Build ID: {process.env.NEXT_PUBLIC_BUILD_ID}</h1>
    </div>
  );
};

export default MyPage;
