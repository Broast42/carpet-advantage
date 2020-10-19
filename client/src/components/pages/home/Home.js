import React from 'react';
import TagBox from './components/TagBox';
import New from './components/New';
import ElectroStatic from './components/ElectroStatic'

function Home() {

    return (
        <main>
            <TagBox/>
            <New />
            <ElectroStatic />

        </main>
        
    );
}

export default Home;