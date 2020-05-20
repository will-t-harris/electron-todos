import { client, q } from "../config/db";

const editNote = (noteId: string, newText: string) =>
	client
		.query(
			q.Update(q.Ref(q.Collection("todos"), noteId), {
				data: { text: newText },
			})
		)
		.then((response: any) => console.log(response))
		.catch((error: Error) => console.warn(error));

export default editNote;
