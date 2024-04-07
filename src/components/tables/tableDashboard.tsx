import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { v4 as uuidv4 } from "uuid";
import { DataReport } from "@/helpers/interfaces/dataReport";

type Props = {
  data: DataReport[];
};

export default function TableDashboard({ data }: Props) {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow className="bg-neutral-100">
          <TableHead className="relative left-[4px]">Data</TableHead>
          <TableHead>Produto</TableHead>
          <TableHead className="relative left-[-2px]">Preço</TableHead>
          <TableHead className="relative left-[-2px]">Fornecedor</TableHead>
          <TableHead className="relative left-[-2px]">Quantidade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: DataReport) => (
          <TableRow key={uuidv4()}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.product}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.supplier}</TableCell>
            <TableCell>{item.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
