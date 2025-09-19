import eslintConfigCityssm, { cspellWords, defineConfig } from 'eslint-config-cityssm';
const config = defineConfig(eslintConfigCityssm, {
    files: ['**/*.ts'],
    rules: {
        '@cspell/spellchecker': [
            'warn',
            {
                cspell: {
                    words: [
                        ...cspellWords,
                        'mpac',
                        'yetf'
                    ]
                }
            }
        ]
    }
});
export default config;
