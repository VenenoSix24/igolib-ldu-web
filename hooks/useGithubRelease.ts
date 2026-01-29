import { useState, useEffect } from 'react';

// ==========================================
// CONFIGURATION
// ==========================================
const GITHUB_REPO = 'VenenoSix24/igolib-ldu';
const ENABLE_MIRROR = true;
const MIRROR_PREFIX = 'https://hk.gh-proxy.org/';

// ==========================================
// TYPES
// ==========================================
export interface ReleaseAssets {
  version: string;
  windows: {
    setup_x64: string;
    portable_x64: string;
    msi_x64: string;
    setup_x86: string;
    portable_x86: string;
    msi_x86: string;
  };
  mac: {
    arm_dmg: string;
    intel_dmg: string;
  };
  linux: {
    deb: string;
    rpm: string;
    appImage: string;
  };
  android: {
    arm64_apk: string;
    armv7_apk: string;
    x86_apk: string;
  };
}

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  tag_name: string;
  assets: GitHubAsset[];
}

// ==========================================
// HOOK
// ==========================================
export const useGithubRelease = () => {
  const [releaseDisplay, setReleaseDisplay] = useState<string>('Loading...');
  const [downloadLinks, setDownloadLinks] = useState<ReleaseAssets>({
    version: '',
    windows: { setup_x64: '', portable_x64: '', msi_x64: '', setup_x86: '', portable_x86: '', msi_x86: '' },
    mac: { arm_dmg: '', intel_dmg: '' },
    linux: { deb: '', rpm: '', appImage: '' },
    android: { arm64_apk: '', armv7_apk: '', x86_apk: '' },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelease = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`);
        if (!response.ok) throw new Error('Failed to fetch release');

        const data: GitHubRelease = await response.json();
        const version = data.tag_name;
        setReleaseDisplay(version);

        const assets = data.assets;

        // Helper to process URL
        const getUrl = (asset: GitHubAsset | undefined) => {
          if (!asset) return '';
          return ENABLE_MIRROR ? `${MIRROR_PREFIX}${asset.browser_download_url}` : asset.browser_download_url;
        };

        // Categorize Assets
        const links: ReleaseAssets = {
          version,
          windows: {
            // Refined Logic based on standard Tauri bundler naming
            setup_x64: getUrl(assets.find(a => a.name.endsWith('setup.exe') && a.name.includes('x64'))),
            portable_x64: getUrl(assets.find(a => a.name.endsWith('.exe') && !a.name.includes('setup') && a.name.includes('x64'))), // standalone exe
            msi_x64: getUrl(assets.find(a => a.name.endsWith('.msi') && a.name.includes('x64'))),

            setup_x86: getUrl(assets.find(a => a.name.endsWith('setup.exe') && (a.name.includes('x86') || a.name.includes('i686') || !a.name.includes('x64')))), // Fallback if no arch
            portable_x86: getUrl(assets.find(a => a.name.endsWith('.exe') && !a.name.includes('setup') && (a.name.includes('x86') || !a.name.includes('x64')))),
            msi_x86: getUrl(assets.find(a => a.name.endsWith('.msi') && (a.name.includes('x86') || !a.name.includes('x64')))),
          },
          mac: {
            arm_dmg: getUrl(assets.find(a => a.name.endsWith('.dmg') && (a.name.includes('aarch64') || a.name.includes('arm64')))),
            intel_dmg: getUrl(assets.find(a => a.name.endsWith('.dmg') && (a.name.includes('x64') || a.name.includes('intel')))),
          },
          linux: {
            deb: getUrl(assets.find(a => a.name.endsWith('.deb'))),
            rpm: getUrl(assets.find(a => a.name.endsWith('.rpm'))),
            appImage: getUrl(assets.find(a => a.name.endsWith('.AppImage'))),
          },
          android: {
            arm64_apk: getUrl(assets.find(a => a.name.endsWith('.apk') && (a.name.includes('arm64') || a.name.includes('aarch64')))),
            armv7_apk: getUrl(assets.find(a => a.name.endsWith('.apk') && (a.name.includes('armeabi') || a.name.includes('v7')))),
            x86_apk: getUrl(assets.find(a => a.name.endsWith('.apk') && (a.name.includes('x86')))),
          },
        };

        setDownloadLinks(links);

      } catch (error) {
        console.error('Failed to get release info:', error);
        setReleaseDisplay('Latest'); // Fallback
      } finally {
        setLoading(false);
      }
    };

    fetchRelease();
  }, []);

  return { releaseDisplay, downloadLinks, loading };
};
