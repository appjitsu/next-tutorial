"use client";

const Error = (error: { error: any }) => {
  return (
    <div>
      <h1 className="text-7xl">Error</h1>
      <p>{error.error.message}</p>
    </div>
  );
};

export default Error;
