export type SearchbarHomeProps = {
  placeholder: string
  controlSelectorValues: {
    searcherSelectorRender: boolean
    indicatorValue: string
  }
  handleChangeSelector: (e: React.MouseEvent) => void
  onCloseSearcher: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleSearchValue: (value: string) => void
  setClassNameSelector: (value: boolean) => void
}
