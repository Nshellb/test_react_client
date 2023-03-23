import styles from './styles.modules.scss?inline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동 라우팅
import axios from 'axios';

const Test = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.testWrap}>
      <div className={styles.btnWrap}>
        <button className={styles.testBtn} onClick={() => navigate('/test/api')}>
          API 호출 테스트
        </button>
        <button className={styles.testBtn} onClick={() => navigate('/test/recoil')}>
          Recoil 테스트
        </button>
      </div>
    </div>
  )
}

export default Test;