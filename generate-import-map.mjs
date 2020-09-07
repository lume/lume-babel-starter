import { getImportMapFromNodeModules } from "@jsenv/node-module-import-map"

async function main() {
    const importMap = await getImportMapFromNodeModules({
        projectDirectoryUrl: new URL("./", import.meta.url),
        projectPackageDevDependenciesIncluded: false,
    })

    console.log(JSON.stringify(importMap))
}

main()
