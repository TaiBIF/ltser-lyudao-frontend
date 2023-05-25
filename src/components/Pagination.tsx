import React from 'react';

const Pagination = () => {
  return (
    <>
      <div className="page-num">
        {/*現在位置加now*/}
        <a href="/" className="num">
          1
        </a>
        <a href="/" className="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.187"
            height="17.053"
            viewBox="0 0 9.187 17.053"
          >
            <g id="pre" transform="translate(111.483 17.054) rotate(180)">
              <g
                id="Group_17"
                data-name="Group 17"
                transform="translate(102.297 0)"
              >
                <path
                  id="Path_59"
                  data-name="Path 59"
                  d="M111.291,8.059,103.417.185a.656.656,0,0,0-.928.928L109.9,8.523l-7.411,7.411a.656.656,0,0,0,.928.928l7.874-7.874A.656.656,0,0,0,111.291,8.059Z"
                  transform="translate(-102.297 0)"
                  fill="#529a81"
                />
              </g>
            </g>
          </svg>
          <p>上一頁</p>
        </a>
        <a href="/" className="num">
          2
        </a>
        <a href="/" className="num now">
          3
        </a>
        <a href="/" className="num">
          4
        </a>
        <a href="/" className="next">
          <p>下一頁</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.187"
            height="17.053"
            viewBox="0 0 9.187 17.053"
          >
            <g id="next" transform="translate(-102.297 0)">
              <g
                id="Group_17"
                data-name="Group 17"
                transform="translate(102.297 0)"
              >
                <path
                  id="Path_59"
                  data-name="Path 59"
                  d="M111.291,8.059,103.417.185a.656.656,0,0,0-.928.928L109.9,8.523l-7.411,7.411a.656.656,0,0,0,.928.928l7.874-7.874A.656.656,0,0,0,111.291,8.059Z"
                  transform="translate(-102.297 0)"
                  fill="#529a81"
                />
              </g>
            </g>
          </svg>
        </a>
        <a href="/" className="num">
          5
        </a>
      </div>
    </>
  );
};

export default Pagination;
