import banner from '../../images/bannerImage/banner1_notext.jpg'
import Banner from './Banner/Banner';
import FeaturedCollections from './FeaturedCollections/FeaturedCollections';
import NewArrivals from './NewArrivals/NewArrival';

const Home = () => {
    return ( <div>
        <Banner />

        <FeaturedCollections />

        <NewArrivals />
    </div> );
}
 
export default Home;