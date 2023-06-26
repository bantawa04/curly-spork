import { useState } from 'react'
import Form1 from './component/ReactHookForm'
function App() {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    console.log(isChecked)
    setIsChecked(!isChecked)
  }
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Switch Button</h1>
        <div className="flex items-center">
          <label htmlFor="toggle" className="text-black mr-2">
            Toggle Switch
          </label>
          <div
            className={`relative inline-block w-10 h-6 align-middle select-none ${
              isChecked ? 'bg-black' : 'bg-gray-300'
            } rounded-full`}
          >
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              checked={isChecked}
              onChange={handleToggle}
            />
            <label
              htmlFor="toggle"
              className={`toggle-label absolute left-0 bg-white w-4 h-4 rounded-full transition transform ${
                isChecked ? 'translate-x-full bg-gray-300' : 'translate-x-0'
              }`}
            ></label>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="columns gap-10">
          <Form1 />
        </div>
      </div>
    </>
  )
}

export default App
