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

import readline from "readline";
import {
  addTodo,
  completeTodo,
  deleteTodo,
  listTodos,
  searchTodos,
} from "./todoService";
import { isValidString } from "./utils";
import { initializeStorage } from "./storage";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu(): void {
  console.log(`
===== TO-DO APP =====
1. Add new todo
2. Mark todo as complete
3. Delete todo
4. List all todos
5. Search todos
6. Exit
`);
}

function main(): void {
  showMenu();

  rl.question("Pilih menu: ", (choice) => {
    switch (choice) {
      case "1":
        rl.question("Masukkan To-Do: ", (text) => {
          if (!isValidString(text)) {
            console.log("Input tidak valid");
          } else {
            addTodo(text);
          }
          main();
        });
        break;

      case "2":
        rl.question("Masukkan ID To-Do: ", (id) => {
          completeTodo(Number(id));
          main();
        });
        break;

      case "3":
        rl.question("Masukkan ID To-Do: ", (id) => {
          deleteTodo(Number(id));
          main();
        });
        break;

      case "4":
        listTodos();
        main();

        break;

      case "5":
        rl.question("Masukkan keyword: ", (keyword) => {
          searchTodos(keyword);
          main();
        });
        break;

      case "6":
        console.log("🙏Terima kasih sudah menggunakan aplikasi ini!");
        rl.close();
        break;

      default:
        console.log("Menu tidak valid");

        main();
    }
  });
}

// Inisialisasi file storage
initializeStorage();
// Jalankan aplikasi
main();
