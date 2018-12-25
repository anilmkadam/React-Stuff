import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className = "ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail author = "Sam" timeAgo = "Today at 4:45PM" content = "Nice blog post" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author = "Alex" timeAgo = "Today at 1:00PM" content = "I like the Subject" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author = "Jane" timeAgo = "Today at 2:00AM" content = "I like the writing" />
            </ApprovalCard> 
            
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

{/* <ApprovalCard>
                <CommentDetail author = "Bob" timeAgo = "Yesterday at 5:00PM" content = "Helpful one" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author = "Mark" timeAgo = "Yesterday at 11:40PM" content = "Nice" />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author = "Joe" timeAgo = "Yesterday at 9:00AM" content = "Informative blog post" />
</ApprovalCard> */}