import React from 'react';
import { AttachmentItem } from 'types/utils';

interface AttachmentProps {
  parentId: string;
  data: AttachmentItem;
  isLastItem: boolean;
}

const Attachment = (props: AttachmentProps) => {
  const { parentId, data, isLastItem } = props;
  const renderContent = () => {
    switch (data.type) {
      case 'text':
        return <p className="center marb_20">{data.content}</p>;
      case 'image':
        return (
          <div className="main-1280">
            <img
              className={isLastItem ? '' : 'marb_20'}
              src={data.content}
              alt=""
            />
          </div>
        );
    }
  };
  return (
    <>
      <div key={`${parentId}-${data.id}`} className="editer-area">
        {renderContent()}
      </div>
    </>
  );
};

export default Attachment;
