
import InteractiveCard from './InteractiveCard';
import Image from 'next/image';

export default function Card( {campgroundName, imgSrc} : {campgroundName:string, imgSrc:string} ) {
    return (
        <InteractiveCard contentName={campgroundName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='Campground Picture' fill={true} className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px] text-black font-serif'>{campgroundName}</div>
        </InteractiveCard>
    );
}