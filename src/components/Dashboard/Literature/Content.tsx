import TableTemplate from 'components/Dashboard/Template/Table';

import { literatureColList } from 'data/dashboard';
import { literatureList } from 'data/literature';

const Content = () => {
  return (
    <>
      <TableTemplate
        page="related-literature"
        cols={literatureColList}
        data={literatureList}
      />
    </>
  );
};

export default Content;
