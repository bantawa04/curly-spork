import React from 'react'

const Form2: React.FC = () => {
  return (
    <div className="formikForm-Wrapper">
      <h1 className="text-2xl font-bold mx-4">Product Form</h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-black text-sm font-medium mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-black text-sm font-medium mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-black text-sm font-medium mb-2"
          >
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="brand"
            className="block text-black text-sm font-medium mb-2"
          >
            Brand:
          </label>
          <select
            id="brand"
            name="brand"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            required
          >
            <option value="">Select a brand</option>
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
            <option value="brand3">Brand 3</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
export default Form2
