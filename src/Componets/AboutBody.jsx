import React from 'react'
import Aboutinfo from './AboutInfo'
import AboutSkill from './AboutSkill'
import Heading from "./Heading"

export default function AboutBody() {
  return (
    <>
   <Heading 
   text="About Me"/>
    <Aboutinfo/>
    <AboutSkill/>
    </>
  )
}
