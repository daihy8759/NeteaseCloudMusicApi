const fs = require('fs').promises;
const path = require('path');
const prettier = require('prettier');

const exportMod = path.join(__dirname, 'src/index.ts');

const importMods = [];
const mods = [];

fs.readdir(path.join(__dirname, 'src/modules'))
    .then((result) => {
        result.forEach((file) => {
            if (!file.endsWith('.ts')) return;
            const basename = path.basename(file, '.ts');
            importMods.push(`import ${basename} from './modules/${basename}';`);
            mods.push(`${basename},`);
        });
    })
    .then(() => {
        return prettier.resolveConfig(path.join(__dirname, '.prettierrc')).then((options) => {
            return prettier.format(
                `${importMods.join('\n')}\n
            const NeteaseCloudMusicApi = {
                ${mods.join('\n')}
            }
            export default NeteaseCloudMusicApi;`,
                options
            );
        });
    })
    .then((format) => {
        return fs.writeFile(exportMod, format);
    });
