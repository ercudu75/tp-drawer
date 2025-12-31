import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabase("todos.db");

export const initDB = () => {
	db.transaction(tx => {
		tx.executeSql(
			`CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT
      );`
		);
	});
};

export const addTodoOffline = (title) => {
	db.transaction(tx => {
		tx.executeSql(
			"INSERT INTO todos (title) VALUES (?)",
			[title]
		);
	});
};

export const updateTodoOffline = (id, title) => {
	db.transaction(tx => {
		tx.executeSql(
			"UPDATE todos SET title = ? WHERE id = ?",
			[title, id]
		);
	});
};

export const loadTodos = (callback) => {
	db.transaction(tx => {
		tx.executeSql(
			"SELECT * FROM todos",
			[],
			(_, result) => {
				callback(result.rows._array);
			}
		);
	});
};

export const deleteTodoOffline = (id) => {
	db.transaction(tx => {
		tx.executeSql(
			"DELETE FROM todos WHERE id = ?",
			[id]
		);
	});
};
