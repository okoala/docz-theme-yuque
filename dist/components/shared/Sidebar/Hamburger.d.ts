import * as React from 'react';
import { SFC } from 'react';
interface OpenProps {
    opened: boolean;
}
interface HamburgerProps extends OpenProps {
    onClick: (ev: React.SyntheticEvent<any>) => void;
}
export declare const Hamburger: SFC<HamburgerProps>;
export {};
