import clothingImage from '../../../images/collectionsImage/collection_clothing.jpg'
import glassImage from '../../../images/collectionsImage/collection_sunglasses.jpg'
import bagImage from '../../../images/collectionsImage/collection_bag.jpg'
import sneakerImage from '../../../images/collectionsImage/collection_sneaker.jpg'



const FeaturedCollections = () => {
    return ( <div className="grid grid-cols-12 mt-[100px]">
        {/* Header section */}
        <div className="col-span-12 text-center">
            <h2 className="font-normal">Featured Collections</h2>
            <p className="mt-[25px]">Elevate your style with our chic featured collection—where fashion meets flair effortlessly.</p>
        </div>

        {/* Collections section */}
        <div className="col-span-12 grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 grid-flow-col gap-[20px] lg:gap-[30px] mt-[40px]">
            <div className='relative row-span-2'>
                <img className='object-fit h-full' src={clothingImage} alt="" />
                <button className='absolute bottom-[8px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-[16px] font-[600] w-[120px] h-[40px] lg:w-[160px] lg:h-[50px] rounded-[30px]'>Clothing</button>
            </div>

            <div className='relative row-span-1'>
                <img img className='object-fit h-full-fit' src={glassImage} alt="" />
                <button className='absolute bottom-[8px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-[16px] font-[600] w-[120px] h-[40px] lg:w-[160px] lg:h-[50px] rounded-[30px]'>Sunglasses</button>
            </div>

            <div className='relative row-span-1'>
                <img img className='object-fit h-full-fit' src={bagImage} alt="" />
                <button className='absolute bottom-[8px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-[16px] font-[600] w-[120px] h-[40px] lg:w-[160px] lg:h-[50px] rounded-[30px]'>Bags</button>

            </div>

            <div className='relative  row-span-2'>
                <img img className='object-fit h-full' src={sneakerImage} alt="" />
                <button className='absolute bottom-[8px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-[16px] font-[600] w-[120px] h-[40px] lg:w-[160px] lg:h-[50px] rounded-[30px]'>Sneaker</button>

            </div>
        </div>
    </div> );
}
 
export default FeaturedCollections;