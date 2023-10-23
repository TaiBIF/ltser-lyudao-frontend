import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ArrowIcon from 'components/Home/News/ArrowIcon';
import Deco from 'components/Home/News/Deco';

import { EnterState } from 'types/home';
import { NewsItem, NewsFilterItem, HomeNewsFilterItem } from 'types/news';
import { TypeItem } from 'types/utils';

import { newsList, newsTypeList } from 'data/news';
import { NEWS_API_URL, NEWS_TYPE_API_URL } from 'data/api';

import useRender from 'hooks/page/useRender';
import { useTranslation } from 'react-i18next';

interface ContentProps {
  enter: EnterState;
  PAGE_NAME: string;
}

const Content = (props: ContentProps) => {
  const { enter, PAGE_NAME } = props;

  const COMPONENT_NAME = 'News';
  const I18N_KEY_PREFIX = `${PAGE_NAME}.${COMPONENT_NAME}`;

  const { t } = useTranslation();

  const [filter, setFilter] = useState<HomeNewsFilterItem>({
    type: 0,
  });
  const [typeList, setTypeList] = useState<TypeItem[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);

  const { getList } = useRender();

  const isAllType = filter.type === 0;
  const handleTypeClick = (id: number | string) => {
    setFilter({ ...filter, type: id });
  };

  useEffect(() => {
    getList({
      url: NEWS_TYPE_API_URL,
      setList: setTypeList,
    });
  }, []);

  useEffect(() => {
    getList({
      url: NEWS_API_URL,
      setList: setNews,
      defaultList: newsList,
      params: {
        tag: !isAllType ? filter.type : null,
      },
    });
  }, [filter]);

  return (
    <>
      <section className={`s3-news ${enter.s3 ? 'vivi' : ''}`}>
        <div className="main-box">
          <div className="leftbox">
            <h2>{t(`${I18N_KEY_PREFIX}.title`)}</h2>
            <div className="tab-area">
              <ul>
                {/*目前選取的給class now*/}
                {/*目前預設4種顏色 無限新增類別的話可能要開後台填顏色*/}
                {[
                  { id: 0, title: t(`${I18N_KEY_PREFIX}.allTabBtn`) },
                  ...typeList,
                ].map((v) => {
                  const { id, title } = v;
                  return (
                    <li
                      key={id}
                      className={`${
                        filter.type === id ? 'now' : ''
                      } e-tag e-tag--news`}
                      data-color={Number(id) === 0 ? 'all' : Number(id) % 3}
                      onClick={() => {
                        handleTypeClick(Number(id));
                      }}
                    >
                      {title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="news-list">
              <ul>
                {news.slice(0, 3).map((v) => {
                  const { id, type, title, content, newsDate } = v;
                  const matchType = type.map((item) =>
                    typeList.find((v: TypeItem) => v.id === item)
                  );
                  return (
                    <li key={id}>
                      <Link to={`/news/${id}`}>
                        <div className="cat-date">
                          {matchType.map((v) => {
                            return (
                              v && (
                                <div
                                  key={v.id}
                                  className="category e-tag e-tag--news"
                                  data-color={Number(v.id) % 4}
                                >
                                  {v.title}
                                </div>
                              )
                            );
                          })}
                          <div className="date">{newsDate}</div>
                        </div>
                        <h3>{title}</h3>
                        <p>{content}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="align-right">
              <a href="/" className="link-more">
                <p>{t(`${I18N_KEY_PREFIX}.viewAllBtn`)}</p>
                <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="rightbox">
            <div className="picbox2">
              <div className="pic1" />
              <div className="pic2" />
            </div>
            <Deco />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
