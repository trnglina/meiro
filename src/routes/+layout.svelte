<script lang="ts">
import '../app.css';

import type { Lang } from '$lib/intl/langs';
import { LANGS } from '$lib/intl/langs';
import { RESOURCES } from '$lib/intl/resources';
import logger from '$lib/logger';
import { FluentBundle } from '@fluent/bundle';
import { FluentProvider } from '@nubolab-ffwd/svelte-fluent';
import type { LayoutData } from './$types';

export let data: LayoutData;

const makeBundle = (lang: Lang): FluentBundle => {
  const bundle = new FluentBundle(lang);
  for (const error of bundle.addResource(RESOURCES[lang])) {
    logger.error(`error loading resource '${lang}'`, error);
  }
  return bundle;
};

const bundles = (() => {
  if (data.lang === LANGS[0]) {
    return [makeBundle(data.lang)];
  }

  return [makeBundle(data.lang), makeBundle(LANGS[0])];
})();
</script>

<FluentProvider bundles={bundles}>
  <slot />
</FluentProvider>
