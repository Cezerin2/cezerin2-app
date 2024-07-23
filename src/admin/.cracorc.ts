import { CracoConfig } from "@craco/types"
import CracoCSSModules from "craco-css-modules"
import { resolve } from "path"

const config: CracoConfig = {
  plugins: [{ plugin: CracoCSSModules }],
  eslint: {
    enable: false,
  },
  typescript: {
    enableTypeChecking: false,
  },
  paths: config => {
    if (config) config.appBuild = resolve("../../public/admin")
    return config;
  }
}

export default config
