-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "Model_No" TEXT NOT NULL,
    "Company_Name" TEXT NOT NULL,
    "Item_type" TEXT NOT NULL,
    "Price" INTEGER NOT NULL,
    "Item_Description" TEXT NOT NULL,
    "Type" TEXT,
    "Series" TEXT NOT NULL,
    "Size" TEXT NOT NULL,
    "Color" TEXT NOT NULL,
    "Product_url" TEXT NOT NULL,
    "Extra" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "id" SERIAL NOT NULL,
    "Code" TEXT NOT NULL,
    "GiftItem" TEXT NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "RiderNote" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
