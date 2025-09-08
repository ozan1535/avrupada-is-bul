import React from "react";

interface FeatureItemProps {
  Icon: React.ElementType;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ Icon, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Icon size={50} color="#0a66c2" />
      <h1 className="text-xl font-medium mt-5 text-center">{text}</h1>
    </div>
  );
};

export default FeatureItem;
