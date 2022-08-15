import {useEffect, useState} from 'react'
import getProducts from '../services/getProducts'

export function useProducts(id) {
    let categoryId = id
    const [products, setProducts] = useState([])
    useEffect(function(){
        getProducts(categoryId).then(products => {
            setProducts(products)
        })
    },[categoryId])
  return {products}
}
