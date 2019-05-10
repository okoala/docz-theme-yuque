import * as React from 'react';
import { SFC } from 'react';
import { WindowLocation } from '@reach/router';
export interface LinkProps {
    to: string;
    onClick?: React.MouseEventHandler<any>;
}
export interface SmallLinkProps extends LinkProps {
    as: any;
    slug: string;
    location: WindowLocation;
}
export declare const SmallLink: SFC<SmallLinkProps>;
