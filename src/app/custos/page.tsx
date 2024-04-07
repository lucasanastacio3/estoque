"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar/navbar";
import { TableCosts } from "@/components/tables/tableCosts";
import { RegisterCostsInterface } from "@/helpers/interfaces/registerCostsInterface";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useForm } from "react-hook-form";

export default function Costs() {
  const { register, handleSubmit, reset } = useForm<RegisterCostsInterface>();
  const [savedData, setSavedData] = useState<RegisterCostsInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const dataCosts: RegisterCostsInterface[] = [
    {
      date: "10/10/2022",
      description: "teste",
      amount: 10.0,
    },
    {
      date: "10/10/2022",
      description: "teste",
      amount: 10.0,
    },
    {
      date: "10/10/2022",
      description: "Saida de produto tal",
      amount: 10.0,
    },
    {
      date: "10/10/2022",
      description: "teste",
      amount: 10.0,
    },
    {
      date: "10/10/2022",
      description: "teste",
      amount: 10.0,
    },
  ];

  const total = dataCosts.reduce((acc, item) => acc + item.amount, 0);
  const pageCount = Math.ceil(dataCosts.length / itemsPerPage);

  const onSubmit = (data: RegisterCostsInterface) => {
    setSavedData([...savedData, data]);
    console.log("Dados salvos:", data);
    reset();
  };

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = dataCosts.slice(offset, offset + itemsPerPage);

  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <Navbar />
        </div>
        <div className="flex flex-col w-full gap-4 p-20">
          <div className="mx-auto w-full">
            <div className="grid gap-2">
              <h1 className="text-3xl font-bold">Registrar custos</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Dados de custos
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-6 mt-6">
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="date">
                    Data
                  </Label>
                  <Input id="date" type="date" {...register("date")} />
                </div>
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="description">
                    Descrição
                  </Label>
                  <Input
                    id="description"
                    placeholder="Descrição do custo"
                    {...register("description")}
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="amount">
                    Valor
                  </Label>
                  <Input
                    id="amount"
                    placeholder="Valor do custo"
                    type="number"
                    {...register("amount")}
                  />
                </div>
                <Button type="submit" size="lg" className="bg-black text-white">
                  Salvar
                </Button>
              </div>
            </form>
            <div className="grid gap-6 mt-8">
              <h2 className="text-2xl font-bold">Salvar custos</h2>
              <div className="rounded-lg border w-full">
                <TableCosts data={currentPageData} />
              </div>
              <div className="flex justify-center">
                <ReactPaginate
                  className="flex justify-around w-1/ bg-white"
                  previousLabel={"←"}
                  nextLabel={"→"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Mostrando {dataCosts.length} de {dataCosts.length} registros
                </div>
                <div className="flex items-center gap-4 md:gap-2">
                  <div className="font-sm">Valor total: {total}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
