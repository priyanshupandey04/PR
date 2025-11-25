import React from 'react'
import PoliticalServices from './PoliticalServices'
import PoliticalLogo from './PoliticalLogo'
import PoliticiansWorked from './PoliticiansWorked'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='w-full '>
        <PoliticalLogo />
        <PoliticalServices />
        <PoliticiansWorked />
    </div>
  )
}

export default Hero