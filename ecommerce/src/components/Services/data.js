import React from 'react'
import { IoMdRocket, IoReload } from 'react-icons/io'
import { FiLock } from 'react-icons/fi'
import { BsTags } from 'react-icons/bs'
import { IoReloadCircleSharp } from 'react-icons/io5'
export const Data = [
  {
    id: 0,
    icon: <IoMdRocket />,
    title: 'FREE SHIPING',
    info: ' Orders over $100',
  },
  {
    id: 1,
    icon: <IoReloadCircleSharp />,
    title: 'FREE RETURN',
    info: ' Within 30 days returns',
  },
  {
    id: 2,
    icon: <FiLock />,
    title: 'SUCURE PAYMENT',
    info: ' 100% secure payment',
  },
  {
    id: 3,
    icon: <BsTags />,
    title: 'BEST PEICE',
    info: ' Guaranteed price',
  },
]
