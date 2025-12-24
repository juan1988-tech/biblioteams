type ToggleBackgroundProps = {
  classToggleName:string
}

const ToggleBackground:React.FC<ToggleBackgroundProps> = ({classToggleName}:ToggleBackgroundProps) => {
  return (
    <button className={classToggleName}>
        <span className="absolute top-[calc(50%-10px)] flex w-5 h-5 rounded-full border-2 border-black items-center justify-center">
          <img src="/assets/solar_sun-broken.svg"/>
        </span>
    </button> 
  )
}

export default ToggleBackground;
