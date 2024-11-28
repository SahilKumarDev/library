import React from "react";

interface GridPageLayoutProps {
  heading: string;
  description: string;
  children: React.ReactNode;
}

const GridPageLayout = ({
  children,
  heading,
  description,
}: GridPageLayoutProps) => {
  return (
    <div className="space-y-20">
      <div className="text-center space-y-1 lg:space-y-2 font-orbit-max">
        <h1 className="lg:text-6xl text-4xl">{heading}</h1>
        <p className="lg:text-xl text-base text-white-60 tracking-wide">
          {description}
        </p>
      </div>

      <div className="px- sm:px-6">
        <div className="mx-auto  w-full max-w-8xl">
          <div className="page-grid-layout"> {children}</div>
        </div>
      </div>
    </div>
  );
};

export default GridPageLayout;
