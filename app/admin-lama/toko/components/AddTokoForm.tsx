"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Definisikan ulang Enum Categories yang ada di Prisma agar bisa digunakan di sisi client
enum Categories {
  Minuman = "Minuman",
  Makanan = "Makanan",
  Snack = "Snack",
}

export default function AddTokoButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  // Set nilai awal categories ke salah satu nilai Enum, misalnya Makanan
  const [categories, setCategories] = useState<Categories>(Categories.Makanan);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/toko", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Pastikan categories adalah string saat dikirim
        body: JSON.stringify({ name, categories }),
      });

      if (!res.ok) {
        // Coba baca respons error jika ada
        const errorData = await res.json();
        throw new Error(
          `Gagal menambahkan toko: ${errorData.message || res.statusText}`
        );
      }

      // Reset form, tutup modal, dan refresh data
      setName("");
      setCategories(Categories.Makanan); // Reset ke nilai default
      setIsOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Terjadi kesalahan saat menyimpan data. Cek konsol untuk detail.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Tombol Utama untuk Membuka Modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 mb-6 text-white bg-amber-600 rounded-lg cursor-pointer shadow-md hover:bg-amber-700 transition duration-150 ease-in-out font-medium"
      >
        Tambah Toko
      </button>
      {/* ----------------- Modal ----------------- */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />

          {/* Konten Modal */}
          <div className="relative z-10 bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4 transform transition-all duration-300">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h3 className="text-2xl font-bold text-gray-800">
                Form Toko Baru
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-3xl font-light cursor-pointer"
                aria-label="Tutup"
              >
                &times;
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Input Nama Toko */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Toko
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                />
              </div>

              {/* SELECT Kategori (Perubahan di sini) */}
              <div>
                <label
                  htmlFor="categories"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pilih Kategori
                </label>
                <select
                  id="categories"
                  value={categories}
                  // Perhatikan cara menangani perubahan nilai enum
                  onChange={(e) => setCategories(e.target.value as Categories)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                >
                  {/* Mapping nilai dari enum Categories untuk mengisi opsi dropdown */}
                  {Object.values(Categories).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 border border-transparent rounded-md cursor-pointer shadow-sm text-sm font-medium text-white transition duration-150 ease-in-out ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-amber-600 hover:bg-amber-700"
                }`}
              >
                {loading ? "Menyimpan..." : "Simpan Toko"}
              </button>
            </form>
          </div>
        </div>
      )}
      {/* ----------------- Akhir Modal ----------------- */}
    </>
  );
}

// (Escape key handling is implemented inside the component through browser default or can be added if needed)
