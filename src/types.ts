// TODO: Definisikan tipe data untuk To-Do item di sini

// Hint: To-Do sebaiknya memiliki id, text, dan status completed

// TODO: Buat interface untuk To-Do item

// TODO: Buat tipe untuk status To-Do (active/done)

// TODO: Buat tipe untuk fungsi-fungsi yang akan digunakan
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoStatus = "ACTIVE" | "DONE";

export type AddTodoFn = (text: string) => void;
export type CompletedTodoFn = (id: number) => void;
export type DeleteTodoFn = (id: number) => void;
export type ListTodoFn = () => void;

