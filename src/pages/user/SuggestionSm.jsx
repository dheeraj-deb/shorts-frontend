import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, MobileNav } from '../../components/user'
import Suggestion from '../../components/user/suggestion/Suggestion'

function SuggestionSm() {
  const navigate = useNavigate()
  const targetWidth = 720

  function getWindowWidth() {
    if (window.innerWidth >= targetWidth) {
      navigate('/')
    }
  }

  window.addEventListener("resize", getWindowWidth)

  return (
    <div >
      <Header />
      <MobileNav />
      <div className="pt-[4.3rem]">
        <Suggestion />
      </div>
    </div>
  )
}


export default SuggestionSm