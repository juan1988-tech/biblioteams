export type State ={
  favourite:boolean,
  share:boolean,
  reserve:boolean
}

export type Action = { type: "FAVOURITE" } |{ type: "NON-FAVOURITE" } | { type: "SHARE"} | { type: "NON-SHARE"} | { type: "RESERVE"}
| { type: "NON-RESERVE"}
