import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto my-12 px-4 max-w-6xl">{children}</div>
  );
};

export default Container;
