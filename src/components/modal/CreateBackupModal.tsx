import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Modal } from "@mui/material";
import { ModalProps } from "@/helpers/interfaces/editModalProps";
import { BackupInterface } from "@/helpers/interfaces/backupInterface";

export const CreateBackupModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BackupInterface>();
  const [savedData, setSavedData] = useState<BackupInterface[]>([]);

  const onSubmit = (data: BackupInterface) => {
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
              Nome
            </Label>
            <Input
              type="text"
              {...register("name")}
              placeholder="Nome do backup"
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="createdAt">
              Data
            </Label>
            <Input id="date" type="date" {...register("createdAt")} />
            {errors.createdAt && <div>{errors.createdAt.message}</div>}
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
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  );
};
