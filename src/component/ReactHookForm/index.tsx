import React, { useEffect } from 'react'
import { Resolver, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Product } from '../../utils'

interface IFormProps {
  productData?: Product
  edit: boolean
}

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().min(8).required(),
  price: yup.number().min(1).max(1000).required(),
  brand: yup.string().required(),
})
const Form1: React.FC<IFormProps> = ({ productData, edit }) => {
  const initialValues = {
    title: '',
    description: '',
    price: 0,
    brand: '',
  }
  console.log(initialValues)
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: productData ?? initialValues,
    resolver: yupResolver(schema) as Resolver<Partial<Product>, any>,
  })

  useEffect(() => {
    if (!edit) {
      reset(initialValues)
    }
  }, [edit, reset, initialValues])

  const onSubmit = (data: any) => {
    alert('Submitted data' + JSON.stringify(data))
  }

  useEffect(() => {
    setValue('title', productData?.title || '')
    setValue('description', productData?.description || '')
    setValue('price', productData?.price || 0)
    setValue('brand', productData?.brand || '')
  }, [productData, setValue])
  return (
    <div className="reactHookForm-Wrapper" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold mb-4">React Hook Form</h1>
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
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            {...register('title')}
          />
          {errors.title ? (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          ) : null}
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
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            {...register('description')}
          ></textarea>
          {errors.description ? (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          ) : null}
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
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            {...register('price')}
          />
          {errors.price ? (
            <span className="text-red-500 text-sm">{errors.price.message}</span>
          ) : null}
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
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            {...register('brand')}
            value={productData?.brand || ''}
          >
            <option value="">Select a brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Oppo">Oppo</option>
          </select>
          {errors.brand ? (
            <span className="text-red-500 text-sm">{errors.brand.message}</span>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-black text-white py-2 mb-2 px-4 rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
export default Form1
