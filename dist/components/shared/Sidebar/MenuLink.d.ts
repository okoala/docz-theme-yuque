import * as React from 'react';
import { MenuItem } from 'docz';
export declare const createLink: (Link: React.ComponentType<any>) => import("styled-components").StyledComponent<React.ComponentType<any>, any, {}, never>;
interface LinkProps {
    item: MenuItem;
    onClick?: React.MouseEventHandler<any>;
    className?: string;
    innerRef?: (node: any) => void;
    children?: React.ReactNode;
    onActiveChange?: (active: boolean) => void;
}
export declare const MenuLink: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<any>>;
export {};
