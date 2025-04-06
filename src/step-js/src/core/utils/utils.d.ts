declare namespace Utils {
    const getNextKey: () => number;
    const debounce: (callback: any, delay: number) => (...args: any) => void;
    const throttle: (callback: any, delay: number) => (...args: any) => void;
    const wait: (duration: number, time0?: number) => Promise<void>;
    const textToHTML: (text: any) => any;
    class ParsedURL {
        href: string;
        protocol: string;
        username: string;
        password: string;
        host: string;
        hostname: string;
        port: string;
        pathname: string;
        pathnameFragments: string[];
        search: string;
        hash: string;
        origin: string;
        searchParams: URLSearchParams;
        constructor(url: any);
    }
}
export default Utils;
