import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_3_1_0_b0 = VersionInfo.of({
  version: '1.3.1:0-beta.0',
  releaseNotes: `Fixed translation keys showing instead of localized content in notifications, improved BTC amount formatting with locale-aware number display, improved contact editing to preserve unchanged notification methods and added Electrum connectivity checks to prevent wallet creation when the server is unavailable.`,
  migrations: {},
})
