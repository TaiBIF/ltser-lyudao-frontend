import React from 'react';
import { NewsAttachmentItem } from 'types/news';
import { FILE_URL } from 'utils/config';

const AttachmentItem = ({
  data,
  i,
}: {
  data: NewsAttachmentItem;
  i: number;
}) => {
  const { file } = data;
  const link = `${FILE_URL}${file}`;
  return (
    <>
      <div>
        <a key={i} href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      </div>
    </>
  );
};

export default AttachmentItem;
