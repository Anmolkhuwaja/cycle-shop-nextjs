import React from 'react'
import Bicycles from '../../components/bicycles-page/Bicycles'

const BicyclesPage = ({ searchParams }) => {
  return (
    <>
    <Bicycles searchParams={searchParams} />
    </>
  )
}

export default BicyclesPage