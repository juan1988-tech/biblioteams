import type { SelectCathalogProps } from "./types"

const SelectCathalog:React.FC<SelectCathalogProps> = ({label,selectName,selectClassName}) => {
  return (
    <div className={selectClassName}>
     <label className="text-font-p bold text-tittle-blue font-bold" >{label}</label>  
      <img src="/assets/ep_arrow-black.svg" className="w-4 h-4 absolute top-9 left-30"/>
       <select name={selectName} className="appearance-none h-9 p-2 border-2 border-main-black rounded-md">    
        <option value="author">Autor</option> 
        <option value="year">Año</option>
        <option>Disponibilidad</option> 
      </select>
    </div>
  )
}

export default SelectCathalog
