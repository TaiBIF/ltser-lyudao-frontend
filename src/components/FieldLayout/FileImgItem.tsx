import React, { SetStateAction, Dispatch, useEffect } from 'react';

import { FileItem } from 'types/utils';

interface FileImgItemProps {
  files: FileItem[];
  setFiles: Dispatch<SetStateAction<FileItem[]>>;
  cover: string;
  setCover: Dispatch<SetStateAction<string>>;
  data: FileItem;
  index: number;
  multiple: boolean | undefined;
  handleFileRemove: (index: number) => void;
}

const FileImgItem = (props: FileImgItemProps) => {
  const {
    files,
    setFiles,
    cover,
    setCover,
    data,
    index,
    multiple = false,
    handleFileRemove,
  } = props;
  const { file, result } = data;

  const isResultString = typeof result === 'string';
  const isDefaultCover = index === 0;
  const isCheckedCover = cover === String(index);
  const fileLastModifiedTime = new Date(file.lastModified).toString();
  const isLastFile = files.length === 1;

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.currentTarget.value);
    setCover(String(index));
    const remainFiles = files.filter((v, i) => i !== index);
    const coverFile = { ...files[index], id: index, cover: true };
    const newFiles = [...remainFiles, coverFile].sort((a, b) => a.id - b.id);
    setFiles([...newFiles]);
  };

  useEffect(() => {
    setCover('0');
  }, [files.length]);

  return isResultString ? (
    <>
      <label
        key={index}
        className={`c-form__list ${multiple ? 'btn btn-light' : ''}`}
        htmlFor={`cover${index}`}
      >
        <div className="d-flex align-items-center">
          <div className="c-form__thumbnail">
            <img src={result} alt="img" className="c-form__img" />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-start">
            <div className="c-form__text c-form__text--title">{file.name}</div>
            <div className="c-form__text">大小: {file.size / 1000} KB</div>
            <div className="c-form__text">最後修改: {fileLastModifiedTime}</div>
            {multiple && (
              <div className="d-flex align-items-center mb-2">
                <input
                  type="radio"
                  id={`cover${index}`}
                  name="cover"
                  value={index}
                  className="form-check-input m-0 me-2"
                  onChange={handleCoverChange}
                  defaultChecked={isDefaultCover}
                  checked={isCheckedCover}
                />
                <div className="c-form__text">設為封面</div>
              </div>
            )}
          </div>
        </div>
        {!isLastFile && (
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              handleFileRemove(index);
            }}
          />
        )}
      </label>
    </>
  ) : null;
};

export default FileImgItem;
