import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import '../styles/Header.css'

export const Header = () => {

  const showCategories = () => {
    const element: HTMLElement | null = document.querySelector('.CategoriesQuestions');
    const unshow: HTMLElement | null = document.querySelector('.unshow');
    
    unshow ?
    element?.classList.remove('unshow')
    : element?.classList.add('unshow')
  }

  return (
    <div className='Header'>
      <div className='Header-logo'>
        logo
      </div>
      <div className='Header-menu'
        onClick={showCategories}
      >
        <AiOutlineMenu />
      </div>
    </div>
  )
}
