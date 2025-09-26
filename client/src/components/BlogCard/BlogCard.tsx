import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { IBlogCard } from "./BlogCard.types";

function BlogCard({ imageSrc, title, description, link }: IBlogCard) {
  return (
    <Card className="max-w-md w-full overflow-hidden rounded-lg shadow-sm border py-0 gap-2">
      <div className="w-full h-48 sm:h-56 md:h-64 relative bg-gray-100">
        <Link href={link}>
          <Image
            src={imageSrc}
            alt="picture"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 384px"
            priority
          />
        </Link>
      </div>

      <CardHeader className="py-0 px-2">
        <Link href={link}>
          <CardTitle className="text-base sm:text-lg text-primary-color hover:underline transition-colors line-clamp-2 dark:text-gray-200">
            {title}
          </CardTitle>
        </Link>
      </CardHeader>

      <CardContent className="px-2 py-0">
        <p className="text-sm sm:text-base text-gray-700 line-clamp-3 dark:text-gray-300">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-end px-2 pb-2 text-sm text-muted-foreground">
        <CardAction>
          <Link href={link} className="text-primary-color hover:underline">
            Daha fazla →
          </Link>
        </CardAction>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
