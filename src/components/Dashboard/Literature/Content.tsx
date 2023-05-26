import TableTemplate from 'components/Dashboard/Template/Table';
import AddBtn from 'components/Dashboard/AddBtn';

import { literatureColList } from 'data/dashboard';
import { literatureList } from 'data/literature';

const Content = () => {
  const PAGE: string = 'related-literature';
  return (
    <>
      <TableTemplate
        page={PAGE}
        cols={literatureColList}
        data={literatureList}
        renderAction={() => <AddBtn page={PAGE} />}
      />
    </>
  );
};

export default Content;
