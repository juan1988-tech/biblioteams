import SelectCathalog from "../SelectCathalog/SelectCathalog"
import { ButtonCathalogOptions } from "../ButtonCathalogOptions/ButtonCathalogOptions"


const SelectButtonsCathalog = () => {
  return (
    <section className="flex justify-between col-span-4 tablet-hor:hidden">
      <SelectCathalog  label="Buscar por" selectName="find-book" selectClassName="flex flex-col w-1/3 relative max-w-50"/>
      <SelectCathalog  label="Ordenar por" selectName="order-book" selectClassName="flex flex-col w-1/3 relative max-w-50 ml-1"/>
      <ButtonCathalogOptions />
    </section>
  )
}

export default SelectButtonsCathalog
