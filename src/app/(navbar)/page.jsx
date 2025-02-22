"use client"
import DarkScreen from '@/components/Layout/DartkScreen/DarkScreen'
import Sidebar from '@/components/Layout/Sidebar/Sidebar'
import BurguerButton from '@/elements/BurguerButton'
import React from 'react'

export default function Page() {
  const [buttonBurguer,setButtonBurguer] = React.useState(true)
  return (
    <>
    <BurguerButton buttonBurguer={buttonBurguer} setButtonBurguer={setButtonBurguer}/>
    <Sidebar buttonBurguer={buttonBurguer} setButtonBurguer={setButtonBurguer}/>
    <DarkScreen buttonBurguer={buttonBurguer} setButtonBurguer={setButtonBurguer}/>
    </>
  )
}
