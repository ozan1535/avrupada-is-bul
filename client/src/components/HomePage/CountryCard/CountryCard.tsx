import React from "react";
import Image from "next/image";

interface CountryCardProps {
  country: string;
  flagUrl: string;
  jobCount: string;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  flagUrl,
  jobCount,
}) => {
  return (
    <div className="border rounded-xl w-36 h-36 p-3 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-between cursor-pointer bg-white">
      <Image
        src={flagUrl}
        width={80}
        height={60}
        alt={`${country} flag`}
        className="rounded-sm"
      />
      <div className="text-center">
        <p className="font-medium text-sm">{country}</p>
        <p className="text-xs text-gray-600">{jobCount} iş ilanı</p>
      </div>
    </div>
  );
};

export default CountryCard;
