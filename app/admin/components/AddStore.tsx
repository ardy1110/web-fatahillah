import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import React from 'react'

const AddStore = () => {
  return (
    <div><Button
        // onClick={() => setOpenCategoryModal(true)}
        title="Tambah Toko Baru"
        className="p-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 cursor-pointer"
      >
        <PlusCircle size={18} />
      </Button></div>
  )
}

export default AddStore