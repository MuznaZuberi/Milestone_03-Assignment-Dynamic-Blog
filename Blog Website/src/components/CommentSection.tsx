"use client";
import {useState} from "react";
import {Card , CardContent} from "../components/ui/card";
import {Input} from "../components/ui/input";
import {Button} from "../components/ui/button";

interface Comment{
	id: string;
	author: string;
	text: string;
}

 interface CommentSectionProps {
	postId: string;
}

export default function CommentSection({postId}:CommentSectionProps){
	const [comments, setComments] = useState<Comment[]>([]);
	const [newComment, setNewComment] = useState("");
	const [authorName, setAuthorName] = useState("");
	const [editingCommentId, setEditingCommentId] = useState<string|null>(null);


	const AddComment = () => {
		if (newComment.trim() && authorName.trim()) {
			const newCommentObj: Comment = {
				id: new Date().toISOString(),
				author: authorName,
				text: newComment,
			};
			setComments([...comments, newCommentObj]);
			setNewComment("");
			setAuthorName("");
		}
	};

	const EditComment = (commentID: string) => {
		const commentToEdit = comments.find((comment) => comment.id === commentID);
		if (commentToEdit) {
			setNewComment(commentToEdit.text);
			setAuthorName(commentToEdit.author);
			setEditingCommentId(commentID);
		}
	};

	const SaveEditComment = () => {
		if (newComment.trim() && authorName.trim() && editingCommentId) {
			const updateComments = comments.map((comment) =>
				comment.id === editingCommentId
					? { ...comment, text: newComment, author: authorName }
					: comment
			);
			setComments(updateComments);
			setNewComment("");
			setAuthorName("");
			setEditingCommentId(null);

		}
	};
	return (
    <div className = "mt-20">
    	<h2 className = "text-black font-sans font-bold text-2xl ml-3 font-serif">Comments</h2>
    	<p className = "text-sm font-sans font-bold text-black ml-4">Post ID : {postId}</p>
    	<div className = "mt-4 ml-4 font-serif">
    	 {comments.length > 0 ?(
           comments.map((comment)=>(

           <Card key = {comment.id}>
           <CardContent className = "p-4">
           <div className = "font-sans font-bold">{comment.author}</div>
           <p>{comment.text}</p>
           <Button
           	onClick = {()=>EditComment(comment.id)}
           	className = "mt-2 text-blue-700">
           	Edit
           </Button>
           </CardContent>
           </Card>
           	))

    	 ):(
    	   <p>No Comment Yet</p>
    	 )}
    		
    	</div>

    	<div className = "mt-6 w-full px-3 font-serif">
        <Input
          type = "text"
          value = {authorName}
          onChange = {(e)=>setAuthorName(e.target.value)}
          className = "w-full mb-2 border border-2"
          placeholder = "Your name"

    		 />

    		 <Input
          type = "text"
          value = {newComment}
          onChange = {(e)=>setNewComment(e.target.value)}
          className = "w-full mb-2 border border-2"
          placeholder = "Add a comment"

          />

				<Button onClick={editingCommentId ? SaveEditComment : AddComment }
					className = "mt-4 px-6 py-1 mb-10 bg-black text-white font-sans">
					{editingCommentId ? "Save" : "Submit"}
				</Button>
          
    	</div>
    </div>
  );
}




