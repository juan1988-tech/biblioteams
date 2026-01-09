import SelectCathalog from "../SelectCathalog/SelectCathalog"
import { ButtonCathalogOptions } from "../ButtonCathalogOptions/ButtonCathalogOptions"

const SelectButtonsCathalog = () => {
  return (
    <section className="flex justify-between col-span-4 tablet-hor:hidden max-tablet:w-2/3 max-tablet:mx-auto max-w-169.5 
      max-cellphone-hor:items-center max-cellphone-hor:gap-y-1 max-cellphone-hor:w-full max-cellphone:flex-col">
      <SelectCathalog  label="Ordenar por" selectName="order-book" selectClassName="flex flex-col w-1/3 relative ml-1 
      max-tablet:w-2/4 max-cellphone-hor:w-full max-cellphone:ml-0"/>
      <ButtonCathalogOptions />
    </section>
  )
}

export default SelectButtonsCathalog
