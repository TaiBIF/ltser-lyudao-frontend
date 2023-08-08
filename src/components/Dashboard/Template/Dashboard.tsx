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

  return (
    <>
      <main className="u-page">
        <div className="container">
          <div className="row gx-5">
            <div className="col-3">
              <div className="d-flex flex-column">
                {tabList.map((v) => {
                  const { id, title, auth } = v;
                  return (
                    auth?.includes(group) && (
                      <Link
                        key={id}
                        className={`btn btn-${
                          paths.includes(id) ? 'primary' : 'light'
                        } mb-2`}
                        to={`/dashboard/${id}`}
                      >
                        {title}
                      </Link>
                    )
                  );
                })}
              </div>
            </div>
            <div className="col-9">{content}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardTemplate;
