// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime

// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid

// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus

// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid

import { Todo } from "./types";

// Type guard Todo
export function isTodo(value: unknown): value is Todo {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "number" &&
    "text" in value &&
    typeof value.text === "string" &&
    "status" in value &&
    (value.status === "active" || value.status === "done") &&
    "createdAt" in value
  );
}

// Helper format tanggal
export function formatDate(date: Date): string {
  return new Date(date).toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

// Validasi string input
export function isValidString(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.trim().length > 0
  );
}
