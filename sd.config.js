module.exports = {
    format: {
        // Adding a custom format to show how to get an alias's name.
        customFormat: function ({dictionary, options}) {
            return dictionary.allTokens.map(token => {
                let value = JSON.stringify(token.value);
                // new option added to decide whether or not to output references
                if (options.outputReferences) {
                    // the `dictionary` object now has `usesReference()` and
                    // `getReferences()` methods. `usesReference()` will return true if
                    // the value has a reference in it. `getReferences()` will return
                    // an array of references to the whole tokens so that you can access its
                    // name or any other attributes.
                    if (dictionary.usesReference(token.original.value)) {
                        const reference = dictionary.getReferences(token.original.value);
                        value = reference.name;
                    }
                }

                return `export const ${token.name} = ${value};`
            }).join(`\n`)
        }
    },
    source: ["./tokens/token.json"],
    platforms: {
        json: {
            buildPath: "./src/style-dictionary-dist/",
            files: [{
                destination: 'tokens.json',
                format: 'json/nested'
            }]
        },
        scss: {
            transformGroup: "scss",
            buildPath: "./src/style-dictionary-dist/",
            files: [{
                destination: "_variables.scss",
                format: "scss/variables"
            }]
        },
        js: {
            transformGroup: "js",
            buildPath: "./src/style-dictionary-dist/",
            files: [{
                destination: "variables.js",
                format: "javascript/es6"
            }]
        }
    }
}
