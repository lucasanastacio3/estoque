import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { DataProduct } from "@/helpers/interfaces/dataTableInterface";
import { FileEditIcon, TrashIcon } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { deleteProduct } from "@/app/api/route";

type Props = {
  data: DataProduct[];
};
export const TableProducts = ({ data }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="relative left-[4px]">Produto</TableHead>
          <TableHead className="relative left-[-27px]">Quantidade</TableHead>
          <TableHead className="relative left-[-2px]">Preço</TableHead>
          <TableHead className="text-center">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: DataProduct) => (
          <TableRow key={uuidv4()}>
            <TableCell className="font-medium">{item.product}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>R${item.price}</TableCell>
            <TableCell className="flex justify-center gap-2">
              <Link href="#">
                <FileEditIcon className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Link>
              <Link href="#">
                <TrashIcon
                  onClick={() => deleteProduct(item.id)}
                  className="h-4 w-4"
                />
                <span className="sr-only">Delete</span>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
