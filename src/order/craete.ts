import { getFilePath, verifyFileName } from '../utils/create';
import Down from '../utils/down';

/**
 * create 命令
 * @returns
 */
export default async function create(...arg) {
  const [name, options] = arg;

  const { path, shouldCreateFile } = await getFilePath(name);

  if (!shouldCreateFile) {
    const isCancel = await verifyFileName(options, path);
    if (isCancel) return;
  }

  const down = new Down(path);
  await down.create();
}
