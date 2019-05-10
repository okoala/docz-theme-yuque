import { SFC } from 'react';
import { PlaygroundProps as BasePlaygroundProps } from 'docz';
export interface PlaygroundProps extends BasePlaygroundProps {
    showEditor?: boolean;
}
export declare const Playground: SFC<PlaygroundProps>;
