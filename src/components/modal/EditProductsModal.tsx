import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Modal } from "@mui/material";
import { ModalProps } from "@/helpers/interfaces/editModalProps";
import { DataTable } from "@/helpers/interfaces/dataTableInterface";

export const EditProductsModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataTable>();
  const [savedData, setSavedData] = useState<DataTable[]>([]);

  const onSubmit = (data: DataTable) => {
    setSavedData([...savedData, data]);
    console.log("Dados salvos:", data);
    reset();
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 flex items-center justify-center"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 p-2 rounded-lg h-fit bg-white"
      >
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label className="text-md" htmlFor="product">
              Produto
            </Label>
            <Input
              type="text"
              {...register("product")}
              placeholder="Nome do produto"
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-md" htmlFor="quantity">
              Quantidade
            </Label>
            <Input
              type="number"
              {...register("quantity")}
              placeholder="Quantidade"
            />
            {errors.quantity && <div>{errors.quantity.message}</div>}
          </div>
          <div className="grid gap-2">
            <Label className="text-md" htmlFor="price">
              Preço
            </Label>
            <Input type="number" {...register("price")} placeholder="Preço" />
            {errors.price && <div>{errors.price.message}</div>}
          </div>
        </div>
        <div className="mt-2">
          <Button
            variant="ghost"
            className="bg-black text-white"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button type="submit" className="m-2 bg-black text-white">
            Adicionar
          </Button>
        </div>
      </form>
    </Modal>
  );
};
