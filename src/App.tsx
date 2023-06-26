import { useState } from 'react'
import Form1 from './component/ReactHookForm'
function App() {
  const [enabled, setEnabled] = useState(false)
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="relative flex flex-col items-center">
          <div className="flex">
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={enabled}
                readOnly
              />
              <div
                onClick={() => {
                  setEnabled(!enabled)
                }}
                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
              ></div>
              <span className="ml-2 text-sm font-medium text-gray-900">
                Edit mode
              </span>
            </label>
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
