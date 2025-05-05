import Link from "next/link";

export default function CV() {
    return(
        <object data="/CV_Latest.pdf" type="application/pdf" width="100%" height="1125">
            <p>Alternative text - include a link <Link href="https://drive.google.com/file/d/1QsaCQixjy3NoohuEd5iBsWJ9SaxirrJn/view?usp=sharing">to the PDF!</Link></p>
        </object>
    );
}