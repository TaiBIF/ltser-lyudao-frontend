import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { HeaderMenuItem } from 'types/common';
import { routeList } from 'data/common';

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const paths = pathname.split('/').slice(1);
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

  const handleMatchRoute = (routes: HeaderMenuItem[], path: string): string => {
    for (const route of routes) {
      if (route.link === path) {
        return route.title;
      } else if (route.list) {
        const matchRoute = handleMatchRoute(route.list, path);
        if (matchRoute) {
          return matchRoute;
        }
      }
    }
    return '';
  };

  useEffect(() => {
    let breadcrumbList: string[] = [];
    paths.forEach((path) => {
      breadcrumbList.push(handleMatchRoute(routeList, path));
    });
    setBreadcrumb([...breadcrumbList]);
  }, [pathname]);
  return (
    <>
      <div className="path">
        <div className="main-box">
          <div className="path-area">
            <a href="/" className="home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.633"
                height="20.175"
                viewBox="0 0 22.633 20.175"
              >
                <g id="home" transform="translate(0.001 -27.797)">
                  <g
                    id="Group_5"
                    data-name="Group 5"
                    transform="translate(-0.001 27.798)"
                  >
                    <g
                      id="Group_4"
                      data-name="Group 4"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Path_25"
                        data-name="Path 25"
                        d="M22.391,35.766,11.663,27.911a.588.588,0,0,0-.695,0L.24,35.766a.588.588,0,0,0,.695.949l10.381-7.6,10.381,7.6a.588.588,0,0,0,.695-.949Z"
                        transform="translate(0.001 -27.798)"
                        fill="#888"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_7"
                    data-name="Group 7"
                    transform="translate(2.495 36.848)"
                  >
                    <g id="Group_6" data-name="Group 6">
                      <path
                        id="Path_26"
                        data-name="Path 26"
                        d="M73.506,232.543a.588.588,0,0,0-.588.588v9.36h-4.7v-5.109a2.94,2.94,0,0,0-5.881,0v5.109h-4.7v-9.36a.588.588,0,0,0-1.176,0v9.948a.588.588,0,0,0,.588.588h5.88a.588.588,0,0,0,.586-.542.442.442,0,0,0,0-.046v-5.7a1.764,1.764,0,0,1,3.529,0v5.7a.432.432,0,0,0,0,.045.588.588,0,0,0,.586.543h5.88a.588.588,0,0,0,.588-.588v-9.948A.588.588,0,0,0,73.506,232.543Z"
                        transform="translate(-56.452 -232.543)"
                        fill="#888"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <span> &gt; </span>
            {breadcrumb.map((v, i) => {
              return (
                <React.Fragment key={i}>
                  <p>{v}</p>
                  {i !== breadcrumb.length - 1 && <span> &gt; </span>}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
