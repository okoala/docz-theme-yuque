import { SFC } from 'react';
export interface ResizeProps {
    onChangeSize: (width: string, height: string) => void;
}
export declare const ResizeBar: SFC<ResizeProps>;
