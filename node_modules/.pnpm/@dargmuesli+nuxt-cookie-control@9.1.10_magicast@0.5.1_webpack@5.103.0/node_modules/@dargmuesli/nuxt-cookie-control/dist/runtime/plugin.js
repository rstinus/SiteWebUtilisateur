import { ref } from "vue";
import { COOKIE_ID_SEPARATOR } from "#cookie-control/constants";
import { getAllCookieIdsString } from "#cookie-control/methods";
import { defineNuxtPlugin, useCookie, useRuntimeConfig } from "#imports";
export default defineNuxtPlugin((_nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const moduleOptions = runtimeConfig.public.cookieControl;
  const cookieIsConsentGiven = useCookie(
    moduleOptions.cookieNameIsConsentGiven,
    moduleOptions.cookieOptions
  );
  const cookieCookiesEnabledIds = useCookie(
    moduleOptions.cookieNameCookiesEnabledIds,
    moduleOptions.cookieOptions
  ).value?.split(COOKIE_ID_SEPARATOR);
  const isConsentGiven = ref(
    cookieIsConsentGiven.value === void 0 ? void 0 : cookieIsConsentGiven.value === getAllCookieIdsString(moduleOptions)
  );
  const cookiesEnabled = ref(
    cookieCookiesEnabledIds === void 0 ? void 0 : [
      ...moduleOptions.cookies.necessary.filter(
        (cookieNecessary) => cookieCookiesEnabledIds.includes(cookieNecessary.id)
      ),
      ...moduleOptions.cookies.optional.filter(
        (cookieOptional) => cookieCookiesEnabledIds.includes(cookieOptional.id)
      )
    ]
  );
  const cookiesEnabledIds = ref(cookieCookiesEnabledIds);
  const isModalActive = ref();
  const locale = ref();
  const state = {
    cookiesEnabled,
    cookiesEnabledIds,
    isConsentGiven,
    isModalActive,
    locale,
    moduleOptions
  };
  return {
    provide: {
      cookies: state
    }
  };
});
