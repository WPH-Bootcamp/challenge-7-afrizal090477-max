// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime

// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid

// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus

// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid
import { Todo } from "./types";

export function isTodo(obj: unknown): obj is Todo {
  if (typeof obj !== "object" || obj === null) return false;

  const todo = obj as Todo;

  return (
    typeof todo.id === "number" &&
    typeof todo.text === "string" &&
    typeof todo.completed === "boolean"
  );
}
export function isTodoArray(data: unknown): data is Todo[] {
  return Array.isArray(data) && data.every(isTodo);
}

export function generateUniqueId(): number {
  return Date.now();
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function isValidString(input: unknown): input is string {
  return typeof input === "string" && input.trim().length > 0;
}