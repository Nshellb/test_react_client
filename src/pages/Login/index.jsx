import styles from './styles.modules.scss?inline';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'; // 페이지 이동 라우팅

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.loginWrap}>
      <div className={styles.headerText}>Login</div>
      <div className={styles.inputField}>
        <input type="text" className={styles.idInput} />
        <input type="password" className={styles.pwInput} />
      </div>
      <div>
        <button className={styles.loginBtn}>
          로그인
        </button>
      </div>
    </div>
  )
}

export default Login;