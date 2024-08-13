import React, { useState } from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faEye, faComment, faBrain } from '@fortawesome/free-solid-svg-icons';
import './App.css';

interface IData {
  totalScore: number;
  description: string;
  reaction: number;
  memory: number;
  verbal: number;
  visual: number;
}


const DATA: Array<IData> = [
  {
    totalScore: 76,
    description: 'You scored higher then 65% of the people who have taken these tests.',
    reaction: 80,
    memory: 92,
    verbal: 61,
    visual: 72
  },
  {
    totalScore: 85,
    description: 'You scored higher then 80% of the people who have taken these tests.',
    reaction: 83,
    memory: 96,
    verbal: 72,
    visual: 92
  },
  {
    totalScore: 61,
    description: 'You need to work more on your reaction.',
    reaction: 43,
    memory: 73,
    verbal: 61,
    visual: 70
  },
  {
    totalScore: 58,
    description: 'You need to work more on your memory.',
    reaction: 80,
    memory: 43,
    verbal: 52,
    visual: 60
  }
]

function App() {

  const [randonNum, setRandomNum] = useState(0);

  const getValue = () => {
    setRandomNum(Math.floor(Math.random() * 4))
  }

  return (
    <div className="App">
      <div className='Score'>
        <h3 style={{ color: '#cbc0ff' }}>Your Result</h3>
        <div className='Score-circle'>
          <h2 style={{ fontSize: 45, padding: 0, margin: 0 }}>{ DATA[randonNum].totalScore }</h2>
          <span style={{ color: '#8d83f5' }}>of 100</span>
        </div>
        <h4 style={{ fontSize: 22, color: '#fff' }}>Great</h4>
        <p style={{ color: '#d9d8f3', fontSize: 13, paddingInline: 20, marginTop: -10 }}> { DATA[randonNum].description }</p>
      </div>
      <div className='Summary'>
        <h3 style={{ color: '#000' }}>Summary</h3>
        <ul>
          <li><span style={{ color: '#e96a6e', fontWeight: '500' }}><FontAwesomeIcon icon={faBolt} fontSize={20} style={{ paddingRight: 10 }} />Reaction</span><span style={{ fontWeight: '500' }}>{DATA[randonNum].reaction} / <span style={{ color: '#9994a0' }}>100</span></span></li>
          <li><span style={{ color: '#e2c270', fontWeight: '500' }}><FontAwesomeIcon icon={faBrain} fontSize={20} style={{ paddingRight: 10 }} />Memory</span><span style={{ fontWeight: '500' }}>{DATA[randonNum].memory} / <span style={{ color: '#9994a0' }}>100</span></span></li>
          <li><span style={{ color: '#58ae9b', fontWeight: '500' }}><FontAwesomeIcon icon={faComment} fontSize={20} style={{ paddingRight: 10 }} />Verbal</span><span style={{ fontWeight: '500' }}>{DATA[randonNum].verbal} / <span style={{ color: '#9994a0' }}>100</span></span></li>
          <li><span style={{ color: '#343eb4', fontWeight: '500' }}><FontAwesomeIcon icon={faEye} fontSize={20} style={{ paddingRight: 10 }} />Visual</span><span style={{ fontWeight: '500' }}>{DATA[randonNum].visual} / <span style={{ color: '#9994a0' }}>100</span></span></li>
        </ul>
        <button className='ContinueBtn' onClick={getValue}>Continue</button>
      </div>
    </div>
  );
}

export default App;
