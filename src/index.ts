import * as core from '@actions/core';

interface ChangesetsOutput {
    name: string;
    version: string;
}

function main(): void {
    try {
        const input = core.getInput('bumped-packages', { required: true });
        const packages = JSON.parse(input) as ChangesetsOutput[];

        const bumpedPackages: string[] = [];

        for (const pkg of packages) {
            bumpedPackages.push(pkg.name);
        }

        const output = bumpedPackages.join(',');
        core.setOutput("parsed-packages", output);

        core.info('Parsed packages:\n\n- ' + bumpedPackages.join('\n- '));

    } catch (error) {
        core.setFailed(`Failed to parse bumped packages: ${error}`);
        process.exit(1);
    }
}

main();
