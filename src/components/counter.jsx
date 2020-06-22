import React, {Component} from 'react';
import Comments from "./comments";
import faker from 'faker';
import ApprovalCard from "./ApprovalCard";

class Counter extends Component {

    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag 1', 'tag 2', 'tag 3']
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        const samsss = 'Sam'
        return (
            <div style={{margin: '10px auto'}} className="ui container comments">
                <ApprovalCard>
                    <Comments author={samsss} timeAgo="Today at 4:00 pm" content="Nice Blog Post 1"
                              avatar={faker.image.avatar()}/>
                </ApprovalCard>
                <ApprovalCard>
                    <Comments author="Jane" timeAgo="Today at 2:00 pm" content="Nice Blog Post 2"
                              avatar={faker.image.avatar()}/>
                </ApprovalCard>
                <ApprovalCard>
                    <Comments author="Alex" timeAgo="Yesterday at 6:00 pm" content="Nice Blog Post 3"
                              avatar={faker.image.avatar()}/>
                </ApprovalCard>
                {/*<span style={{fontSize: 10}} className={this.getBadgeClasses()}>{this.formatCount()}</span>*/}
                {/*<button onClick={this.handleIncrement} className="btn btn-primary">Increment</button>*/}
                {/*{this.state.tags.length === 0 && <p><i>Create New Tags</i></p>}*/}
                {/*{this.renderTags()}*/}
            </div>
        );
    }


    renderTags() {
        if (this.state.tags.length === 0) return <p><i>There are no tags!</i></p>;

        return <ul>
            {this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}
        </ul>
    }

    getBadgeClasses() {
        let classes = "m-2 badge badge-";
        classes += this.state.count === 0 ? "primary" : "warning";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
