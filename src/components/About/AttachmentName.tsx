import React from 'react';

import { AttachmentNameItem } from 'types/about';

import { attachmentList } from 'data/about';
import Attachment from './Attachment';

interface AttachmentNameProps {
  data: AttachmentNameItem;
}

const AttachmentName = (props: AttachmentNameProps) => {
  const { data } = props;
  return (
    <>
      <div key={data.id} className="ab-item">
        <div className="titlebox">{data.title}</div>
        {data.list &&
          data.list.map((subItem, i) => {
            const matchAttachment = attachmentList.find(
              (v) => v.id === subItem
            );
            const isLastItem = !!data.list && i === data.list.length - 1;
            return (
              data.list &&
              matchAttachment && (
                <Attachment
                  key={`${data.id}-${matchAttachment.id}`}
                  parentId={`${data.id}`}
                  data={matchAttachment}
                  isLastItem={isLastItem}
                />
              )
            );
          })}
      </div>
    </>
  );
};

export default AttachmentName;
