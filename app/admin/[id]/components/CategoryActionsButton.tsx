"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FolderOpen, PencilIcon, X, Trash2 } from "lucide-react";
import { Categories } from "@/lib/types";
import { toast } from "sonner";
// import Image from "next/image";
import { deleteCategory, updateCategory } from "../../components/actions";
import SubmitButton from "../../components/SubmitButton";

interface CategoryActionsButtonProps {
  storeId: number;
  categories: Categories[];
}

const CategoryActionsButton = ({
  storeId,
  categories,
}: CategoryActionsButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(null);
  // const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Filter categories berdasarkan storeId
  const filteredCategories = categories.filter(
    (cat) => cat.storeId === storeId
  );

  const handleEdit = (category: Categories) => {
    setSelectedCategory(category);
    // setPreviewImage(category.imageUrl || null);
    setIsEditModalOpen(true);
  };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreviewImage(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedCategory(null);
    // setPreviewImage(null);
  };

  const handleDelete = (category: Categories) => {
    setSelectedCategory(category);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedCategory(null);
  };

  const confirmDelete = async () => {
    if (selectedCategory) {
      const result = await deleteCategory(storeId, selectedCategory.id);
      if (result?.success === false) {
        toast.error(result.message);
      } else {
        toast.success("Kategori berhasil dihapus!");
        handleCloseDeleteModal();
        setIsModalOpen(false);
      }
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded cursor-pointer"
      >
        <FolderOpen size={18} />
        Kelola Kategori
      </Button>

      {/* Modal List Categories */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-200"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="category-modal-title"
        >
          <div
            className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2
                id="category-modal-title"
                className="text-lg font-semibold text-gray-800"
              >
                Daftar Kategori
              </h2>
              <Button
                variant="ghost"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-800 cursor-pointer"
                aria-label="Tutup modal"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Content */}
            <div className="space-y-2">
              {filteredCategories.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <FolderOpen size={48} className="mx-auto mb-2 opacity-30" />
                  <p>Belum ada kategori</p>
                </div>
              ) : (
                filteredCategories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center overflow-hidden">
                    
                          <FolderOpen size={20} className="text-amber-600" />
                        
                      </div>
                      <span className="font-medium text-gray-700">
                        {category.name}
                      </span>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      {/* Edit Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(category)}
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 cursor-pointer"
                      >
                        <PencilIcon size={16} />
                      </Button>
                      {/* Delete Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(category)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t">
              <p className="text-sm text-gray-500 text-center">
                Total: {filteredCategories.length} kategori
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal Edit Category */}
      {isEditModalOpen && selectedCategory && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] transition-opacity duration-200"
          onClick={handleCloseEditModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-category-modal-title"
        >
          <div
            className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2
                id="edit-category-modal-title"
                className="text-lg font-semibold text-gray-800"
              >
                Edit Kategori
              </h2>
              <Button
                variant="ghost"
                onClick={handleCloseEditModal}
                className="text-gray-500 hover:text-gray-800"
                aria-label="Tutup modal"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Form */}
            <form
              action={async (formData) => {
                const result = await updateCategory(selectedCategory.id, formData);
                if (result.success) {
                  toast.success(result.message);
                  handleCloseEditModal();
                  setIsModalOpen(false);
                } else {
                  toast.error(result.message);
                }
              }}
              className="space-y-4"
            >
              <input type="hidden" name="storeId" value={storeId} />

              {/* Nama Kategori */}
              <div>
                <label htmlFor="edit-category-name" className="block text-sm font-medium mb-2">
                  Nama Kategori
                </label>
                <input
                  id="edit-category-name"
                  type="text"
                  name="name"
                  defaultValue={selectedCategory.name}
                  required
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
                  placeholder="Masukkan nama kategori"
                />
              </div>

              {/* Image Upload */}
              {/* <div>
                <label htmlFor="edit-category-image" className="block text-sm font-medium mb-2">
                  Gambar Kategori
                </label>
                
                {previewImage && (
                  <div className="mb-3 relative w-32 h-32 mx-auto">
                    <Image
                      src={previewImage}
                      width={200}
                      height={200}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg border-2 border-gray-200"
                    />
                  </div>
                )}

                <div className="relative">
                  <input
                    id="edit-category-image"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="edit-category-image"
                    className="flex items-center justify-center gap-2 w-full border-2 border-dashed rounded-md p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <Upload size={18} className="text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {previewImage ? "Ganti Gambar" : "Upload Gambar"}
                    </span>
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Format: JPG, PNG, GIF (Maks. 5MB)
                </p>
              </div> */}

              {/* Submit Button */}
              <SubmitButton />
            </form>
          </div>
        </div>
      )}

      {/* Modal Delete Category */}
      {isDeleteModalOpen && selectedCategory && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] transition-opacity duration-200"
          onClick={handleCloseDeleteModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-category-modal-title"
        >
          <div
            className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2
                id="delete-category-modal-title"
                className="text-lg font-semibold text-gray-800"
              >
                Hapus Kategori
              </h2>
              <Button
                variant="ghost"
                onClick={handleCloseDeleteModal}
                className="text-gray-500 hover:text-gray-800 cursor-pointer"
                aria-label="Tutup modal"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Content */}
            <div className="mb-6">
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Trash2 size={24} className="text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    {selectedCategory.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Kategori ini akan dihapus
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                Apakah Anda yakin ingin menghapus kategori ini? Tindakan ini tidak dapat dibatalkan.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleCloseDeleteModal}
                className="flex-1 cursor-pointer"
              >
                Batal
              </Button>
              <Button
                onClick={confirmDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white cursor-pointer"
              >
                Hapus
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryActionsButton;