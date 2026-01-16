import SelectCathalog from "../SelectCathalog/SelectCathalog"
import { ButtonCathalogOptions } from "../ButtonCathalogOptions/ButtonCathalogOptions"

const SelectButtonsCathalog = () => {
  return (
    <section className="flex justify-between col-span-4 max-tablet-hor:hidden tablet:hidden max-tablet:flex max-tablet:w-2/3 max-tablet:mx-auto max-w-169.5 
      max-cellphone-hor:items-center max-cellphone-hor:gap-y-1 max-cellphone-hor:w-full max-cellphone:flex-col gap-2">
      <SelectCathalog  label="Ordenar por" selectName="order-book" selectClassName="flex flex-col w-full relative ml-1 
      max-tablet:w-2/3 max-cellphone-hor:w-full max-cellphone:ml-0"/>
      <ButtonCathalogOptions />
    </section>
  )
}

export default SelectButtonsCathalog
