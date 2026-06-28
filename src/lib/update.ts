import { File, Paths } from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';
import { Platform } from 'react-native';

const UPDATE_URL = 'https://raw.githubusercontent.com/domi021/anime-tracker/main/version.json';

export interface UpdateInfo {
  version: string;
  apkUrl: string;
}

export async function checkForUpdate(currentVersion: string): Promise<UpdateInfo | null> {
  try {
    const res = await fetch(UPDATE_URL);
    if (!res.ok) return null;
    const info: UpdateInfo = await res.json();
    if (info.version !== currentVersion) return info;
    return null;
  } catch {
    return null;
  }
}

export async function downloadAndInstall(apkUrl: string): Promise<void> {
  const destination = new File(Paths.cache, 'update.apk');
  const file = await File.downloadFileAsync(apkUrl, destination);

  if (Platform.OS === 'android') {
    await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
      data: file.contentUri,
      type: 'application/vnd.android.package-archive',
      flags: 268435457,
    });
  }
}
