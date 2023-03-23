import { atom, selector } from 'recoil';

// 호출하는 atom 정보
export const recoilTestState = atom({
  key: 'recoilTestState', // atom을 호출하는 unique한 key
  default: 0 // atom의 기본(초기)값
});


// --- Ts ---
// atom 저장 형태
// export interface TestState {
//   value: number
// };
//
// // atom 초기값
// const initialState: TestState = {
//   value: 0
// };
//
// // 호출하는 atom 정보
// export const recoilTestState = atom({
//   key: 'recoilTestState', // atom을 호출하는 unique한 key
//   default: initialState // atom의 기본(초기)값
// });