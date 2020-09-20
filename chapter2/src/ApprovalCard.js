import React from 'react';

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
        <div className="content">
            {props.children}
        </div>
        <div className="extra content">
            <div className="two buttons">
                <div className="ui green button">Approve</div>
                <div className="ui red button">Disapprove</div>
            </div>
        </div>
    </div>
  );
};

export default ApprovalCard;