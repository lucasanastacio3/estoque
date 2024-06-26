export interface BackupInterface {
  id?: number;
  name: string;
  createdAt: Date;
  status: BackupStatus;
}

export enum BackupStatus {
  Pending = "Pendente",
  Success = "Completo",
  Failed = "Falhou",
}
