import React from "react";
import Link from "next/link";

export default function RoadSign(sign: string) {
  return (
    <div>
      <Link className="group flex  py-3 items-center active flex" href={`#${sign}`}>
        {sign}
      </Link>
    </div>
  );
}
