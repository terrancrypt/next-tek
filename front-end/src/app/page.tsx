import BannerImage from "@/components/BannerImage/BannerImage";
import Button from "@/components/Button/Button";
import CarouselHomePage from "@/components/Carousel/CarouselHomePage";
import GridCategory from "@/components/GridCategory/GridCategory";
import ProductCard from "@/components/ProductCard/ProductCard";


const Home: React.FC = () => {

  return (
    <div className="mt-[60px]">
      <CarouselHomePage />
      <GridCategory />
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Recent Products</h2>
        <div className="grid grid-cols-4 my-4 gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className="py-20 flex justify-center">
          <div className="flex flex-col gap-8 text-center">
            <span className="text-4xl font-bold capitalize">
              It all arrived this week
            </span>
            <span>
              Technology products are always changing. We always try to update the latest products for you.
            </span>
            <Button btnClass="bg-black text-white text-lg" btnText="View All New Products" />
          </div>
        </div>
      </div>

      <div className="flex h-[500px]">

        <div className="flex-[1]">
          <BannerImage 
          urlImage="https://images.pexels.com/photos/11396009/pexels-photo-11396009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Visit Us"
          desc="456 Park Avenue, Apartment 789, Cityville, State X, Country Y"
          btnText="Contact"
          />
        </div>

        <div className="flex-[1]">
          <BannerImage 
          urlImage="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Follow Us On Instagram"
          btnText="@nexttek"
          />
        </div>

      </div>

    </div>
  )
}

export default Home
