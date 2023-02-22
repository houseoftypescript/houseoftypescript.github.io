import styled from '@emotion/styled';
import Tabs, { TabsProps } from 'rc-tabs';
import { ReactNode } from 'react';

export const StyledTabs = styled(Tabs)<TabsProps & { children: ReactNode }>``;

export default StyledTabs;
