import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; 
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
            author="Sam" 
            timeAgo="Today at 4:45" 
            text="Hello there" 
            image={faker.image.avatar()}
          />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          timeAgo="Today at 3:20" 
          text="Hi!" 
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Gabi" timeAgo="Yesterday at 1:30" text="Bye!" image={faker.image.avatar()}/>
      </ApprovalCard>
      </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))