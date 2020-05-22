import { client, q } from "../config/db";

const getAllTodos = client
	.query(q.Paginate(q.Match(q.Ref("indexes/allTodos"))))
	.then((response: any) => {
		const todosRefs = response.data;

		const getAllTodoDataQuery = todosRefs.map((ref: any) => {
			return q.Get(ref);
		});

		return client.query(getAllTodoDataQuery).then((data: any) => data);
	})
	.catch((error: Error) => console.warn(`Error: ${error}`));

export default getAllTodos;
