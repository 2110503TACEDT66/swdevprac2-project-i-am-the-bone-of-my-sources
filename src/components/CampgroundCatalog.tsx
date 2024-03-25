import Card from "./Card";
import Link from "next/link";

export default function CampgroundCatalog( {campgroundsJson} : {campgroundsJson:CampgroundJson} ) {
    console.log(campgroundsJson)
    return (
        <div className="text-black">
        <div style={{margin: "20px", display:"flex",    flexDirection:"row", flexWrap:"wrap",  justifyContent:"space-around",   alignContent:"space-around", padding:"10px"}}>
                {
                    campgroundsJson.data.map( (campgroundItem:CampgroundItem)=>(
                        <Link href={`/campgrounds/${campgroundItem.id}`} 
                        className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 lg:p-8">
                            <Card campgroundName={campgroundItem.name} imgSrc={campgroundItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}