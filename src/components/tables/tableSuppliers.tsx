import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { FileEditIcon, TrashIcon } from "lucide-react";
import { Suppliers } from "@/helpers/interfaces/suppliersInterface";

type Props = {
  data: Suppliers[];
};
export const TableSuppliers = ({ data }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="relative left-[4px]">Fornecedor</TableHead>
          <TableHead className="relative left-[-27px]">Email</TableHead>
          <TableHead className="relative left-[-2px]">Telefone</TableHead>
          <TableHead className="text-center">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: Suppliers) => (
          <TableRow key={item.name}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell className="flex justify-center gap-2">
              <Link href="#">
                <FileEditIcon className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Link>
              <Link href="#">
                <TrashIcon className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
