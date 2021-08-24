import React from 'react';
import { MediaContextProvider } from './media';

export const Boot = ({ element }) => <MediaContextProvider>{element}</MediaContextProvider>;
