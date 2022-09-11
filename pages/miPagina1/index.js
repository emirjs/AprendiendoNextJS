import Link from "next/link"
export default function miPagina1(){
    return (
    <>
    <h1>Otra Página</h1>
    <Link href="/">
        <a>
            Volver Atras
        </a>
    </Link>
    </>
    )
}