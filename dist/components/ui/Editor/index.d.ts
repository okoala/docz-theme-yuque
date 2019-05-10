import * as React from 'react';
export interface EditorProps {
    children: any;
    className?: string;
    editorClassName?: string;
    actions?: React.ReactNode;
    readOnly?: boolean;
    mode?: string;
    matchBrackets?: boolean;
    indentUnit?: number;
    onChange?: (code: string) => any;
    language?: string;
    withLastLine?: boolean;
}
export declare const Editor: React.SFC<EditorProps>;
