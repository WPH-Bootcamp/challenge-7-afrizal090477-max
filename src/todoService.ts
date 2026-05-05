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
import { loadTodos, saveTodos } from "./storage";
import { generateUniqueId } from "./utils";

// add Todo
export function addTodo(text: string): void {
  if (!text || text.trim() === "") {
    console.log("❌ Text tidak boleh kosong");
    return;
  }

  const todos = loadTodos();

  const newTodo: Todo = {
    id: generateUniqueId(),
    text,
    completed: false,
  };

  todos.push(newTodo);
  saveTodos(todos);

  console.log("✔ Todo berhasil ditambahkan");
}

// mark completed
export function completeTodo(id: number): void {
  const todos = loadTodos();

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    console.log("❌ Todo tidak ditemukan");
    return;
  }

  if (todo.completed) {
    console.log("ℹ️ Todo sudah selesai");
    return;
  }

  todo.completed = true;
  saveTodos(todos);

  console.log("✔ Todo ditandai selesai");
}

// delete Todo
export function deleteTodo(id: number): void {
  const todos = loadTodos();

  const filtered = todos.filter((t) => t.id !== id);

  if (filtered.length === todos.length) {
    console.log("❌ Todo tidak ditemukan");
    return;
  }

  saveTodos(filtered);

  console.log("✔ Todo berhasil dihapus");
}

// list Todo
export function listTodos(): void {
  const todos = loadTodos();

  if (todos.length === 0) {
    console.log("📭 Belum ada todo");
    return;
  }

  console.log("\n=== DAFTAR TODO ===");

  todos.forEach((todo) => {
    const status = todo.completed ? "[DONE]" : "[ACTIVE]";
    console.log(`${status} ${todo.id}. ${todo.text}`);
  });
}

export function searchTodos(keyword: string): void {
  const todos = loadTodos();

  const results = todos.filter((t) =>
    t.text.toLowerCase().includes(keyword.toLowerCase())
  );

  if (results.length === 0) {
    console.log("❌ Todo tidak ditemukan");
    return;
  }

  console.log("\n=== HASIL PENCARIAN ===");

  results.forEach((todo) => {
    const status = todo.completed ? "[DONE]" : "[ACTIVE]";
    console.log(`${status} ${todo.id}. ${todo.text}`);
  });
}