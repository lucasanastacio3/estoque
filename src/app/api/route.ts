"use server";
import { removeSpecialChars } from "@/helpers/functions/removeSpecialChars";
import { DataAudit } from "@/helpers/interfaces/dataAudit";
import { DataReport } from "@/helpers/interfaces/dataReport";
import { DataProduct } from "@/helpers/interfaces/dataTableInterface";
import { Suppliers } from "@/helpers/interfaces/suppliersInterface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// PRODUCTS
export const getProducts = async () => {
  const products = await prisma.products.findMany();
  return products;
};

export const createProduct = async (data: DataProduct) => {
  const products = await prisma.products.create({
    data: {
      id: data.id,
      product: data.product ?? "",
      quantity: data.quantity ?? "",
      price: data.price ?? "",
    },
  });
  return products;
};

export const updateProduct = async (data: DataProduct) => {
  const productUpdate = await prisma.products.update({
    where: {
      id: data.id,
    },
    data: {
      product: data.product ?? "",
      quantity: data.quantity ?? "",
      price: data.price ?? "",
    },
  });
  return productUpdate;
};

export const deleteProduct = async (id: number) => {
  const productDelete = await prisma.products.delete({
    where: {
      id: id,
    },
  });
  return productDelete;
};

// SUPPLIERS
export const getSuppliers = async () => {
  const suppliers = await prisma.suppliers.findMany();
  return suppliers;
};

export const createSuppliers = async (data: Suppliers) => {
  const cleanedPhone = removeSpecialChars(data.phone ?? "");

  const suppliers = await prisma.suppliers.create({
    data: {
      id: data.id,
      name: data.name ?? "",
      email: data.email ?? "",
      phone: cleanedPhone,
    },
  });
  return suppliers;
};

// REPORTS

export const getReports = async () => {
  const reports = await prisma.reports.findMany();
  return reports;
};

// AUDITS

export const getAudits = async () => {
  const audits = await prisma.auditlog.findMany();

  return audits;
};

export const createAuditLog = async (data: DataAudit) => {
  const auditLog = await prisma.auditLog.create({
    data: {
      id: data.id,
      action: data.action,
      tableName: data.tableName,
      recordId: data.recordId,
      user: data.user,
      oldData: data.oldData,
      newData: data.newData,
    },
  });

  return auditLog;
};
