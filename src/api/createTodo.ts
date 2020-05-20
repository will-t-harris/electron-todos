import { client, q } from "../config/db";

const createTodo = (text: string) =>
	client
		.query(q.Create(q.Collection("todos"), { data: { text } }))
		.then((response) => response)
		.catch((error) => console.warn(error));

export default createTodo;
