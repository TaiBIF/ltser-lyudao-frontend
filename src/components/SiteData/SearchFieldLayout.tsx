import React from 'react';

import { Field, ErrorMessage } from 'formik';
import { RawFieldItem } from 'types/field';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface SearchFieldLayoutProps {
  data: RawFieldItem;
}

const DateField: React.FC<{ id: string; field: any; form: any; placeholderText: string }> = ({ id, field, form, placeholderText }) => {
  const handleDateChange = (val: any) => {
    if (val) {
      // 只保留日期部分
      const adjustedDate = new Date(
        val.getTime() - val.getTimezoneOffset() * 60000
      ).toISOString().split('T')[0];
      form.setFieldValue(id, adjustedDate);
    } else {
      form.setFieldValue(id, val);
    }
  };

  return (
    <DatePicker
      {...field}
      selected={field.value ? new Date(field.value) : null}
      onChange={handleDateChange}
      dateFormat="yyyy/MM/dd"
      placeholderText={placeholderText}
      showYearDropdown
      dateFormatCalendar="MMMM"
      yearDropdownItemNumber={30}
      scrollableYearDropdown
    />
  );
};  

const SearchFieldLayout = (props: SearchFieldLayoutProps) => {
  const { data } = props;
  const { id, title, type } = data;
  const { i18n } = useTranslation();
  const placeholderText = i18n.language === 'zh-tw' ? '年-月-日' : 'yyyy-mm-dd';

  switch (type) {
    case 'text':
    case 'number':
      return (
        <li key={id}>
          <p>{title}</p>
          <Field type={type} id={id} name={id} />
          <ErrorMessage name={id} component="small" />
        </li>
      );
      case 'date':
      return (
        <li key={id}>
          <p>{title}</p>
          <Field name={id}>
            {({ field, form }: any) => (
              <DateField id={id} field={field} form={form} placeholderText={placeholderText} />
            )}
          </Field>
          <ErrorMessage name={id} component="small" />
        </li>
      );
    default:
      return <></>;
  }
};

export default SearchFieldLayout;
