export type FormCathalogProps ={
  placeholder: string,
  questBook: string,
  inputHandler: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

export interface classNameCathalogSearch{
  clasNameForm:string,
  classNameInput:string,
  classNameButton:string,
  imageSrc:string,
  classNameOutput:string,
}

export type controlSelectorValuesProps = {
    searcherSelectorRender: boolean,
    searcherValueSelector:string,
    indicatorValue: string,
}