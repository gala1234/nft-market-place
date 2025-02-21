import React from "react";
import Link from "next/link";
import Image from "next/image";
import { H1, P } from "@/components/texts";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 flex items-center justify-center">
      <div className="max-w-[600px] mx-auto text-center space-y-8">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/shapes.png"
            alt="404 Illustration"
            fill
            className="object-contain"
          />
        </div>
        <H1>Page Not Found</H1>
        <P>
          Oops! The NFT you&apos;re looking for seems to have wandered into the
          digital void. Don&apos;t worry, there are plenty more unique pieces to
          discover!
        </P>
        <Link
          href="/"
          className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/80 transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
