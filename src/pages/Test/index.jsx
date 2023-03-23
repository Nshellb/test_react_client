import styles from './styles.modules.scss?inline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동 라우팅
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [apiText, setApiText] = useState('');

  // get 호출 실행
  const handleGETBtn = () => {
    axios.get('http://localhost:3000/test')
      .then(
        (response) => {
          if (response.data.result === true) {
            console.log(response.data.message);
            setApiText(response.data.message);
          } else {
            console.log('get fail');
            setApiText('get fail');
          }
        }
      ).catch ((error) => {
        console.log(error);
      }
    );
  };

  // post 호출 실행
  const handlePOSTBtn = () => {
    axios.post('http://localhost:3000/test/post')
      .then(
        (response) => {
          if (response.data.result === true) {
            console.log(response.data.message);
            setApiText(response.data.message);
          } else {
            console.log('get fail');
            setApiText('get fail');
          }
        }
      ).catch ((error) => {
        console.log(error);
      }
    );
  };

  // params와 post 호출 실행
  const handlePOSTPBtn = () => {
    axios.post('http://localhost:3000/test/postp', {
      token: 11111,
      params: {
        param1: 'postp', // 'postp' 여부에 따라 요청 성공 여부 결정
        param2: 33,
      },
    })
      .then(
        (response) => {
          if (response.data.result == true) {
            console.log(response.data.message);
            setApiText(response.data.message);
          } else {
            console.log(response.data.message);
            setApiText(response.data.message);
          }
        }
      ).catch ((error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className={styles.testWrap}>
      <div className={styles.btnWrap}>
        <button className={styles.testBtn} onClick={handleGETBtn}>
          GET 테스트
        </button>
        <button className={styles.testBtn} onClick={handlePOSTBtn}>
          POST 테스트
        </button>
        <button className={styles.testBtn} onClick={handlePOSTPBtn}>
          POST 테스트 with Params
        </button>
      </div>
      <div>
        {apiText}
      </div>
    </div>
  )
}

export default Login;