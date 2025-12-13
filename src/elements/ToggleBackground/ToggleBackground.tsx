import lightSunIcon from '../../../public/solar_sun-broken.svg';

const ToggleBackground = () => {
  return (
    <button className="relative w-11.5 h-6 rounded-full border-2 border-black">
        <span className="absolute top-[calc(50%-10px)] flex w-5 h-5 rounded-full border-2 border-black items-center justify-center">
          <img src={lightSunIcon}/>
        </span>
    </button> 
  )
}

export default ToggleBackground
