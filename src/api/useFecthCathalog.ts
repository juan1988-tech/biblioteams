//import { cathalogBooks } from "./bookCathalog";
//import { useEffect, useState } from "react";
//import { cathalogBook } from "./types";

export const useFetchCathalog = async () =>{

    const req = await fetch('../../public/api/cathalogBook.json');

    return req;
}