import { useForm } from '../../../hooks/useForm';

export const AddComment = ({
    onCommentSubmit
}) => {
    const {values, changeHandler, onSubmit} = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        < article className="create-comment" >
            <label>Add new comment:</label>
            <form onSubmit={onSubmit} className="form">               
                <textarea name="comment" placeholder="Comment......" value={values.comment} onChange={changeHandler}></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article >
    );
};