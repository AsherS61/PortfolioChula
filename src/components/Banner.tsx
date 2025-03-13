'use client'
import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner() {
    return (
        <div className={`${styles.banner} w-full h-[300px] shadow-md shadow-gray-700`}>
            <div className="absolute inset-0 z-10">
                <Image 
                    src="/img/cover.jpg" 
                    alt="cover" 
                    fill={true} 
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-800/80"></div>
            </div>
            <div className="relative z-20 text-white text-center w-full px-6 py-12 top-1/2 -translate-y-1/2">
                <h1 className="text-6xl font-medium font-serif">Hi, I'm Ashira Boonfongmanee</h1>
                <h3 className="text-2xl font-serif mt-4">A CEDT Student at Chulalongkorn University</h3>
            </div>
        </div>
    );
}
