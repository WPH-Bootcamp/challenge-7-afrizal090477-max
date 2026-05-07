// TODO: Import tipe-tipe yang sudah didefinisikan di types.ts

// TODO: Import fungsi storage untuk baca/tulis file

// TODO: Buat fungsi untuk menambahkan To-Do baru
// - Generate id yang unik (bisa pakai timestamp atau counter)
// - Pastikan text tidak kosong
// - Set default status sebagai active

// TODO: Buat fungsi untuk menandai To-Do sebagai selesai
// - Cari To-Do berdasarkan id
// - Ubah statusnya menjadi completed
// - Handle kasus jika id tidak ditemukan

// TODO: Buat fungsi untuk menghapus To-Do
// - Filter To-Do berdasarkan id
// - Handle kasus jika id tidak ditemukan

// TODO: Buat fungsi untuk menampilkan semua To-Do
// - Tampilkan dengan format yang rapi
// - Tambahkan status [ACTIVE] atau [DONE] di depan setiap To-Do
// - Berikan nomor urut untuk memudahkan user memilih

// TODO: Buat fungsi untuk mencari To-Do berdasarkan keyword

import { Todo } from "./types";

import {
  loadTodos,
  saveTodos,
} from "./storage";

// Tambah To-Do
export function addTodo(text: string): void {
  if (!text.trim()) {
    console.log("Text To-Do tidak boleh kosong");
    return;
  }

  const todos = loadTodos();

  const newTodo: Todo = {
    id: Date.now(),
    text: text.trim(),
    status: "active",
    createdAt: new Date(),
  };

  todos.push(newTodo);

  saveTodos(todos);

  console.log("To-Do berhasil ditambahkan");
}

// Selesaikan To-Do
export function completeTodo(id: number): void {
  const todos = loadTodos();

  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    console.log("To-Do tidak ditemukan");
    return;
  }

  todo.status = "done";

  saveTodos(todos);

  console.log("To-Do berhasil diselesaikan");
}

// Hapus To-Do
export function deleteTodo(id: number): void {
  const todos = loadTodos();

  const filteredTodos = todos.filter(
    (todo) => todo.id !== id
  );

  if (filteredTodos.length === todos.length) {
    console.log("To-Do tidak ditemukan");
    return;
  }

  saveTodos(filteredTodos);

  console.log("To-Do berhasil dihapus");
}

// Tampilkan semua To-Do
export function listTodos(): void {
  const todos = loadTodos();

  if (todos.length === 0) {
    console.log("Belum ada To-Do");
    return;
  }

  console.log("\n===== TO-DO LIST =====");

  todos.forEach((todo, index) => {
    const status =
      todo.status === "done"
        ? "[DONE]"
        : "[ACTIVE]";

    console.log(
      `${index + 1}. ${status} ${todo.text}`
    );
  });
}

// Cari To-Do
export function searchTodos(keyword: string): void {
  const todos = loadTodos();

  const results = todos.filter((todo) =>
    todo.text
      .toLowerCase()
      .includes(keyword.toLowerCase())
  );

  if (results.length === 0) {
    console.log("To-Do tidak ditemukan");
    return;
  }

  console.log("\n===== HASIL PENCARIAN =====");

  results.forEach((todo, index) => {
    const status =
      todo.status === "done"
        ? "[DONE]"
        : "[ACTIVE]";

    console.log(
      `${index + 1}. ${status} ${todo.text}`
    );
  });
}