import { client, q } from "../config/db";

const deleteNote = (noteRef: string) =>
	client
		.query(q.Delete(q.Ref(q.Collection("todos"), noteRef)))
		.then((response) => response)
		.catch((error) => console.warn(error));

export default deleteNote;
