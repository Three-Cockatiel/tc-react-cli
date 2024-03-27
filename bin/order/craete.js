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
const create_1 = require("../utils/create");
const down_1 = __importDefault(require("../utils/down"));
/**
 * create 命令
 * @returns
 */
function create(...arg) {
    return __awaiter(this, void 0, void 0, function* () {
        const [name, options] = arg;
        const { path, shouldCreateFile } = yield (0, create_1.getFilePath)(name);
        if (!shouldCreateFile) {
            const isCancel = yield (0, create_1.verifyFileName)(options, path);
            if (isCancel)
                return;
        }
        const down = new down_1.default(path);
        yield down.create();
    });
}
exports.default = create;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JhZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL29yZGVyL2NyYWV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUE4RDtBQUM5RCx5REFBaUM7QUFFakM7OztHQUdHO0FBQ0gsU0FBOEIsTUFBTSxDQUFDLEdBQUcsR0FBRzs7UUFDekMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFNUIsTUFBTSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLE1BQU0sSUFBQSxvQkFBVyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3RCLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSx1QkFBYyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNyRCxJQUFJLFFBQVE7Z0JBQUUsT0FBTztRQUN2QixDQUFDO1FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztDQUFBO0FBWkQseUJBWUMifQ==