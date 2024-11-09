import Image from "next/image";
import Link from "next/link";

const Links = () => {
    return (
        <div className="fixed bottom-0 right-0 py-12 px-11">
            <Link href="https://github.com/nathan-foo" rel="noopener noreferrer" target="_blank">
                <Image src="/github.png" width={25} height={25} alt="" className="py-2" />
            </Link>
            <Link href="https://www.linkedin.com/in/nathan-foo/" rel="noopener noreferrer" target="_blank">
                <Image src="/linkedin.png" width={25} height={25} alt="" className="py-2" />
            </Link>
            <Link href="/contact">
                <Image src="/mail.png" width={25} height={25} alt="" className="py-2" />
            </Link>
        </div>
    );
}
 
export default Links;