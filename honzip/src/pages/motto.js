import React from 'react';
import '../css/motto.css';
import navLogo from '../img/navLogo.png';

function App() {
    return (
        <div>
            <header>
                <img src={navLogo} />
                <div className='v-line'></div>

                <ul className='nav-list'>
                    <li className='nav-item'><a href='#' className='nav-link'>이달의 가훈</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>오늘의 요리</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>이달의 지출</a></li>
                </ul>
            </header>
        </div>
    );
}

export default App;





/*
import React from 'react';
import Motto from './js/motto'; // 경로는 실제 파일 위치에 따라 조정해야 합니다.

function App() {
  return (
    <div>
      <Motto />
    </div>
  );
}

export default App;
*/