import { Modal } from "@mui/material";
import { Button } from "@/components/ui/button";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationModal: React.FC<ModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={onCancel}
      className="fixed flex items-center justify-center"
    >
      <div className="w-1/2 p-2 rounded h-fit bg-white">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-light">
            Tem certeza que deseja deletar?
          </h1>
          <div className="p-4">
            <Button className="text-white bg-black" onClick={onConfirm}>
              Confirmar
            </Button>
            <Button className="text-white bg-black ml-4" onClick={onCancel}>
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
