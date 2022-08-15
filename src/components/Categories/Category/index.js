import React from 'react'
import { useParams } from "react-router-dom";
import ListOfProducts from '../../Products/ListOfProducts';
import { useProducts } from '../../../hooks/useProducts';

// en postman https://devcito-eshop.herokuapp.com/api/v1/products?categories=5f15d467f3a046427a1c26e1

export default function Category() {
  let params = useParams();
  const {products} = useProducts(params.id)

  return (
    <>
    <ListOfProducts products={products} />
    </>
  )
}
