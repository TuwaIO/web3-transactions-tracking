import { createContext, ReactNode, useContext } from 'react';

import { defaultLabels } from '../i18n/en';
import { TuwaLabels } from '../i18n/types';

const LabelsContext = createContext<TuwaLabels>(defaultLabels);

export const LabelsProvider = ({ labels, children }: { labels: TuwaLabels; children: ReactNode }) => {
  return <LabelsContext.Provider value={labels}>{children}</LabelsContext.Provider>;
};

export const useLabels = () => {
  return useContext(LabelsContext);
};
