import React from 'react';

import AttachmentIcon from 'components/FormLink/AttachmentIcon';
import LinkIcon from 'components/FormLink/LinkIcon';

import { FormLinkItem } from 'types/formLink';
import { useDownload } from 'hooks/api/useDownload';
import { FORM_LINK_API_URL } from 'data/api';

const Item = ({ data }: { data: FormLinkItem }) => {
  const { id, name, link, attachments, created_at } = data;

  const isLink = attachments.length === 0;
  const { handleDownload } = useDownload();

  const handleDownloadClick = () => {
    handleDownload({
      url: FORM_LINK_API_URL,
      fileName: name,
      params: { id },
    });
  };
  return (
    <>
      <li>
        <div className="leftbox">
          <div className="date">{created_at}</div>
          <p>{name}</p>
        </div>
        {isLink ? (
          <a href={link} className="right-icob">
            <LinkIcon />
          </a>
        ) : (
          <div className="right-icob" onClick={handleDownloadClick}>
            <AttachmentIcon />
          </div>
        )}
      </li>
    </>
  );
};

export default Item;
