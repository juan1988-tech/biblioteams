import { useToggleBurguer } from "./useToggleBurguer"

const BurguerButton = () => {
   const { burguerLines,handleButtonBurguer } = useToggleBurguer();
  return (
    <section className="flex relative flex-coljustify-evenly z-20 w-12 h-12 tablet-hor:hidden left-8 top-3 cursor-pointer max-cellphone-hor:left-4"
     onClick={handleButtonBurguer}>
       {
        burguerLines.map((line)=>(
            <div className={line.classElement}></div>
        ))
       }
    </section>
  )
}

export default BurguerButton
