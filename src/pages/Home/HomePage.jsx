import Category from "../../components/category/Category"
import HeroSection from "../../components/heroSection/HeroSection"
import Track from "../../components/track/Track"
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard"
import Testimonial from "../../components/testimonial/Testimonial"
import Layout from "../../components/Layout/Layout"
//import myContext from "../../context/MyContext"
//import { useContext } from "react"
//import Loader from "../../components/loader/Loader"
function HomePage() {
  //const context = useContext(myContext)
  return (
    <Layout>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      <Testimonial/>
   </Layout>
  )
}

export default HomePage
