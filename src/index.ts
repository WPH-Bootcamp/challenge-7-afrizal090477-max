// TODO: Import readline untuk membaca input dari command line


// TODO: Import fungsi-fungsi dari todoService


// TODO: Import fungsi-fungsi dari utils (termasuk type guards)

// TODO: Buat fungsi untuk menampilkan menu utama
// Tampilkan opsi seperti:
// 1. Add new todo
// 2. Mark todo as complete
// 3. Delete todo
// 4. List all todos
// 5. Search todos
// 6. Exit

// TODO: Buat fungsi untuk handle input dari user
// Gunakan readline.question untuk menerima input

// TODO: Buat fungsi main yang akan menjalankan aplikasi secara loop
// Hint: Gunakan recursive function atau while loop

// TODO: Jalankan fungsi main

import * as readline from "readline";
import {
  addTodo,
  completeTodo,
  deleteTodo,
  listTodos,
  searchTodos,
} from "./todoService";
import { isValidString } from "./utils";
import { initStorage } from "./storage";

// init storage
initStorage();

console.log('Welcome to TypeScript To-Do App!');
// setup readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// helper biar bisa pakai async/await
function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

// tampilkan menu
function showMenu(): void {
  console.log("\n=== TODO APP ===");
  console.log("1. Add new todo");
  console.log("2. Mark todo as complete");
  console.log("3. Delete todo");
  console.log("4. List all todos");
  console.log("5. Search todos");
  console.log("6. Exit");
}

// main loop
async function main(): Promise<void> {
  let running = true;

  while (running) {
    showMenu();

    const choice = (await ask("Pilih menu (1-6): ")).trim();

    switch (choice) {
      case "1": {
        const input = await ask("Masukkan todo: ");

        if (!isValidString(input)) {
          console.log("❌ Input tidak valid");
          break;
        }

        addTodo(input);
        break;
      }

      case "2": {
        const input = await ask("Masukkan ID: ");
        const id = Number(input);

        if (!input || isNaN(id)) {
          console.log("❌ ID harus angka");
          break;
        }

        completeTodo(id);
        break;
      }

      case "3": {
        const input = await ask("Masukkan ID: ");
        const id = Number(input);

        if (!input || isNaN(id)) {
          console.log("❌ ID harus angka");
          break;
        }

        deleteTodo(id);
        break;
      }

      case "4":
        listTodos();
        break;

      case "5": {
        const keyword = await ask("Masukkan keyword: ");

        if (!isValidString(keyword)) {
          console.log("❌ Keyword tidak valid");
          break;
        }

        searchTodos(keyword);
        break;
      }

      case "6":
        console.log("\n👋 Terima kasih!");
        running = false;
        rl.close();
        break;

      default:
        console.log("❌ Pilihan tidak valid");
    }
  }
}

// start app
main();