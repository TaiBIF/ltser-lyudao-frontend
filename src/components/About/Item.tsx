import React from 'react';

import AudioPlayer from 'react-h5-audio-player';

import { AttachmentItem } from 'types/about';
import { FILE_URL, IMAGE_URL } from 'utils/config';

const Item = ({ data }: { data: AttachmentItem }) => {
  const { id, name, content, file, image, created_at, updated_at } = data;
  const audioExtensions = [
    'mp3',
    'wav',
    'aac',
    'm4a',
    'flac',
    'ogg',
    'wma',
    'alac',
    'ac3',
    '3gp',
    'amr',
    'aiff',
    'opus',
    'ra',
    'rm',
  ];
  const imageLink = `${IMAGE_URL}${image}`;
  const fileLink = `${FILE_URL}${file}`;
  const isAudio = audioExtensions.includes(
    fileLink.split('.')[fileLink.split('.').length - 1]
  );

  const hasFile = file.length !== 0;
  return (
    <>
      <div className="ab-item">
        <div className="titlebox">{name}</div>
        <p className="center marb_20">{content}</p>
        {image && (
          <div className="main-1280">
            <img className="marb_20" src={imageLink} alt={name} />
          </div>
        )}
        {hasFile &&
          (isAudio ? (
            <AudioPlayer
              autoPlay
              src={fileLink}
              onPlay={(e) => console.log('onPlay')}
            />
          ) : (
            <div>
              <a href={fileLink} target="_blank" rel="noreferrer">
                {fileLink}
              </a>
            </div>
          ))}
      </div>
    </>
  );
};

export default Item;
