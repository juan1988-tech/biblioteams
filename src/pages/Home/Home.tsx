import type { JSX } from "react";
import Hero from "../../components/Hero/Hero";
import WorkShops from "../../components/WorkShops/WorkShops";
import Events from "../../components/Events/Events";
import CathalogHomeBar from "../../components/CathalogHomeBar/CathalogHomeBar";

export default function Home():JSX.Element {
  return (
   <>
    <Hero/> 
    <CathalogHomeBar/>
    <WorkShops/>
    <Events/>
    </> 
  )
}
