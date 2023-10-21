import app from 'flarum/common/app';

/**
 * 统一前缀
 */
export const extPrefix = 'imdong-spam-alert'

/**
 * 获取一个 key
 * @param key
 */
export function key(key: string): string {
  return `${extPrefix}.${key.replace(/^\.*/, '')}`
}

/**
 * 获取特定 key 的翻译
 * @param _key
 */
export function trans(_key: string) {
  return app.translator.trans(key(_key));
}

export default {
  extPrefix,
  key,
  trans
}
