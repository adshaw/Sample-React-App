import React, {Component} from 'react';

class Comments extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={this.props.avatar}/>
                </a>
                <div className="content">
                    <div className="author">
                        <span>{this.props.author}</span>
                    </div>
                    <div className="metadata">
                        <span className="date">{this.props.timeAgo}</span>
                    </div>
                    <div className="text">
                        {this.props.content}
                    </div>
                </div>
            </div>

        );
    }
}

export default Comments;
