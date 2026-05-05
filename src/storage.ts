import * as fs from 'fs';
import * as path from 'path';
import { Todo } from './types';
import { isTodoArray } from './utils';
// TODO: Definisikan path file untuk menyimpan data To-Do

// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file

// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan

// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)


const filePath = path.join(__dirname, "data", "todos.json");

// init/membuat folder & file storage
export function initStorage(): void {
    const dir = path.dirname(filePath);
if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {recursive: true});
}
if(!fs.existsSync(dir)) {
    fs.writeFileSync(filePath, "[]", "utf-8");
}
}
// save todos

export function saveTodos(todos: Todo[]): void {
    try {
        fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");
    } catch (error) {
        console.error("Gagal menyimpan :", error);
    }
}

// load todos

export const loadTodos =(): Todo[] => {
    try {
        if (!fs.existsSync(filePath)) return [];

        const data = fs.readFileSync(filePath,"utf-8");
        const parsed = JSON.parse(data);

        // type guard
    if (isTodoArray(parsed)) {
        return parsed;
    }else {
        console.error("Format data tidak valid");
        return [];
    }
    
    } catch (error) {
        console.error("Gagal membaca todos:", error);
      return [];  
    }
}