import React from 'react';
import { useTranslation } from 'react-i18next';
import SiteSelect from 'components/SiteData/SiteSelect';
import Placeholder from 'components/Placeholder';
import { FilterItem } from 'types/siteData';

interface RenderSiteSelectProps {
  titleKey: string;
  options: { id: string | number; title: string }[] | null;
  filter: FilterItem;
  setFilter: React.Dispatch<React.SetStateAction<FilterItem>>;
  I18N_KEY_PREFIX: string;
  selectValue: keyof FilterItem;
}

const RenderSiteSelect: React.FC<RenderSiteSelectProps> = ({
  titleKey,
  options,
  filter,
  setFilter,
  I18N_KEY_PREFIX,
  selectValue,
}) => {
  const { t } = useTranslation();

  if (!options) return <Placeholder layout="inline" />;
  if (options.length === 0)
    return <>{t(`${I18N_KEY_PREFIX}.siteEmptyStateText`)}</>;

  return (
    <SiteSelect
      title={t(`${I18N_KEY_PREFIX}.${titleKey}`)}
      options={options}
      filter={filter}
      setFilter={setFilter}
      I18N_KEY_PREFIX={I18N_KEY_PREFIX}
      selectValue={selectValue}
    />
  );
};

export default RenderSiteSelect;
