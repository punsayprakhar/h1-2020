import React from 'react';

import SlotM from './SlotM';

const App = () => {
    return (
        <>
            <h1 className="heading__style"> 🎰 Welcome to
            <span style={{ color: '#000' }}> Slot Machine </span> 🎰
        </h1>
            <div className='slot_outer'>
                <SlotM x='😄' y='😄' z='😄'/>
                <SlotM x='🎅' y=' 🍎' z=' 🍌 '/>
                <SlotM x=' 💟 ' y=' 😻' z='🌶'/>
            </div>
        </>
    )
}

export default App;