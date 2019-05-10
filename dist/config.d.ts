import * as colors from './styles/colors';
export declare const config: {
    colors: typeof colors;
    styles: {
        body: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
        h1: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
        h2: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
        h3: import("styled-components").FlattenSimpleInterpolation;
        h4: import("styled-components").FlattenSimpleInterpolation;
        h5: import("styled-components").FlattenSimpleInterpolation;
        h6: import("styled-components").FlattenSimpleInterpolation;
        ol: import("styled-components").FlattenSimpleInterpolation;
        ul: import("styled-components").FlattenSimpleInterpolation;
        playground: import("styled-components").FlattenSimpleInterpolation;
        code: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
        pre: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
        paragraph: import("styled-components").FlattenSimpleInterpolation;
        table: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
        blockquote: import("styled-components").FlattenSimpleInterpolation;
    };
    fonts: {
        display: string;
        mono: string;
        ui: string;
    };
    radii: string;
    mode: string;
    logo: {
        src: string;
        width: number;
    };
    showPlaygroundEditor: boolean;
    linesToScrollEditor: number;
};
