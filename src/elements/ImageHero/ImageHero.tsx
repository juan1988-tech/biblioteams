import type { ImageHeroProps } from "./types"

const ImageHero = ({src,className,alt}:ImageHeroProps):React.ReactElement => {
  return <img src={src} className={className} alt={alt}/>
}

export default ImageHero
