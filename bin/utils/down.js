"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const path_1 = __importDefault(require("path"));
const util_1 = __importDefault(require("util"));
const download_git_repo_1 = __importDefault(require("download-git-repo"));
// 添加加载动画
function wrapLoading(fn, message, ...args) {
    return __awaiter(this, void 0, void 0, function* () {
        // 使用 ora 初始化，传入提示信息 message
        const spinner = (0, ora_1.default)(message);
        // 开始加载动画
        spinner.start();
        try {
            const result = yield fn(...args);
            spinner.succeed('下载成功 !!!');
            return Promise.resolve(result);
        }
        catch (error) {
            spinner.fail(`下载失败！请重试 ${error}`);
            return Promise.reject(error);
        }
    });
}
/**
 * 从git拉取模板
 */
class Down {
    constructor(filePath) {
        this.targetDir = filePath;
        this.downloadGitRepo = util_1.default.promisify(download_git_repo_1.default);
    }
    download() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wrapLoading(this.downloadGitRepo, 'loading...', 'direct:https://github.com/Three-Cockatiel/vite-react-template.git#main', path_1.default.resolve(process.cwd(), this.targetDir), { clone: true });
        });
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.download();
                console.log('\r\n 成功创建项目，祝您生活愉快!!  Three-Cockatiel');
            }
            catch (err) {
                console.log(err);
                console.log(`\r\n ${chalk_1.default.cyan('联系我： github@Culaccino9')}\r\n`);
            }
        });
    }
}
exports.default = Down;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLDhDQUFzQjtBQUN0QixnREFBd0I7QUFDeEIsZ0RBQXdCO0FBQ3hCLDBFQUFnRDtBQUVoRCxTQUFTO0FBQ1QsU0FBZSxXQUFXLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUk7O1FBQzdDLDRCQUE0QjtRQUM1QixNQUFNLE9BQU8sR0FBRyxJQUFBLGFBQUcsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixTQUFTO1FBQ1QsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQztZQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNsQyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7Q0FBQTtBQUVEOztHQUVHO0FBRUgsTUFBTSxJQUFJO0lBSVIsWUFBWSxRQUFRO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBZSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVLLFFBQVE7O1lBQ1osT0FBTyxNQUFNLFdBQVcsQ0FDdEIsSUFBSSxDQUFDLGVBQWUsRUFDcEIsWUFBWSxFQUNaLHdFQUF3RSxFQUN4RSxjQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQzNDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUNoQixDQUFDO1FBQ0osQ0FBQztLQUFBO0lBRUssTUFBTTs7WUFDVixJQUFJLENBQUM7Z0JBQ0gsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsZUFBSyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRSxDQUFDO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLENBQUMifQ==