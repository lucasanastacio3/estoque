import Link from "next/link";
import React from "react";
import {
  LineChartIcon,
  Package2Icon,
  BellIcon,
  FileEditIcon,
  PackageIcon,
  SearchIcon,
  ShoppingCartIcon,
  TrashIcon,
  UsersIcon,
} from "lucide-react";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="">CCE</span>
        </Link>
        <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
          <BellIcon className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          <Link
            className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
            href="#"
          >
            <PackageIcon className="h-4 w-4" />
            Estoque
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <ShoppingCartIcon className="h-4 w-4" />
            Backup
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <LineChartIcon className="h-4 w-4" />
            Gerenciamento
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <UsersIcon className="h-4 w-4" />
            Fornecedores
          </Link>
        </nav>
      </div>
      <div className="mt-auto p-4" />
    </div>
  );
};
