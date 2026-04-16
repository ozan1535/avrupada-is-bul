// import React from "react";
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";
// import Image from "next/image";
// import Link from "next/link";
// import { IBlogCard } from "./BlogCard.types";

// function BlogCard({ imageSrc, title, description, link }: IBlogCard) {
//   return (
//     <Card className="max-w-md w-full overflow-hidden rounded-lg shadow-sm border py-0 gap-2">
//       <div className="w-full h-48 sm:h-56 md:h-64 relative bg-gray-100">
//         <Link href={link}>
//           <Image
//             src={imageSrc}
//             alt="picture"
//             fill
//             className="object-cover"
//             sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 384px"
//             priority
//           />
//         </Link>
//       </div>

//       <CardHeader className="py-0 px-2">
//         <Link href={link}>
//           <CardTitle className="text-base sm:text-lg text-primary-color hover:underline transition-colors line-clamp-2 dark:text-gray-200">
//             {title}
//           </CardTitle>
//         </Link>
//       </CardHeader>

//       <CardContent className="px-2 py-0">
//         <p className="text-sm sm:text-base text-gray-700 line-clamp-3 dark:text-gray-300">
//           {description}
//         </p>
//       </CardContent>

//       <CardFooter className="flex items-center justify-end px-2 pb-2 text-sm text-muted-foreground">
//         <CardAction>
//           <Link href={link} className="text-primary-color hover:underline">
//             Daha fazla →
//           </Link>
//         </CardAction>
//       </CardFooter>
//     </Card>
//   );
// }

// export default BlogCard;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBlogCard } from "./BlogCard.types";

function BlogCard({ imageSrc, title, description, link, category }: IBlogCard) {
  return (
    <Link
      href={link}
      className="group flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-[0_8px_32px_rgba(27,43,74,0.10)] hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] bg-[#F1F4F9] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          priority
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 lg:p-6">
        {category && (
          <span className="text-[11px] font-medium text-[#4A7BC8] tracking-[0.8px] uppercase mb-2.5">
            {category}
          </span>
        )}

        <h3 className="text-[16px] font-medium text-[#1B2B4A] leading-snug mb-2.5 flex-1 line-clamp-2">
          {title}
        </h3>

        <p className="text-[13px] font-light text-slate-500 leading-relaxed mb-5 line-clamp-2">
          {description}
        </p>

        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4A7BC8]">
          Devam et
          <svg
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default BlogCard;
