import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import ListComment from './ListComment';


class ListPost extends React.Component{

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderListPost() {
        return (
            this.props.listPost.map(post => {
                return (
                    <div key={post.id} className="list-group-item">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <ListComment postId={post.id}/>
                    </div>
                )
            })
        );
    }

    render() {
        return (
            <div className="list-group">
                {this.renderListPost()}
            </div>
        );
    }
}

const mapStateToProps =  (state) => {
    return { 
        listPost: state.posts //state.posts came from reducers
    }
};

export default connect(mapStateToProps, {fetchPosts})(ListPost);