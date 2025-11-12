import fs from 'fs';
import path from 'path';

const componentsDir = path.resolve('src/lib/components');

function getSvelteFiles(dir) {
    let results = [];
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            results = results.concat(getSvelteFiles(fullPath));
        } else if (file.endsWith('.svelte')) {
            results.push(fullPath);
        }
    }
    return results;
}

function addToTree(tree, parts, importName, importPath) {
    const [first, ...rest] = parts;
    if (!rest.length) {
        tree[first] = importName;
    } else {
        if (!tree[first]) tree[first] = {};
        addToTree(tree[first], rest, importName, importPath);
    }
}

const svelteFiles = getSvelteFiles(componentsDir);

let imports = [];
let tree = {};

svelteFiles.forEach(f => {
    const relative = './' + path.relative('src/lib', f).replace(/\\/g, '/');
    const name = path.basename(f, '.svelte');

    imports.push({ name, relative });

    const parts = path.relative(componentsDir, f).split(path.sep).map(p => p.replace('.svelte', ''));
    addToTree(tree, parts, name, relative);
});

function treeToObj(obj, indent = 4) {
    const spaces = ' '.repeat(indent);
    let str = '{\n';
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            str += `${spaces}${obj[key]},\n`;
        } else {
            str += `${spaces}${key}: ${treeToObj(obj[key], indent + 4)},\n`;
        }
    }
    str += ' '.repeat(indent-4) + '}';
    return str;
}
function treeToString(obj, indent = 4) {
    const spaces = ' '.repeat(indent);
    let str = '';
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            let el = imports.find(i => i.name == key);
            if (!el) continue;
            if (el) el.ignore = true;
            
            str += `\nexport { default as ${key} } from "${el.relative}";`;
        } else {
            str += `\nexport const ${key} = ${treeToObj(obj[key], indent)};`;
        }
    }
    return str;
}

function importsToString() {
    return imports
        .filter(i => !i.ignore)
        .map(i => `import ${i.name} from '${i.relative}';`)
        .join('\n');
}

const treeStr = treeToString(tree);

const exportsCode = `${importsToString()}\n${treeStr}`

fs.writeFileSync(path.resolve('src/lib/index.js'), exportsCode);

console.log('component list updat complete - buid-structure.js');