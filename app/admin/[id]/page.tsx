import React from 'react'

interface Store {
  id: number
  name: string
  categories: Categories[]
}

interface Categories {
    id: number
    name: string
    product: Product[]
}

interface Product {
    id: number
    name: string
}

interface DetailStoreProps {
  params: {
    id: string
  }
}

async function DetailStore({ params }: DetailStoreProps) {
  const { id } = params
  
  // Fetch data berdasarkan ID
  const res = await fetch(`http://localhost:3000/api/store/${id}`, {
    cache: 'no-store'
  })
  
  if (!res.ok) {
    return <div>Store not found</div>
  }
  
  const store: Store = await res.json()

  console.log(store);
  
  
  return (
    <div>
      <h1>Detail Store</h1>
      <p>ID: {store.id}</p>
      <p>Store Name: {store.name}</p>
      
      <p>Category : {}</p>
      <p>Product : {}</p>

    </div>
  )
}

export default DetailStore