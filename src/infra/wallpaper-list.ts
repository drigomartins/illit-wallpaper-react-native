import { WallpaperItem } from '@/domain';
import { hokazonoIroha } from './hokazono-iroha';
import { minju } from './minju';
import { sakaiMoka } from './sakai-moka';
import { wonhee } from './wonhee';
import { yunah } from './yunah';
import { illit } from './illit';

export const wallpaperList: WallpaperItem[] = [
  ...minju,
  ...wonhee,
  ...sakaiMoka,
  ...hokazonoIroha,
  ...yunah,
  ...illit,
];
