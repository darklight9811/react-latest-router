/// <reference types="react" />
export default function Route({ to, ...props }: {
    [x: string]: any;
    to?: () => null;
}): JSX.Element;
