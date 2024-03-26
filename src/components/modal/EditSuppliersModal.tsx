import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Modal } from "@mui/material";
import { Suppliers } from "@/helpers/interfaces/suppliersInterface";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditSuppliersModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Suppliers>();
  const [savedData, setSavedData] = useState<Suppliers[]>([]);

  const onSubmit = (data: Suppliers) => {
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
            <Label className="text-md" htmlFor="name">
              Fornecedor
            </Label>
            <Input
              type="text"
              {...register("name")}
              placeholder="Nome do fornecedor"
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-md" htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              {...register("email")}
              placeholder="Email do fornecedor"
            />
            {errors.email && <div>{errors.email.message}</div>}
          </div>
          <div className="grid gap-2">
            <Label className="text-md" htmlFor="price">
              Telefone
            </Label>
            <Input type="text" {...register("phone")} placeholder="Telefone" />
            {errors.phone && <div>{errors.phone.message}</div>}
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
