export type SearchBarCathalogProps = {
  placeholder: string
  questBook: string
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  controlSelectorValues: {
    searcherSelectorRender: boolean
    indicatorValue: string
  }
  handleChangeSelector: (e: React.MouseEvent) => void
  onCloseSearcher: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleSearchValue: (value: string) => void
  setClassNameSelector: (value: boolean) => void
}
