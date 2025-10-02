/*
  Warnings:

  - Made the column `categories` on table `Toko` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Toko" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "categories" TEXT NOT NULL
);
INSERT INTO "new_Toko" ("categories", "id", "name") SELECT "categories", "id", "name" FROM "Toko";
DROP TABLE "Toko";
ALTER TABLE "new_Toko" RENAME TO "Toko";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
