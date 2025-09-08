import React from "react";

function layout({ children }) {
  return (
    <main className="w-full flex justify-center px-2 sm:px-6 sm:mt-3">
      <article className="w-full max-w-[1440px]">{children}</article>
    </main>
  );
}

export default layout;
