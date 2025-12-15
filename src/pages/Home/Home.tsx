import type { JSX } from "react";
import CathalogBar from "../../components/CathalogBar/CathalogBar";
import Hero from "../../components/Hero/Hero";
import WorkShops from "../../components/WorkShops/WorkShops";

export default function Home():JSX.Element {
  return (
   <>
    <Hero/> 
    <CathalogBar/>
    <WorkShops/>
    </> 
  )
}
