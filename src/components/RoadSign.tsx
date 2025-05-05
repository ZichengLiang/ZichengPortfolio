import React from 'react'

export default function RoadSign(sign:string) {
    return (
        <li>
            <a className="group flex items-center py-3 active" href={`#${sign}`}>{sign}</a>
        </li>
    );
}