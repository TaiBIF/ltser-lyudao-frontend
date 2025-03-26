import { useEffect } from 'react';

import FinalItem from './FinalItem';

import { HeaderMenuItem } from 'types/common';
import { useHeaderContext } from 'context/HeaderContext';

interface SecMenuSubItemProps {
  parentId: string;
  parentLink: string;
  data: HeaderMenuItem;
}

const SecMenuSubItem = (props: SecMenuSubItemProps) => {
  const { parentId, parentLink, data } = props;
  const { show, handleMenu3Click, menu3Refs, lastMenu3Key } =
    useHeaderContext();

  useEffect(() => {
    if (!lastMenu3Key) return;

    const target = menu3Refs.current[lastMenu3Key]; // 取得對應的 menu_3
    if (target) {
      const isOpen = show.menu3Map[lastMenu3Key]; // 取得該 menu_3 是否展開

      if (isOpen) {
        target.style.visibility = 'visible'; // 先讓內容可見
        target.style.opacity = '1';
        target.style.display = 'block';
        requestAnimationFrame(() => {
          target.style.maxHeight = `${target.scrollHeight}px`;
        });
      } else {
        target.style.opacity = '0'; // 先讓內容淡出
        target.style.maxHeight = '0px'; // 高度縮小
        setTimeout(() => {
          target.style.visibility = 'hidden'; // 動畫結束後才隱藏
        }, 300); // 這裡的 300ms 要與 CSS transition 時間對應
      }
    }
  }, [show.menu3Map, lastMenu3Key]);

  return (
    <>
      <div key={`${parentId}-${data.id}`} className="m3titlebox">
        <div
          className={`m3title ${show.menu3 ? 'now' : ''}`}
          onClick={() => handleMenu3Click(`${parentId}-${data.id}`)}
          data-target="menu3"
        >
          {data.title}
        </div>
        <div
          className="menu_3"
          ref={(el) => (menu3Refs.current[`${parentId}-${data.id}`] = el)}
        >
          {data.list &&
            data.list.map((finalItem) => {
              return (
                <FinalItem
                  key={`${parentId}-${data.id}-${finalItem.id}`}
                  parentId={`${parentId}-${data.id}`}
                  parentLink={`/${parentLink}/${data.link}`}
                  data={finalItem}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SecMenuSubItem;
