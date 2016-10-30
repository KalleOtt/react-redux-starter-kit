import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { Button, Chip } from 'react-toolbox'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
    <br/>
    <Button
      label='Test button'
      primary
    />
    <br/>
    <Chip>Test chip</Chip>
  </div>
)

export default HomeView
