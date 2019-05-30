import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';

class ListComment extends React.Component{
    
    handleOnClick = (e) => {
        this.props.fetchComments(this.props.postId);
    }

    renderCommentList() {
        let { comments } = this.props
        if (!comments || comments.length <= 0){
            return null;
        }
        return (
            this.props.comments[0].map(comment => { return comment}).map(comment => {
                return (
                    <li key={comment.id}>
                        {comment.body}
                    </li>
                )
            })
        );
    }

    render() {
        console.log("Post ID: "+this.props.postId);
        return (
            <div>
                <a href="#" onClick={this.handleOnClick}>(View More Comments)</a>
                <ul className="list-group">
                    {this.renderCommentList()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {    
    return {
        comments: state.comments
    };  
};

export default connect(mapStateToProps, { fetchComments })(ListComment);