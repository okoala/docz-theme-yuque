import * as React from 'react';
import { MenuItem } from 'docz';
export interface MenuProps {
    item: MenuItem;
    sidebarToggle: (ev: React.SyntheticEvent<any>) => void;
    collapseAll: boolean;
}
export interface MenuState {
    opened: boolean;
    hasActive: boolean;
}
export declare const Menu: React.SFC<MenuProps>;
