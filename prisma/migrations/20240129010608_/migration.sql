/*
  Warnings:

  - You are about to drop the column `sesstionToken` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sessionToken]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sessionToken` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_sesstionToken_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "sesstionToken",
ADD COLUMN     "sessionToken" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_sessionToken_key" ON "users"("sessionToken");
