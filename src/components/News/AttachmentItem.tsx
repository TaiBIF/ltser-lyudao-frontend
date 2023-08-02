import React from 'react';
import { NewsAttachmentItem } from 'types/news';
import { FILE_URL } from 'utils/config';

const AttachmentItem = ({ data }: { data: NewsAttachmentItem }) => {
  const { file } = data;
  const link = `${FILE_URL}${file}`;
  return (
    <>
      <div>
        <a href={link}>{link}</a>
      </div>
    </>
  );
};

export default AttachmentItem;
