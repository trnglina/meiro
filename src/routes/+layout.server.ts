import { extractLang } from '$lib/server/extract/lang';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (event) => ({
  lang: extractLang(event),
});
