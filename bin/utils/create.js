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
exports.verifyFileName = exports.getFilePath = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
/**
 * 获取文件夹路径
 */
function getFilePath(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const cwd = process.cwd();
        // TODO 空文件夹下 git clone会失败，不能插入 git clone xxx . ?
        // if (!name) {
        //   // 是否在当前目录创建
        //   const shouldCreateFile = await inquirer.prompt([
        //     {
        //       name: 'value',
        //       type: 'list',
        //       message: '是否在当前目录直接生成？（如选择是，则直接生成，否则会在创建一个文件夹内生成）',
        //       choices: [
        //         { name: '是', value: 1 },
        //         { name: '否', value: 0 },
        //       ],
        //     },
        //   ]);
        //   if (Number(shouldCreateFile?.value)) {
        //     return {
        //       path: cwd,
        //       shouldCreateFile: true,
        //     };
        //   } else {
        //     const fileName = await inquirer.prompt([
        //       {
        //         name: 'value',
        //         type: 'input',
        //         message: '您还没有输入项目名称，请输入：',
        //       },
        //     ]);
        //     return {
        //       path: path.join(cwd, fileName?.value),
        //       shouldCreateFile: false,
        //     };
        //   }
        // }
        // 如果没有输入名称，手动录入
        if (!name) {
            const fileName = yield inquirer_1.default.prompt([
                {
                    name: 'value',
                    type: 'input',
                    message: '您还没有输入项目名称，请输入：',
                },
            ]);
            return {
                path: path_1.default.join(cwd, fileName === null || fileName === void 0 ? void 0 : fileName.value),
                shouldCreateFile: false,
            };
        }
        return {
            path: path_1.default.join(cwd, name),
            shouldCreateFile: false,
        };
    });
}
exports.getFilePath = getFilePath;
/**
 * 校验文件夹重名操作
 */
function verifyFileName(options, filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const isExist = fs_extra_1.default.existsSync(filePath);
        if (!isExist)
            return false;
        // 如果强制创建，则移除
        if (options.force) {
            yield fs_extra_1.default.remove(filePath);
            return true;
        }
        const inquirerParams = [
            {
                name: 'value',
                type: 'list',
                message: '目标文件目录已经存在，请选择如下操作：',
                choices: [
                    { name: '替换当前目录', value: 'replace' },
                    { name: '取消当前操作', value: 'cancel' },
                ],
            },
        ];
        const inquirerData = yield inquirer_1.default.prompt(inquirerParams);
        switch (inquirerData.value) {
            case 'replace':
                // 移除已存在的目录
                console.log('\r\n 移除中...');
                yield fs_extra_1.default.remove(filePath);
                console.log('\r\n 移除完成');
                break;
            case 'cancel':
                console.log('\r 取消成功');
                return true;
            default:
                return false;
        }
    });
}
exports.verifyFileName = verifyFileName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2NyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBZ0M7QUFDaEMsZ0RBQXdCO0FBQ3hCLHdEQUEwQjtBQUUxQjs7R0FFRztBQUNILFNBQXNCLFdBQVcsQ0FBQyxJQUFZOztRQUM1QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFMUIsaURBQWlEO1FBQ2pELGVBQWU7UUFDZixpQkFBaUI7UUFDakIscURBQXFEO1FBQ3JELFFBQVE7UUFDUix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLDREQUE0RDtRQUM1RCxtQkFBbUI7UUFDbkIsbUNBQW1DO1FBQ25DLG1DQUFtQztRQUNuQyxXQUFXO1FBQ1gsU0FBUztRQUNULFFBQVE7UUFFUiwyQ0FBMkM7UUFDM0MsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixnQ0FBZ0M7UUFDaEMsU0FBUztRQUNULGFBQWE7UUFDYiwrQ0FBK0M7UUFDL0MsVUFBVTtRQUNWLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsc0NBQXNDO1FBQ3RDLFdBQVc7UUFDWCxVQUFVO1FBRVYsZUFBZTtRQUNmLCtDQUErQztRQUMvQyxpQ0FBaUM7UUFDakMsU0FBUztRQUNULE1BQU07UUFDTixJQUFJO1FBRUosZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNWLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JDO29CQUNFLElBQUksRUFBRSxPQUFPO29CQUNiLElBQUksRUFBRSxPQUFPO29CQUNiLE9BQU8sRUFBRSxpQkFBaUI7aUJBQzNCO2FBQ0YsQ0FBQyxDQUFDO1lBRUgsT0FBTztnQkFDTCxJQUFJLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEtBQUssQ0FBQztnQkFDckMsZ0JBQWdCLEVBQUUsS0FBSzthQUN4QixDQUFDO1FBQ0osQ0FBQztRQUVELE9BQU87WUFDTCxJQUFJLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQzFCLGdCQUFnQixFQUFFLEtBQUs7U0FDeEIsQ0FBQztJQUNKLENBQUM7Q0FBQTtBQTNERCxrQ0EyREM7QUFFRDs7R0FFRztBQUNILFNBQXNCLGNBQWMsQ0FBQyxPQUF3QixFQUFFLFFBQWdCOztRQUM3RSxNQUFNLE9BQU8sR0FBRyxrQkFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBRTNCLGFBQWE7UUFDYixJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQixNQUFNLGtCQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE1BQU0sY0FBYyxHQUFHO1lBQ3JCO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRSxxQkFBcUI7Z0JBQzlCLE9BQU8sRUFBRTtvQkFDUCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtvQkFDcEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7aUJBQ3BDO2FBQ0Y7U0FDRixDQUFDO1FBQ0YsTUFBTSxZQUFZLEdBQUcsTUFBTSxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRCxRQUFRLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixLQUFLLFNBQVM7Z0JBQ1osV0FBVztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixNQUFNLGtCQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDO1lBQ2Q7Z0JBQ0UsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7Q0FBQTtBQW5DRCx3Q0FtQ0MifQ==