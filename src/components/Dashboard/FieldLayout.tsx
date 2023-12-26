import React, { useState, useEffect } from 'react';

import { Field, ErrorMessage, useFormikContext } from 'formik';

import FileImgItem from 'components/FieldLayout/FileImgItem';
import FileListItem from 'components/FieldLayout/FileListItem';

import {
  AttachmentsItem,
  FieldItem,
  FileItem,
  ImagesItem,
  ItemTypes,
} from 'types/utils';
import { hasImageProperty } from 'helpers/hasImageProperty';
import { BE_URL, IMAGE_URL } from 'utils/config';
import { FormLinkItem } from 'types/formLink';
import { NewsItem } from 'types/news';

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

  const renderRequiredText = () => {
    return required && <span className="text-danger">*</span>;
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
        <div className="c-form__set">
          <label htmlFor={title} className="c-form__label">
            {title}
            {renderRequiredText()}
          </label>
          <Field
            type={type}
            id={title}
            name={title}
            className="c-form__input"
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
        <div className="c-form__set">
          <label htmlFor={title} className="c-form__label">
            {label}
            {renderRequiredText()}
          </label>
          <Field
            as="select"
            id={title}
            name={title}
            className="c-form__input"
            readOnly={readonly}
            required={required}
            multiple={multiple}
          >
            <option value={0} disabled>
              請選擇{label}
            </option>
            {options?.map((v) => {
              const { id, title, name } = v;
              return (
                <option key={`${id}-${v.id}`} value={id}>
                  {title ? title : name}
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
          <div className="c-form__set">
            <label htmlFor={title} className="c-form__label">
              {label}
              {renderRequiredText()}
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
                let value;
                switch (id) {
                  case 'link':
                    return (
                      files.length !== 0 ||
                      (hasImageProperty(values) &&
                        typeof values.image === 'string' && (
                          <div key={id} className="c-form__text">
                            {title}
                            {hasImageProperty(values) &&
                              typeof values.image === 'string' && (
                                <a
                                  href={`${IMAGE_URL}/${values.image}`}
                                  className="e-link"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {values.image}
                                </a>
                              )}
                          </div>
                        ))
                    );
                  case 'file':
                    return (
                      typeof values.file === 'string' && (
                        <div key={id} className="c-form__text">
                          {title}
                          <a
                            href={`${IMAGE_URL}/${values.file}`}
                            className="e-link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {values.file}
                          </a>
                        </div>
                      )
                    );
                  case 'cover':
                    value = (values as NewsItem).cover;
                    const hasCover =
                      (values as NewsItem).cover?.length !== 0 &&
                      typeof value === 'string';
                    return (
                      hasCover && (
                        <div key={id} className="c-form__text">
                          {title}
                          <a
                            href={`${IMAGE_URL}/${value}`}
                            className="e-link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {value}
                          </a>
                        </div>
                      )
                    );
                  case 'files':
                    value = ((values as FormLinkItem) || (values as NewsItem))
                      .attachments;
                    const hasAttachments =
                      ((values as FormLinkItem) || (values as NewsItem))
                        .attachments?.length !== 0;
                    return (
                      hasAttachments && (
                        <div key={id} className="c-form__text">
                          {title}
                          {value &&
                            value.map((v: AttachmentsItem, i: number) => {
                              return (
                                <div key={i} className="c-form__text">
                                  {v.file}
                                </div>
                              );
                            })}
                        </div>
                      )
                    );
                  case 'images':
                    value = (values as NewsItem).images;
                    const hasImages = (values as NewsItem).images?.length !== 0;
                    return (
                      hasImages && (
                        <div key={id} className="c-form__text">
                          {title}
                          {value &&
                            value.map((v: ImagesItem, i: number) => {
                              return (
                                <div key={i} className="c-form__text">
                                  {v.image}
                                </div>
                              );
                            })}
                        </div>
                      )
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
                    data={v}
                    index={i}
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
        <div className="c-form__set">
          <label htmlFor={title} className="c-form__label">
            {label}
            {renderRequiredText()}
          </label>
          <Field
            as={type}
            id={title}
            name={title}
            className="c-form__input"
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
          <div className="c-form__checkbox c-form__set">
            <div className="c-form__label">
              {label}
              {renderRequiredText()}
            </div>
            <div className="c-form__checkbox-set">
              {options?.map((v) => {
                const { title } = v;
                return (
                  <div key={`${id}-${v.id}`} className="c-checkbox form-check">
                    <label
                      className="c-checkbox__label form-check-label"
                      htmlFor={title}
                    >
                      <Field
                        type="checkbox"
                        id={title}
                        name={data.title}
                        value={String(v.id)}
                        className="c-checkbox__input form-check-input"
                      />
                      {title}
                    </label>
                  </div>
                );
              })}
            </div>
            <ErrorMessage
              name={title}
              component="small"
              className="text-danger"
            />
          </div>
        </>
      );
    default:
      return <></>;
  }
};

export default FieldLayout;
