import {useEffect, useState} from 'react'
import getCategories from '../services/getCategories'

export function useCategories() {
    const [categories, setCategories] = useState([])
    useEffect(function(){
        getCategories().then(categories => {
            setCategories(categories)
        })
    },[])
  return {categories}
}
