import React from 'react';
import Link from 'next/link';

export default function RoadSign(sign:string) {
    return (
        <li>
            <Link className="group flex items-center py-3 active" href={`#${sign}`}>{sign}</Link>
        </li>
    );
}