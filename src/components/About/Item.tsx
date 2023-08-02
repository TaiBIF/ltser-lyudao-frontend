import React from 'react';

import { AttachmentItem } from 'types/about';
import { FILE_URL, IMAGE_URL } from 'utils/config';

const Item = ({ data }: { data: AttachmentItem }) => {
  const { id, name, content, file, image, created_at, updated_at } = data;
  const imageLink = `${IMAGE_URL}${image}`;
  const fileLink = `${FILE_URL}${file}`;
  return (
    <>
      <div className="ab-item">
        <div className="titlebox">{name}</div>
        <p className="center marb_20">{content}</p>
        <div className="main-1280">
          <img className="marb_20" src={imageLink} alt={name} />
        </div>
        <div>
          <a href={fileLink} target="_blank" rel="noreferrer">
            {fileLink}
          </a>
        </div>
      </div>
    </>
  );
};

export default Item;
