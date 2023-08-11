import React from 'react';

import { FileItem } from 'types/utils';
import CloseIcon from './CloseIcon';

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
      <li key={index} className="c-form__item">
        <div className="c-form__text c-form__text--overflow">{result}</div>
        <button
          type="button"
          className="e-btn e-btn--icon"
          onClick={() => {
            handleFileRemove(index);
          }}
        >
          <CloseIcon />
        </button>
      </li>
    </>
  ) : null;
};

export default FileListItem;
