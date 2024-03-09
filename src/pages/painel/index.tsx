import { Navbar } from "@/components/navbar/navbar";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropDown } from "@/components/dropDown/dropDown";
import Loading from "@/components/loading/Loading";
import { useState } from "react";
import { DataReport } from "@/helpers/interfaces/dataReport";
import TableDashboard from "@/components/tables/tableDashboard";

export default function Painel() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const data: DataReport[] = [
    {
      id: 1,
      product: "Product 1",
      supplier: "Supplier 1",
      quantity: 10,
      price: 100,
      date: "2022-01-01",
    },
    {
      id: 2,
      product: "Product 2",
      supplier: "Supplier 2",
      quantity: 20,
      price: 200,
      date: "2022-02-01",
    },
  ];

  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <Navbar />
        </div>
        <div>
          <header className="flex h-14 lg:h-[60px] justify-end items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <DropDown />
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informações</CardTitle>
                  <CardDescription>
                    Aqui ficam as informações gerais
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-sm">Total Registros</h3>
                    <h2 className="font-semibold text-xl">100</h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-sm">
                      Total Fornecedores
                    </h3>
                    <h2 className="font-semibold text-xl">250</h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-sm">Total Produtos</h3>
                    <h2 className="font-semibold text-xl">80</h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-sm">Total Relatórios</h3>
                    <h2 className="font-semibold text-xl">20</h2>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Relatório</CardTitle>
                  <CardDescription>Exibição de relatórios</CardDescription>
                </CardHeader>
                <CardContent>
                  <TableDashboard data={data} />
                </CardContent>
              </Card>
              <div className="card m-3">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <Button
                      onClick={() => handleSubmit()}
                      disabled={isSubmitting}
                      className="btn btn-primary mr-1 bg-black text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <Loading />
                        </>
                      ) : (
                        "Exportar Relatório"
                      )}{" "}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
