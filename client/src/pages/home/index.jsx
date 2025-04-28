import React from 'react'
import { PhaserGame } from '../../game/PhaserGame';
const Home = () => {
  return (
    <div className="bg-[#1b1c24] h-[100vh] flex items-center justify-center flex-col gap-10"> 
        <PhaserGame />
    </div>
  )
}

export default Home;