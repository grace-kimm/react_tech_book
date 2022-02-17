import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase')
const btnDecrease = document.querySelector('#decrease');

// action name
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// action creator
const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = difference => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

// initial value
const initialState = {
  toggle: false,
  counter: 0
};

// reducer
// state가 undefined 일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
  // action.type에 따라 다른 작업 처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지 필요
        toggle: !state.toggle
      }
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
  }
}

const store = createStore(reducer);
const render = () => {
  const state = store.getState() // 현재 상태 불러오기
  // toggle event
  if (state.toggle) {
    divToggle.classList.add('active')
  } else {
    divToggle.classList.remove('active')
  }
  // counter 처리
  counter.innerText = state.counter
}

render();
store.subscribe(render); // 상태 업데이트 될 때마다 render 함수 호출

// DOM click 되면 각 액션 호출

divToggle.onclick = () => {
  console.log('toggle clicked')
  store.dispatch(toggleSwitch());
}

btnIncrease.onclick = () => {
  console.log(counter.innerText)
  store.dispatch(increase(1))
}
btnDecrease.onclick = () => {
  console.log(counter.innerText)
  store.dispatch(decrease())
}