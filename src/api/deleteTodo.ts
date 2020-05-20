import { client, q } from "../config/db";

const deleteTodo = (todoRef: string) =>
	client
		.query(q.Delete(q.Ref(q.Collection("todos"), todoRef)))
		.then((response) => response)
		.catch((error) => console.warn(error));

export default deleteTodo;
