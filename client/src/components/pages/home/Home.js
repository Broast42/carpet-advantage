import React from 'react';
import TagBox from './components/TagBox';
import New from './components/New';
import ElectroStatic from './components/ElectroStatic'
import BottomTagBox from './components/BottomTagBox'

function Home() {

    return (
        <main>
            <TagBox/>
            <New />
            <ElectroStatic />
            <BottomTagBox />
        </main>
        
    );
}

export default Home;