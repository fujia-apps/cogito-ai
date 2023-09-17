import { Tabs, TabsProps } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ScreenContiner,
  ScreenHeader
} from './styles';
import { FaceDetect } from './FaceDetect';
import { GestureComp } from './Gesture';
import { HumansegComp } from './Humanseg';
import { MobilenetComp } from './Mobilenet';
import { OcrComp } from './Ocr';
import { OcrDetectionComp } from './OcrDetection';

const items: TabsProps['items'] = [
  {
    key: 'face-detect',
    label: 'Face Detect',
    children: <FaceDetect />,
  },
  {
    key: 'gesture',
    label: 'Gesture',
    children: <GestureComp />,
  },
  {
    key: 'humanseg',
    label: 'Humanseg',
    children: <HumansegComp />,
  },
  {
    key: 'mobilenet',
    label: 'Mobilenet',
    children: <MobilenetComp />,
  },
  {
    key: 'ocr',
    label: 'Ocr',
    children: <OcrComp />,
  },
  {
    key: 'ocr-detect',
    label: 'Ocr Detection',
    children: <OcrDetectionComp />,
  },
];

export const PaddlePage = () => {
  const [activeTab, setActiveTab] = useState('mobilenet');
  const onChange = (key: string) => {
    setActiveTab(key)
  };
  return <ScreenContiner>
    <ScreenHeader>
      <div>Paddle.js应用</div>
      <Link to="/">go back</Link>
    </ScreenHeader>
    <div>
      <Tabs defaultActiveKey={activeTab}
        tabPosition="left" items={items} onChange={onChange} />
    </div>
  </ScreenContiner>
};