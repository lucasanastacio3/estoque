import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar/navbar";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { TableBackup } from "@/components/tables/tableBackup";
import { DatabaseIcon } from "lucide-react";
import {
  BackupInterface,
  BackupStatus,
} from "@/helpers/interfaces/backupInterface";
import { CreateBackupModal } from "@/components/modal/CreateBackupModal";

export default function Costs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const backup: BackupInterface[] = [
    {
      name: "Backup 1",
      createdAt: "10/10/2022",
      status: BackupStatus.Success,
    },
    {
      name: "Backup 2",
      createdAt: "10/10/2022",
      status: BackupStatus.Pending,
    },
    {
      name: "Backup 3",
      createdAt: "10/10/2022",
      status: BackupStatus.Failed,
    },
  ];

  const pageCount = Math.ceil(backup.length / itemsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = backup.slice(offset, offset + itemsPerPage);

  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <Navbar />
        </div>
        <div className="flex flex-col w-full">
          <header className="flex items-center gap-4 px-4 py-6 md:px-6 md:py-8 lg:gap-6 lg:py-10">
            <div className="container flex items-center gap-4"></div>
          </header>
          <main className="flex-1">
            <div className="container flex flex-col gap-4 p-4 md:gap-8 md:p-6">
              <div className="flex items-center gap-4">
                <div className="flex justify-start gap-2 w-full">
                  <DatabaseIcon className="h-6 w-6 relative top-1" />
                  <h1 className="font-semibold text-2xl">Backup dados</h1>
                </div>
                <Button
                  className="bg-black text-white"
                  size="sm"
                  onClick={openModal}
                >
                  Criar Backup
                </Button>
                {isModalOpen && (
                  <CreateBackupModal
                    onClose={closeModal}
                    isOpen={isModalOpen}
                  />
                )}
              </div>
              <div className="border rounded-lg shadow-sm">
                <TableBackup data={currentPageData} />
              </div>
              <div className="flex items-center justify-around">
                <ReactPaginate
                  className="flex justify-around w-1/6 "
                  previousLabel={"←"}
                  nextLabel={"→"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
