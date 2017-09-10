const _renameOsxTerminalTabs = () => {
  if (!process.stdout) return;
  const prefix = `${String.fromCharCode(27)}]0;`;
  const appName = process.env.npm_package_name;
  const appVersion = process.env.npm_package_version;
  const postfix = String.fromCharCode(7);
  process.stdout.write(`${prefix}${appName} - ${appVersion}${postfix}`);
  process.on('exit', () => {
    process.stdout.write(`${prefix}${postfix}`);
  });
};

_renameOsxTerminalTabs();
