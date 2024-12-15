module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest', // Transforma archivos .vue utilizando vue3-jest
    '^.+\\.[jt]sx?$': 'babel-jest',  // Transforma archivos .js, .jsx, .ts y .tsx utilizando babel-jest
    '^.+\\.(css|less|scss|sass|png|jpg|jpeg|gif|webp|svg)$': 'jest-transform-stub' // Stub para archivos de estilos y activos estáticos
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Mapea alias @ a la carpeta src
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy' // Mapea archivos de estilos para evitar errores durante las pruebas
  },
  testMatch: [
    '<rootDir>/tests/**/*.spec.[jt]s?(x)', // Coincide con archivos de prueba .spec.js, .spec.jsx, .spec.ts, .spec.tsx
    '<rootDir>/tests/**/*.test.[jt]s?(x)'  // Coincide con archivos de prueba .test.js, .test.jsx, .test.ts, .test.tsx
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(vue|@vue|vue-router|pinia|axios)/)' // Transforma módulos específicos de node_modules
  ],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
};
