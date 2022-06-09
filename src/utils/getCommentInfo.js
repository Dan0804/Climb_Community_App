import { db } from "../firebase"
import { doc, getDoc, } from "firebase/firestore"

export default async (comment) => {
    const docu = await getDoc(doc(db, "comments", comment.id))
    comment.comment_body = docu.data().comment_body
    comment.created_at = docu.data().created_at
    comment.nick_name = docu.data().nick_name

    return comment
}