import * as core from '@actions/core';
const bumpedPackages = [];
const packages = () => {
    try {
        return JSON.parse(core.getInput('bumped-packages', { required: true }));
    }
    catch (error) {
        core.setFailed(error);
        process.exit(256);
    }
};
for (const pkg of packages()) {
    bumpedPackages.push(pkg.name);
}
core.setOutput("parsed-packages", bumpedPackages.join('\n'));
core.info('Written to output:\n\n- ' + bumpedPackages.join('\n- '));
//# sourceMappingURL=index.js.map