import styles from './styles.modules.scss?inline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동 라우팅
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { recoilTestState } from '@/states/recoilTestState';

const TestRecoil = () => {
  const navigate = useNavigate();
  const [recoilTest, setRecoilTest] = useRecoilState(recoilTestState); // recoil state 가져옴
  // const defaultRecoilTestState = {...recoilTest}; // recoil 초기값 지정

  // recoil 버튼 event
  const handleRecoilBtn = () => {
    setRecoilTest(recoilTest + 1);
  };

  return (
    <div className={styles.testWrap}>
      <div className={styles.btnWrap} onClick={handleRecoilBtn}>
        <button>
          recoil 값 + 1
        </button>
      </div>
      <div>
        {recoilTest}
      </div>
    </div>
  )
}

export default TestRecoil;