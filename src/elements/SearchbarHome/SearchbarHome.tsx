import type { SearchbarHomeProps } from './types'
import ButtonCathalogSearch from '../ButtonCathalogSearch/ButtonCathalogSearch'
import SearcherSelector from '../SearcherSelector/SearcherSelector'
import { classNameHome } from './data'


const SearchbarHome: React.FC<SearchbarHomeProps> = ({
  placeholder,
  controlSelectorValues,
  handleChangeSelector,
  onCloseSearcher,
  handleSearchValue,
  setClassNameSelector
}) => {
  return (
    <section className="flex flex-col w-full">
      <form className={classNameHome.clasNameForm}>
        <input
          type="text"
          className={classNameHome.classNameInput}
          placeholder={placeholder}
          onChange={e => handleSearchValue(e.target.value)}
        />
        <section className="flex">
          <ButtonCathalogSearch onClickEvent={handleChangeSelector} />
          <button
            className={classNameHome.classNameButton}
            onClick={onCloseSearcher}
            onMouseOver={() => setClassNameSelector(false)}
            onMouseLeave={() => setClassNameSelector(true)}
            type="button"
          >
            <img className="w-4 h-4" src={classNameHome.imageSrc} alt="Buscar libro" />
          </button>
        </section>
        {controlSelectorValues.searcherSelectorRender ? (
          <SearcherSelector onClickEvent={handleChangeSelector} handleSearchValue={handleSearchValue} />
        ) : null}
      </form>
      <article className="w-full mt-2">
        <h4 className="text-light-blue-button font-bold">Buscar por:</h4>
        <p className="ml-1 text-white-font">{controlSelectorValues.indicatorValue}</p>
      </article>
    </section>
  )
}

export default SearchbarHome
