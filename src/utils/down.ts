import chalk from 'chalk';
import ora from 'ora';
import path from 'path';
import util from 'util';
import downloadGitRepo from 'download-git-repo';

// 添加加载动画
async function wrapLoading(fn, message, ...args) {
  // 使用 ora 初始化，传入提示信息 message
  const spinner = ora(message);
  // 开始加载动画
  spinner.start();

  try {
    const result = await fn(...args);
    spinner.succeed('下载成功 !!!');
    return Promise.resolve(result);
  } catch (error) {
    spinner.fail(`下载失败！请重试 ${error}`);
    return Promise.reject(error);
  }
}

/**
 * 从git拉取模板
 */

class Down {
  targetDir: string;
  downloadGitRepo: any;

  constructor(filePath) {
    this.targetDir = filePath;
    this.downloadGitRepo = util.promisify(downloadGitRepo);
  }

  async download() {
    return await wrapLoading(
      this.downloadGitRepo,
      'loading...',
      'direct:https://github.com/Three-Cockatiel/vite-react-template.git#main',
      path.resolve(process.cwd(), this.targetDir),
      { clone: true },
    );
  }

  async create() {
    try {
      await this.download();
      console.log('\r\n 成功创建项目，祝您生活愉快!!  Three-Cockatiel');
    } catch (err) {
      console.log(err);
      console.log(`\r\n ${chalk.cyan('联系我： github@Culaccino9')}\r\n`);
    }
  }
}

export default Down;
