import React from 'react';

import { FileItem } from 'types/utils';

interface FileListItemProps {
  data: FileItem;
  index: number;
  handleFileRemove: (index: number) => void;
}

const FileListItem = (props: FileListItemProps) => {
  const { data, index, handleFileRemove } = props;
  const { file, result } = data;

  const isResultString = typeof result === 'string';

  return isResultString ? (
    <>
      <li key={index} className="mb-2 text-truncate">
        <button
          type="button"
          className="btn btn-light d-flex align-items-center justify-content-between w-100"
        >
          {result}
          <span
            className="btn-close"
            onClick={() => {
              handleFileRemove(index);
            }}
          ></span>
        </button>
      </li>
    </>
  ) : null;
};

export default FileListItem;
