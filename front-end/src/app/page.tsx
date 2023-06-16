import CarouselHomePage from "@/components/Carousel/CarouselHomePage";
import GridCategory from "@/components/GridCategory/GridCategory";


const Home: React.FC = () => {

  return (
    <div className="mt-[60px]">
      <CarouselHomePage />
      <GridCategory />
    </div>
  )
}

export default Home
