export type BrowserName = 'chrome' | 'chromium' | 'canary' | string

export type PlatformName = 'darwin' | 'linux' | 'win32'

export type Browser = {
  /** short browser name */
  name: BrowserName
  /** Optional display name */
  displayName: string
  /** RegExp to use to extract version from something like "Google Chrome 58.0.3029.110" */
  versionRegex: RegExp
  profile: boolean
  /** The first binary name that matches will be used */
  binaries: string[]
  /** The actual browser binary this browser was resolved to */
  binary?: string
  version?: string
  majorVersion?: string
  page?: string
}

export type FoundBrowser = {
  name: string
  path?: string
}

interface ExtraLauncherMethods {
  update: Function
  detect: Function
}

type LauncherLaunch = (browsers?: any[]) => Promise<any>

export type LauncherApi = LauncherLaunch & ExtraLauncherMethods

// all common type definition for this module

export type NotInstalledError = Error & { notInstalled: boolean }

export type BrowserNotFoundError = Error & { specificBrowserNotFound: boolean }
