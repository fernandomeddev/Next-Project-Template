import Image from 'next/image'
import sharklogo from '../../../public/images/shark.png'
export default function Logo() {

    return (
        <div className={`flex flex-col items-center justify-center bg-white h-12  w-12 rounded-full `}>
            <Image src={sharklogo} />
        </div>
    )
}