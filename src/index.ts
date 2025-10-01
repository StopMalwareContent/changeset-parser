import * as core from '@actions/core';

interface ChangesetsOutput {
    name: string;
    version: string;
}

const bumpedPackages: string[] = [];

const packages = () => {
    try {
        return JSON.parse(core.getInput('bumped-packages', { required: true })) as ChangesetsOutput[]
    } catch (error) {
        core.setFailed(error as Error)
        process.exit(256)
    }
}

for (const pkg of packages()) {
    bumpedPackages.push(pkg.name)
}

core.setOutput("parsed-packages", bumpedPackages.join('\n'))

core.info('Written to output:\n\n- ' + bumpedPackages.join('\n- '))
