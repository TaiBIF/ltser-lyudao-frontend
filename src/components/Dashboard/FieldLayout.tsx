import React, { useState, useEffect } from 'react';

import { Field, ErrorMessage, useFormikContext } from 'formik';

import { FieldItem } from 'types/dashboard';

type FileValue = {
  image: string;
  type: string;
};

interface FileItem {
  file: File;
  result: string | ArrayBuffer | null;
}

type Props = {
  data: FieldItem;
};

const FieldLayout = (props: Props) => {
  const { data } = props;
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
    cover,
  } = data;
  const { values, setFieldValue } = useFormikContext();
  const [files, setFiles] = useState<FileItem[]>([]);
  const [fileName, setFileName] = useState('');

  const hadCover = cover !== undefined;

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.currentTarget.files?.length) {
  //     if (multiple) {
  //       setFieldValue(
  //         e.currentTarget.name,
  //         Array.from(e.currentTarget.files).map((v) => v.name)
  //       );
  //     } else {
  //       setFieldValue(e.currentTarget.name, e.currentTarget.files[0].name);
  //     }
  //   }
  // };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.currentTarget.files;
    setFileName(e.currentTarget.name);
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result;
          if (result instanceof ArrayBuffer) {
            setFiles((prev) => [...prev, { file, result: '' }]);
          } else {
            setFiles((prev) => [...prev, { file, result: result as string }]);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('cover', e.currentTarget.value);
  };

  useEffect(() => {
    if (fileName) {
      setFieldValue(
        fileName,
        files.map((v) => v.file.name)
      );
    }
  }, [files]);

  const handleFileClick = () => {
    setFiles([]);
  };

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
          >
            <option value="" disabled>
              請選擇{label}
            </option>
            {options?.map((v) => {
              const { title } = v;
              return (
                <option key={`${id}-${v.id}`} value={title}>
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
            <input
              type="file"
              id={title}
              name={title}
              className="form-control"
              onChange={handleFileChange}
              onClick={handleFileClick}
              multiple={multiple}
            />
            {hints &&
              hints.map((v) => {
                const { id, title } = v;
                const isLink = id === 'link';
                return isLink ? (
                  <div key={id} className="form-text">
                    {title}
                    <a
                      href={(values as FileValue).image}
                      target="blank"
                      className="ms-2"
                    >
                      {(values as FileValue).image}
                    </a>
                  </div>
                ) : (
                  <div className="form-text"></div>
                );
              })}
          </div>
          {files && (
            <div role="group" aria-labelledby="checkbox-group">
              <div className="d-flex align-items-center mb-2">
                {files.map((v, i) => {
                  const { file, result } = v;
                  return (
                    typeof result === 'string' &&
                    (hadCover ? (
                      <div key={i} className="w-25">
                        <label htmlFor={`cover${i}`} className="d-block">
                          <div className="ratio ratio-1x1">
                            <img
                              src={result}
                              alt="img"
                              className="w-100 h-100 object-fit-contain"
                            />
                          </div>
                        </label>
                        <Field
                          type="radio"
                          id={`cover${i}`}
                          name="cover"
                          value={file.name}
                          onChange={handleCoverChange}
                          // required
                        />
                        <ErrorMessage
                          name="cover"
                          component="small"
                          className="text-danger"
                        />
                      </div>
                    ) : (
                      <div key={i} className="ratio ratio-1x1 w-25">
                        <img
                          src={result}
                          alt="img"
                          className="w-100 h-100 object-fit-contain"
                        />
                      </div>
                    ))
                  );
                })}
              </div>
            </div>
          )}
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
