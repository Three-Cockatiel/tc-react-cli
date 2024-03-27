/**
 * 获取文件夹路径
 */
export declare function getFilePath(name: string): Promise<{
    path: string;
    shouldCreateFile: boolean;
}>;
/**
 * 校验文件夹重名操作
 */
export declare function verifyFileName(options: {
    force?: any;
}, filePath: string): Promise<boolean>;
