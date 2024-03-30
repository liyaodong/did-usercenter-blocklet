interface Window {
  blocklet?: BlockletConfig;
}

interface BlockletConfig {
  MEILISEARCH_ENV: string;
  https_proxy: string;
  http_proxy: string;
  CDN_HOST: string;
  UPLOADER_ROLES: string;
  MAX_UPLOAD_SIZE: string;
  UNSPLASH_KEY: string;
  appId: string;
  appPid: string;
  appName: string;
  status: string;
  appDescription: string;
  appUrl: string;
  isComponent: boolean;
  alsoKnownAs: string[];
  passportColor: string;
  trustedFactories: any[]; // Specify a more detailed type if possible
  serverVersion: string;
  prefix: string;
  groupPrefix: string;
  pageGroup: string;
  version: string;
  componentId: string;
  did: string;
  appLogo: string;
  appLogoRect: string;
  webWalletUrl: string;
  preferences: Record<string, unknown>; // Use a more specific type if possible
  serverDid: string;
  languages: Language[];
  settings: Settings;
  navigation: NavigationItem[];
  componentMountPoints: ComponentMountPoint[];
  optionalComponents: OptionalComponent[];
}

interface Language {
  code: string;
  name: string;
}

interface Settings {
  session: SessionSettings;
  federated: FederatedSettings;
  oauth: OAuthSettings;
}

interface SessionSettings {
  ttl: number;
  cacheTtl: number;
}

interface FederatedSettings {
  master: Record<string, unknown>; // More specific typing recommended
  config: Record<string, unknown>; // More specific typing recommended
}

interface OAuthSettings {
  // Define properties of OAuthSettings here
}

interface NavigationItem {
  id: string;
  title: string | LocalizedString;
  link: string;
  section: string;
  role: string[];
  visible: boolean;
  from?: string;
  items?: NavigationItem[]; // Recursive for sub-items
}

interface ComponentMountPoint {
  title: string;
  name: string;
  did: string;
  version: string;
  status: string;
  mountPoint: string;
  components: any[]; // Specify a more detailed type if possible
  capabilities: Capabilities;
}

interface Capabilities {
  clusterMode: boolean;
  component: boolean;
  navigation: boolean;
}

interface OptionalComponent {
  logoUrl: string;
  dependencies: Dependency[];
  mountPoint: string;
  bundleSource: BundleSource;
  meta: Meta;
}

interface Dependency {
  parentDid: string;
  parentName: string;
  parentTitle: string;
  required: boolean;
  mountPoint: boolean;
}

interface BundleSource {
  store: string[];
  name: string;
  version: string;
}

interface Meta {
  name: string;
  title: string;
  version: string;
  description: string;
  files: string[];
  repository: Repository;
  keywords: string[];
  author: Author;
  license: string;
  group: string;
  main: string;
  logo: string;
  environments: Environment[];
  specVersion: string;
  did: string;
  community: string;
  documentation: string;
  homepage: string;
  interfaces: Interface[];
  screenshots: string[];
  scripts: Scripts;
  requirements: Requirements;
  timeout: Timeout;
  payment: Payment;
  capabilities: Capabilities;
  components: any[]; // Specify a more detailed type if possible
  gitHash: string;
  path: string;
  nftFactory: string;
  dist: Distribution;
  signatures: Signature[];
  stats: Stats;
  lastPublishedAt: string;
  bundleDid: string;
  bundleName: string;
}

interface LocalizedString {
  [key: string]: string;
}

// Additional interfaces like Repository, Author, Environment, etc.,
// should be defined according to their structure in the blocklet configuration.

// Example for a simple additional interface:
interface Repository {
  type: string;
  url: string;
}
