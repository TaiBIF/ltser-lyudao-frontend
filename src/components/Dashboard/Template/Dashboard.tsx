import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { tabList } from 'data/dashboard';
import { useAuthContext } from 'context/AuthContext';

interface DashboardTemplateProps {
  content: React.ReactNode;
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = (props) => {
  const { content } = props;
  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const { group } = useAuthContext();

  const isFetchingGroup = group === '';

  return (
    <>
      <main className="u-page">
        <div className="container u-container">
          <div className="row gx-5 u-container">
            <div className="col-3 pe-4">
              <div className="c-tabs">
                {tabList.map((v) => {
                  const { id, title, auth } = v;
                  return (
                    !isFetchingGroup &&
                    auth?.includes(group) && (
                      <Link
                        key={id}
                        className={`c-tabs__btn ${
                          paths.includes(id) ||
                          (paths.includes('user') && id === 'user/edit')
                            ? 'active'
                            : ''
                        }`}
                        to={`/dashboard/${id}`}
                      >
                        {title}
                      </Link>
                    )
                  );
                })}
              </div>
            </div>
            <div className="col-9">
              <div className="u-main">{content}</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardTemplate;
