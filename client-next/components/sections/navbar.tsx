import Link from "next/link";

const Navbar = () => {
    return (
        <div className="font-[CutiePatootie] absolute text-[1.3rem] flex items-center justify-between top-0 left-0 w-[100%] py-6 px-12">
            <Link href="/" className="font-extrabold">✰ nathan foo</Link>

            <div className="navbar">
                <Link href="/about" className="relative ml-10">about</Link>
                <Link href="/work" className="relative ml-10">work</Link>
                <Link href="/contact" className="relative ml-10">contact</Link>
            </div>
        </div>
    );
}
 
export default Navbar;