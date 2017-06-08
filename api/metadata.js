module.exports.do = function(req, res){
    /* When sending GET request to api/Twitter, return the metadata of the package */
    res.status(200).send({
    "package": "Giphy",
    "tagline": "Giphy API",
    "description": "Animated GIF search engine.",
    "keywords": ["API", "GIF", "GIFs", "image", "images", "social", "video"],
    "image": "http://logo.clearbit.com/giphy.com",
    "repo": "https://github.com/RapidSoftwareSolutions/Marketplace-giphy-Package",
    "accounts": {
        "domain": "giphy.com",
        "credentials": ["apiKey"]
    },
    "blocks": [
        {
            name: "searchGifs",
            description: "Search all Giphy GIFs for a word or phrase. Punctuation will be stripped and ignored. Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.",
            args: [
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The access_token obtained from Giphy.",
                    required: true
                },
                {
                    name: "query",
                    type: "String",
                    info: "search query term or phrase.",
                    required: true
                },
                {
                    name: "limit",
                    type: "String",
                    info: "number of results to return, maximum 100. Default 25.",
                    required: false
                },
                {
                    name: "offset",
                    type: "String",
                    info: "results offset, defaults to 0.",
                    required: false
                },
                {
                    name: "rating",
                    type: "Select",
                    options :["y", "g", "pg", "pg-13", "r"],
                    info: "limit results to those rated (y,g, pg, pg-13 or r).",
                    required: false
                },
                {
                    name: "lang",
                    type: "String",
                    info: "specify default country for regional content; format is 2-letter ISO 639-1 country code.",
                    required: false
                },

            ],
            callbacks: [
                { name: "success", info:"Success" },
                { name: "error", info:"Error" }
            ]
        },
        {
            name: "getTrendingGifs",
            description: "Fetch GIFs currently trending online. Hand curated by the Giphy editorial team. The data returned mirrors the GIFs showcased on the Giphy homepage. Returns 25 results by default.",
            args: [
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The access_token obtained from Giphy.",
                    required: true
                },
                {
                    name: "limit",
                    type: "Select",
                    options :["y", "g", "pg", "pg-13", "r"],
                    info: "limits the number of results returned. By default returns 25 results.",
                    required: false
                },
                {
                    name: "rating",
                    type: "String",
                    info: "limit results to those rated (y,g, pg, pg-13 or r).",
                    required: false
                },

            ],
            callbacks: [
                { name: "success", info:"Success" },
                { name: "error", info:"Error" }
            ]
        },
        {
            name: "translateTextToGif",
            description: "The translate API draws on search, but uses the Giphy 'special sauce' to handle translating from one vocabulary to another. In this case, words and phrases to GIFs. Example implementations of translate can be found in the Giphy Slack, Hipchat, Wire, or Dasher integrations. Use a plus or url encode for phrases.",
            args: [
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The access_token obtained from Giphy.",
                    required: true
                },
                {
                    name: "text",
                    type: "String",
                    info: "term or phrase to translate into a GIF",
                    required: true
                },
                {
                    name: "rating",
                    type: "Select",
                    options :["y", "g", "pg", "pg-13", "r"],
                    info: "limit results to those rated (y,g, pg, pg-13 or r).",
                    required: false
                },
                {
                    name: "lang",
                    type: "String",
                    info: "specify default country for regional content; format is 2-letter ISO 639-1 country code. ",
                    required: false
                },

            ],
            callbacks: [
                { name: "success", info:"Success" },
                { name: "error", info:"Error" }
            ]
        },
        {
            name: "getRandomGif",
            description: "Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the Giphy catalog.",
            args: [
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The access_token obtained from Giphy.",
                    required: true
                },
                {
                    name: "tag",
                    type: "String",
                    info: "the GIF tag to limit randomness by",
                    required: true
                },
                {
                    name: "rating",
                    type: "Select",
                    options :["y", "g", "pg", "pg-13", "r"],
                    info: "(optional)limit results to those rated (y,g, pg, pg-13 or r).",
                    required: false
                },

            ],
            callbacks: [
                { name: "success", info:"Success" },
                { name: "error", info:"Error" }
            ]
        },
        {
            name: "getGif",
            description: "Returns meta data about a GIF, by GIF id. In the below example, the GIF ID is 'feqkVgjJpYtjy'",
            args: [
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The access_token obtained from Giphy.",
                    required: true
                },
                {
                    name: "gifId",
                    type: "String",
                    info: "the GIF ID",
                    required: true
                }
            ],
            callbacks: [
                { name: "success", info:"Success" },
                { name: "error", info:"Error" }
            ]
        },
        {
            name: "getGifs",
            description: "A multiget version of the get GIF by ID endpoint. In this case the IDs are feqkVgjJpYtjy and 7rzbxdu0ZEXLy. Note the additional user metadata attached to the document that describes the second GIF in the response, 7rzbxdu0ZEXLy.",
            args: [
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The access_token obtained from Giphy.",
                    required: true
                },
                {
                    name: "gifIds",
                    type: "List",
                    structure:{
                      name: "gifId",
						          type: "String",
						          info: "Single gif Id"
                    },
                    info: "array of gif ids",
                    required: true
                }
            ],
            callbacks: [
                { name: "success", info:"Success" },
                { name: "error", info:"Error" }
            ]
        },
        {
            name: "searchStickers",
            description: "Replicates the functionality and requirements of the classic Giphy search, but returns animated stickers rather than gifs.",
            args: [
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The access_token obtained from Giphy.",
                    required: true
                },
                {
                    name: "query",
                    type: "String",
                    info: "search query term or phrase.",
                    required: true
                },
                {
                    name: "limit",
                    type: "String",
                    info: "number of results to return, maximum 100. Default 25.",
                    required: false
                },
                {
                    name: "offset",
                    type: "String",
                    info: "results offset, defaults to 0.",
                    required: false
                },
                {
                    name: "rating",
                    type: "Select",
                    options :["y", "g", "pg", "pg-13", "r"],
                    info: "limit results to those rated (y,g, pg, pg-13 or r).",
                    required: false
                },
                {
                    name: "lang",
                    type: "String",
                    info: "specify default country for regional content; format is 2-letter ISO 639-1 country code.",
                    required: false
                },

            ],
            callbacks: [
                { name: "success", info:"Success" },
                { name: "error", info:"Error" }
            ]
        },
        {
            name: "getTrendingStickers",
            description: "Get the latest stickers trending on Giphy with this endpoint. Hand curated by the Giphy editorial team and refreshed daily.",
            args: [
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The access_token obtained from Giphy.",
                    required: true
                },
                {
                    name: "limit",
                    type: "String",
                    info: "limits the number of results returned. By default returns 25 results.",
                    required: false
                },
                {
                    name: "rating",
                    type: "Select",
                    options :["y", "g", "pg", "pg-13", "r"],
                    info: "limit results to those rated (y,g, pg, pg-13 or r).",
                    required: false
                },

            ],
            callbacks: [
                { name: "success", info:"Success" },
                { name: "error", info:"Error" }
            ]
        },
        {
            name: "translateTextToSticker",
            description: "Using the same alogirithm as the GIF translate endpoint, the sticker translate endpoint turns words into stickers.",
            args: [
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The access_token obtained from Giphy.",
                    required: true
                },
                {
                    name: "text",
                    type: "String",
                    info: "term or phrase to translate into a GIF",
                    required: true
                },
                {
                    name: "rating",
                    type: "Select",
                    options :["y", "g", "pg", "pg-13", "r"],
                    info: "limit results to those rated (y,g, pg, pg-13 or r).",
                    required: false
                },
                {
                    name: "lang",
                    type: "String",
                    info: "specify default country for regional content; format is 2-letter ISO 639-1 country code. ",
                    required: false
                },

            ],
            callbacks: [
                { name: "success", info:"Success" },
                { name: "error", info:"Error" }
            ]
        },
        {
            name: "getRandomSticker",
            description: "Returns a spotaneously selected sticker from Giphy's sticker collection. Optionally limit scope of result to a specific tag. Like the GIF random endpoint, Punctuation will be stripped and ignored. Use a hyphen for phrases. Example oops, birthday or thank-you.",
            args: [
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The access_token obtained from Giphy.",
                    required: true
                },
                {
                    name: "tag",
                    type: "String",
                    info: "the GIF tag to limit randomness by",
                    required: true
                },
                {
                    name: "rating",
                    type: "Select",
                    options :["y", "g", "pg", "pg-13", "r"],
                    info: "limit results to those rated (y,g, pg, pg-13 or r).",
                    required: false
                },

            ],
            callbacks: [
                { name: "success", info:"Success" },
                { name: "error", info:"Error" }
            ]
        },
        {
            name: "uploadGif",
            description: "The Giphy Upload API allows you to upload and host your content programmatically to Giphy.com. We accept animated gifs or video files up to 100MB. Hosted Giphy URLs are supported and play on every major social network.",
            args: [
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The access_token obtained from Giphy.",
                    required: true
                },
                {
                    name: "username",
                    type: "String",
                    info: "Optional: Your assigned username (string, required for approved apps only)",
                    required: false
                },
                {
                    name: "sourceImage",
                    type: "File",
                    info: "The URL or the file of the media you wish to upload",
                    required: true
                },
                {
                    name: "tags",
                    type: "List",
                    structure:{
                      name: "tag",
                      type: "String",
                      info: "Single tag"
                    },
                    info: "Optional: Array of tags (string, optional)",
                    required: false
                },
                {
                    name: "sourcePostUrl",
                    type: "String",
                    info: "Optional: The source of the asset (string, optional)",
                    required: false
                },
                {
                    name: "isHidden",
                    type: "String",
                    info: "Optional: True (boolean, optional)",
                    required: false
                }
            ],
            callbacks: [
                { name: "success", info:"Success" },
                { name: "error", info:"Error" }
            ]
        }
    ]
})}
