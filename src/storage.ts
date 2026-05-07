
// TODO: Definisikan path file untuk menyimpan data To-Do

// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file

// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan

// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)


import fs from "fs";
import path from "path";
import { Todo } from "./types";

// Path file JSON
const FILE_PATH = path.join(__dirname, "../todos.json");

// Membaca todos dari file
export function loadTodos(): Todo[] {
  try {
    const data = fs.readFileSync(FILE_PATH, "utf-8");

    const todos: Todo[] = JSON.parse(data);

    return todos;
  } catch (error) {
    console.error("Gagal membaca file todos:", error);

    return [];
  }
}

// Menyimpan todos ke file
export function saveTodos(todos: Todo[]): void {
  try {
    fs.writeFileSync(
      FILE_PATH,
      JSON.stringify(todos, null, 2),
      "utf-8"
    );
  } catch (error) {
    console.error("Gagal menyimpan todos:", error);
  }
}

// Inisialisasi storage
export function initializeStorage(): void {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      fs.writeFileSync(FILE_PATH, "[]", "utf-8");
    }
  } catch (error) {
    console.error("Gagal inisialisasi storage:", error);
  }
}