import { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubColor: () => {}
  }
})

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black')
  const [subColor, setSubColor] = useState('red')

  const value = {
    state: { color, subColor },
    actions: { setColor, subColor }
  }
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  )
}
// const ColorConsumer = ColorContext.Consumer
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;