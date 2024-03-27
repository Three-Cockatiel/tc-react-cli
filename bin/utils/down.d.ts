/**
 * 从git拉取模板
 */
declare class Down {
    targetDir: string;
    downloadGitRepo: any;
    constructor(filePath: any);
    download(): Promise<any>;
    create(): Promise<void>;
}
export default Down;
