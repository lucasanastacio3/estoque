export interface DataAudit {
  id?: number;
  action: string;
  tableName: string;
  recordId: number;
  user: string;
  oldData: string;
  newData: string;
}
