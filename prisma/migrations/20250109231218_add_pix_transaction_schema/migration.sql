-- CreateTable
CREATE TABLE "pix_transactions" (
    "id" TEXT NOT NULL,
    "senderKey" TEXT NOT NULL,
    "value_in_cents" INTEGER NOT NULL,
    "customer_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pix_transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pix_transactions" ADD CONSTRAINT "pix_transactions_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
