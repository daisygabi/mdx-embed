import { MDXProvider } from '@mdx-js/react';
import React, { FunctionComponent } from 'react';
import { Buzzprout } from '../buzzprout';
import { Cinnamon } from '../cinnamon';
import { CodePen } from '../codepen';
import { CodeSandbox } from '../codesandbox';
import { EggheadLesson } from '../egghead';
import { Flickr } from '../flickr';
import { Gist } from '../gist';
import { Instagram } from '../instagram';
import { Lbry } from '../lbry';
import { Pin, PinterestBoard, PinterestFollowButton } from '../pinterest';
import { SimplecastEpisode } from '../simplecast';
import { SoundCloud } from '../soundcloud';
import { Spotify } from '../spotify';
import { Strava } from '../strava';
import { TikTok } from '../tiktok';
import { Twitch } from '../twitch';
import {
  Tweet,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterList,
  TwitterMentionButton,
  TwitterTimeline,
} from '../twitter';
import { Vimeo } from '../vimeo';
import { Wikipedia } from '../wikipedia';
import { YouTube } from '../youtube';

const components = {
  Buzzprout,
  Cinnamon,
  CodePen,
  CodeSandbox,
  EggheadLesson,
  Flickr,
  Gist,
  Instagram,
  Lbry,
  Pin,
  PinterestBoard,
  PinterestFollowButton,
  SimplecastEpisode,
  SoundCloud,
  Spotify,
  Strava,
  TikTok,
  Twitch,
  Tweet,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterList,
  TwitterMentionButton,
  TwitterTimeline,
  Vimeo,
  Wikipedia,
  YouTube,
} as any;

export const MDXEmbedProvider: FunctionComponent = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
