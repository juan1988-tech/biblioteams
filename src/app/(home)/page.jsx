import Hero from "@/components/Home/Hero/Hero"
import HomeSearchBar from "@/components/Home/HomeSearchBar/HomeSearchBar"
import Workshops from "@/components/Home/Workshops/Workshops"
import Events from "@/components/Home/Events/Events"


export default function Page({children}) {
  
    return (
      <>
        <Hero/>
        <HomeSearchBar/>
        <Workshops/>
        <Events/>
      </>
    )
  }