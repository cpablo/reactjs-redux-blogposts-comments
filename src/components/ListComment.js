import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';

class ListComment extends React.Component{

    constructor(props) {
        super(props);
        this.listCommentRef = React.createRef();
    }
    
    handleOnClick = (e) => {
        this.props.fetchComments(this.props.postId);
    }

    renderCommentList() {
        if (!this.props.comments) {
            return null;
        }
        return (
            this.props.comments.map(comment => {
                return (
                    <div>{comment.body}</div>
                )
            })
        );
    }

    componentDidUpdate(){
        console.log("Component Update!");
    }

    render() {
        return (
            <div ref={this.props.comments}>
                <a href="#" onClick={this.handleOnClick}>(View More Comments)</a>
                {this.renderCommentList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {    
    return {
        comments: state.listComment
    };  
};

export default connect(mapStateToProps, { fetchComments })(ListComment);