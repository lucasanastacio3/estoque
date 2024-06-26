"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package2Icon, SearchIcon } from "@/components/svgs/svgs";
import { DataProduct } from "@/helpers/interfaces/dataTableInterface";
import { Navbar } from "@/components/navbar/navbar";
import { TableProducts } from "@/components/tables/tableProducts";
import { useEffect, useState } from "react";
import { CreateProductsModal } from "@/components/modal/CreateProductsModal";
import { DropDown } from "@/components/dropDown/dropDown";
import { getProducts } from "../api/route";

export default function Inventory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataProducts, setDataProducts] = useState<DataProduct[]>([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getProducts().then((data) => setDataProducts(data));
  }, []);

  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <Navbar />
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </Link>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                    placeholder="Buscar produtos..."
                    type="search"
                  />
                </div>
              </form>
            </div>
            <DropDown />
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center">
              <h1 className="font-semibold text-lg md:text-2xl">Estoque</h1>
              <Button
                className="ml-auto bg-black text-white"
                size="sm"
                onClick={openModal}
              >
                Adicionar
              </Button>
              {isModalOpen && (
                <CreateProductsModal
                  onClose={closeModal}
                  isOpen={isModalOpen}
                />
              )}
            </div>
            <div className="border shadow-sm rounded-lg">
              <TableProducts data={dataProducts} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
