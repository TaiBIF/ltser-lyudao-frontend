import React, { useState, useEffect } from 'react';

import { Field, ErrorMessage, useFormikContext } from 'formik';

import FileImgItem from 'components/FieldLayout/FileImgItem';
import FileListItem from 'components/FieldLayout/FileListItem';

import { AttachmentsItem, FieldItem, FileItem, ItemTypes } from 'types/utils';
import { hasImageProperty } from 'helpers/hasImageProperty';
import { BE_URL } from 'utils/config';
import { FormLinkItem } from 'types/formLink';

const FieldLayout = ({ data }: { data: FieldItem }) => {
  const {
    id,
    type,
    title,
    label,
    readonly,
    required,
    hints,
    options,
    multiple,
    fileType,
  } = data;
  const { values, setFieldValue } = useFormikContext<ItemTypes>();
  const [files, setFiles] = useState<FileItem[]>([]);
  const [fileName, setFileName] = useState('');
  const [cover, setCover] = useState('0');

  const isNoFile = files.length === 0;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.currentTarget.files;
    setFileName(e.currentTarget.name);
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        if (file.type.includes('image/')) {
          const reader = new FileReader();
          reader.onload = () => {
            const result = reader.result;
            if (result instanceof ArrayBuffer) {
              setFiles((prev) => [
                ...prev,
                { id: i, file, result: '', cover: false },
              ]);
            } else {
              setFiles((prev) => [
                ...prev,
                { id: i, file, result: result as string, cover: false },
              ]);
            }
          };
          reader.readAsDataURL(file);
        } else {
          setFiles((prev) => [
            ...prev,
            { id: i, file, result: file.name, cover: false },
          ]);
        }
      }
    }
  };

  const handleFileRemove = (index: number) => {
    setFiles((prevState) => prevState.filter((_, i) => i !== index));
  };

  const handleFileClick = () => {
    setFiles([]);
  };

  useEffect(() => {
    if (fileName) {
      setFieldValue(
        fileName,
        files.length === 1 ? files[0].file : files.map((v) => v.file)
      );
    }
  }, [files]);

  switch (type) {
    case 'text':
    case 'email':
    case 'date':
      return (
        <div className="mb-2">
          <label htmlFor={title} className="form-label">
            {label}
          </label>
          <Field
            type={type}
            id={title}
            name={title}
            className="form-control"
            placeholder={`請輸入${label}`}
            readOnly={readonly}
            required={required}
          />
          <ErrorMessage
            name={title}
            component="small"
            className="text-danger"
          />
        </div>
      );
    case 'select':
      return (
        <div className="mb-2">
          <label htmlFor={title} className="form-label">
            {label}
          </label>
          <Field
            as="select"
            id={title}
            name={title}
            className="form-select"
            readOnly={readonly}
            required={required}
            multiple={multiple}
          >
            <option value={0} disabled>
              請選擇{label}
            </option>
            {options?.map((v) => {
              const { id, title } = v;
              return (
                <option key={`${id}-${v.id}`} value={id}>
                  {title}
                </option>
              );
            })}
          </Field>
          <ErrorMessage
            name={title}
            component="small"
            className="text-danger"
          />
        </div>
      );
    case 'file':
      return (
        <>
          <div className="mb-2">
            <label htmlFor={title} className="form-label">
              {label}
            </label>
            <label htmlFor={title} className="c-form__file">
              <span>{files.length === 0 ? '選擇檔案' : '重新選擇檔案'}</span>
            </label>
            <input
              type="file"
              id={title}
              name={title}
              className="d-none"
              onChange={handleFileChange}
              onClick={handleFileClick}
              multiple={multiple}
              accept={`${fileType}/*`}
            />
            {hints &&
              hints.map((v) => {
                const { id, title } = v;
                switch (id) {
                  case 'link':
                    return (
                      !isNoFile ||
                      (hasImageProperty(values) &&
                        typeof values.image === 'string' && (
                          <div key={id} className="form-text">
                            {title}
                            {hasImageProperty(values) &&
                              typeof values.image === 'string' && (
                                <a
                                  href={`${BE_URL}/${values.image}`}
                                  className="ms-2"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {values.image}
                                </a>
                              )}
                          </div>
                        ))
                    );
                  case 'files':
                    const value = (values as FormLinkItem).formLinkAttachments;
                    return (
                      <div key={id} className="form-text d-flex">
                        {title}
                        <div>
                          {value &&
                            value.map((v: AttachmentsItem, i: number) => {
                              return <div key={i}>{v.file}</div>;
                            })}
                        </div>
                      </div>
                    );
                }
              })}
          </div>
          {files &&
            (fileType === 'image' ? (
              files.map((v, i) => {
                return (
                  <FileImgItem
                    key={v.id}
                    files={files}
                    setFiles={setFiles}
                    cover={cover}
                    setCover={setCover}
                    data={v}
                    index={i}
                    multiple={multiple}
                    handleFileRemove={handleFileRemove}
                  />
                );
              })
            ) : (
              <ul className="list-unstyled">
                {files.map((v, i) => {
                  return (
                    <FileListItem
                      key={v.id}
                      data={v}
                      index={i}
                      handleFileRemove={handleFileRemove}
                    />
                  );
                })}
              </ul>
            ))}
        </>
      );
    case 'textarea':
      return (
        <div className="mb-2">
          <label htmlFor={title} className="form-label">
            {label}
          </label>
          <Field
            as={type}
            id={title}
            name={title}
            className="form-control"
            placeholder={`請輸入${label}`}
            readOnly={readonly}
            required={required}
            rows="10"
          />
          <ErrorMessage
            name={title}
            component="small"
            className="text-danger"
          />
        </div>
      );
    case 'checkbox':
      return (
        <>
          <div role="group" aria-labelledby="checkbox-group">
            <div className="form-label">{label}</div>
            <div className="d-flex align-items-center mb-2">
              {options?.map((v) => {
                const { title } = v;
                return (
                  <div key={`${id}-${v.id}`} className="form-check me-2">
                    <label className="form-check-label" htmlFor={title}>
                      <Field
                        type="checkbox"
                        id={title}
                        name={data.title}
                        value={String(v.id)}
                        className="form-check-input"
                      />
                      {title}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <ErrorMessage
            name={title}
            component="small"
            className="text-danger"
          />
        </>
      );
    default:
      return <></>;
  }
};

export default FieldLayout;
