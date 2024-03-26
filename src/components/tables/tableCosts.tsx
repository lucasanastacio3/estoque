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
import { RegisterCostsInterface } from "@/helpers/interfaces/registerCostsInterface";
import { v4 as uuidv4 } from "uuid";
type Props = {
  data: RegisterCostsInterface[];
};
export const TableCosts = ({ data }: Props) => {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="relative left-[4px]">Data</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead className="relative left-[-2px]">Total</TableHead>
          <TableHead className="text-center"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: RegisterCostsInterface) => (
          <TableRow key={uuidv4()}>
            <TableCell className="font-medium">{item.date}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>R${item.amount}</TableCell>
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
