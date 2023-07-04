import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featureproperties/FeaturedProperties"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertylist/PropertyList"
import "./home.css"

const Home = () => {
  return (
    <div>
   <Navbar/>
   <Header/>
   <div className="HomeContainer">
   <Featured/>
   <h1 className="homeTitle"> Browse by property type</h1>
   <PropertyList/>
   <h1 className="homeTitle">Home guests love</h1>
   <FeaturedProperties/>
   <MailList/>
   <Footer/>
   </div>
   </div>
  )
}

export default Home