import React from 'react';
import TagBox from './components/TagBox';
import New from './components/New';
import ElectroStatic from './components/ElectroStatic'
import BottomTagBox from './components/BottomTagBox'
import SheduleForm from './components/ScheduleForm';
import { Alert } from 'antd';
import { message } from '../../../data';

function Home() {

    return (
        <main>
            <TagBox/>
            {message.status === true ?
                <div className="home-message">
                    <Alert
                    message={message.title}
                    description={message.message}
                    type="info"
                />
                </div>
            :
                null
            }
            <SheduleForm />
            <New />
            <ElectroStatic />
            <BottomTagBox />
        </main>
        
    );
}

export default Home;