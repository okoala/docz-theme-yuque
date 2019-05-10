import { SFC } from 'react';
export interface ActionsBarProps {
    code: string;
    showEditor: boolean;
    fullscreen: boolean;
    codesandboxUrl: string | null;
    onClickRefresh: () => void;
    onClickFullscreen: () => void;
    onClickEditor: () => void;
}
export declare const ActionsBar: SFC<ActionsBarProps>;
