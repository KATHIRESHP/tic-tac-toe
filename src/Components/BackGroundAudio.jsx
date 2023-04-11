import React, { useEffect } from 'react';
import bgsound from '../resrc/backgroundmusic.mp3';

export default function BackGroundAudio() {
  useEffect(() => {
    const audio = new Audio(bgsound);
    audio.loop = true;
    document.addEventListener('click', () => {
      audio.play();
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener('click', () => {
        audio.play();
      });
    };
  }, []);

  return null;
}
