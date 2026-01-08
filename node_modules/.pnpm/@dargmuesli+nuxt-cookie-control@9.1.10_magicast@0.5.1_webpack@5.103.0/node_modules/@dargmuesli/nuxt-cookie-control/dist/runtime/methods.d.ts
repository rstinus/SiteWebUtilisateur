import type { Cookie, ModuleOptions, Translatable } from '#cookie-control/types';
export declare const getAllCookieIdsString: (moduleOptions: ModuleOptions) => string;
export declare const getCookieIds: (cookies: Cookie[]) => string[];
export declare const removeCookie: (name: string) => undefined;
export declare const resolveTranslatable: (translatable: Translatable, locale?: import("#cookie-control/types").Locale) => string;
export declare const useResolveTranslatable: (locale?: import("#cookie-control/types").Locale) => (translatable: Translatable) => string;
