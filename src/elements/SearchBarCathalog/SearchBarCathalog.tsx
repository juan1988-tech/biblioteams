import type { SearchBarCathalogProps } from './types'
import ButtonCathalogSearch from '../ButtonCathalogSearch/ButtonCathalogSearch'
import SearcherSelector from '../SearcherSelector/SearcherSelector'
import { classNameCathalog } from './data'

const SearchBarCathalog: React.FC<SearchBarCathalogProps> = ({
  placeholder,
  questBook,
  inputHandler,
  controlSelectorValues,
  handleChangeSelector,
  onCloseSearcher,
  handleSearchValue,
  setClassNameSelector
}) => {
  return (
    <section className="flex flex-col w-full">
      <form className={classNameCathalog.clasNameForm}>
        <input
          type="text"
          className={classNameCathalog.classNameInput}
          placeholder={placeholder}
          value={questBook}
          onChange={inputHandler}
        />
        <section className="flex">
          <ButtonCathalogSearch onClickEvent={handleChangeSelector} />
          <button
            className={classNameCathalog.classNameButton}
            onClick={onCloseSearcher}
            onMouseOver={() => setClassNameSelector(false)}
            onMouseLeave={() => setClassNameSelector(true)}
            type="button"
          >
            <img className="w-4 h-4" src={classNameCathalog.imageSrc} alt="Buscar libro" />
          </button>
        </section>
        {controlSelectorValues.searcherSelectorRender ? (
          <SearcherSelector onClickEvent={handleChangeSelector} handleSearchValue={handleSearchValue} />
        ) : null}
      </form>
      <article className={classNameCathalog.classNameOutput}>
        <h4 className="text-tittle-blue font-bold">Buscar por:</h4>
        <p className="ml-1">{controlSelectorValues.indicatorValue}</p>
      </article>
    </section>
  )
}

export default SearchBarCathalog
