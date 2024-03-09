import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { TrashIcon } from "lucide-react";
import { BackupInterface } from "@/helpers/interfaces/backupInterface";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { ConfirmationModal } from "../modal/DeleteIBackuptems";
type Props = {
  data: BackupInterface[];
};
export const TableBackup = ({ data }: Props) => {
  const [newData, setNewData] = useState(data); // Seus dados iniciais
  const [requestStatus, setRequestStatus] = useState("pending");
  const [itemToDelete, setItemToDelete] = useState<BackupInterface | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Função para lidar com a requisição
  // const handleRequest = () => {
  //   // Simulação de uma requisição assíncrona
  //   setRequestStatus("loading");
  //   yourAsyncRequestFunction()
  //     .then((response) => {
  //       // Requisição bem-sucedida
  //       setRequestStatus("success");
  //     })
  //     .catch((error) => {
  //       // Requisição falhou
  //       setRequestStatus("error");
  //     });
  // };

  // function getRequestStatusText(requestStatus, item) {
  //   switch (requestStatus) {
  //     case 'loading':
  //       return 'Carregando...';
  //     case 'success':
  //       return item.status; // Ou qualquer lógica específica para sucesso
  //     case 'error':
  //       return 'Falha'; // Ou qualquer lógica específica para erro
  //     default:
  //       return 'Desconhecido';
  //   }
  // }

  // <TableCell>{getRequestStatusText(requestStatus, item)}</TableCell>

  const handleDelete = (itemToDelete: BackupInterface) => {
    setItemToDelete(itemToDelete);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    const updatedData = newData.filter((item) => item !== itemToDelete);
    setNewData(updatedData);
    console.log("Item excluído:", itemToDelete);
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setItemToDelete(null);
    setIsModalOpen(false);
  };

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="relative left-[4px]">Nome</TableHead>
          <TableHead>Data de criação</TableHead>
          <TableHead className="relative left-[-2px]">Status</TableHead>
          <TableHead className="text-center"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: BackupInterface) => (
          <TableRow key={uuidv4()}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.createdAt}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell className="flex justify-center gap-2">
              <button onClick={() => handleDelete(item)}>
                <TrashIcon className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </button>
              <ConfirmationModal
                isOpen={isModalOpen}
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
