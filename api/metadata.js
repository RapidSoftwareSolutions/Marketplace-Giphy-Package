module.exports.do = function(req, res){
    /* When sending GET request to api/Twitter, return the metadata of the package */
    res.status(200).send({
    "package": "Giphy",
    "tagline": "Giphy API",
    "description": "Animated GIF search engine.",
    "image": "http://cdn.appstorm.net/web.appstorm.net/web/files/2013/09/giphy-logo1.png",
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
                    info: "Required: The access_token obtained from Giphy."
                },
                { 
                    name: "query", 
                    type: "String", 
                    info: "Required: search query term or phrase." 
                },
                { 
                    name: "limit", 
                    type: "String", 
                    info: "(optional) number of results to return, maximum 100. Default 25." 
                },
                { 
                    name: "offset", 
                    type: "String", 
                    info: "(optional) results offset, defaults to 0." 
                },
                { 
                    name: "rating", 
                    type: "String", 
                    info: "(optional) limit results to those rated (y,g, pg, pg-13 or r)." 
                },
                { 
                    name: "lang", 
                    type: "String", 
                    info: "(optional) specify default country for regional content; format is 2-letter ISO 639-1 country code." 
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
                    info: "Required: The access_token obtained from Giphy."
                },
                { 
                    name: "limit", 
                    type: "String", 
                    info: "(optional) limits the number of results returned. By default returns 25 results." 
                },
                { 
                    name: "rating", 
                    type: "String", 
                    info: "(optional) limit results to those rated (y,g, pg, pg-13 or r)." 
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
                    info: "Required: The access_token obtained from Giphy."
                },
                { 
                    name: "text", 
                    type: "String", 
                    info: "Required: term or phrase to translate into a GIF" 
                },
                { 
                    name: "rating", 
                    type: "String", 
                    info: "(optional) limit results to those rated (y,g, pg, pg-13 or r)." 
                },
                { 
                    name: "lang", 
                    type: "String", 
                    info: "(optional) specify default country for regional content; format is 2-letter ISO 639-1 country code. " 
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
                    info: "Required: The access_token obtained from Giphy."
                },
                { 
                    name: "tag", 
                    type: "String", 
                    info: "Required: the GIF tag to limit randomness by" 
                },
                { 
                    name: "rating", 
                    type: "String", 
                    info: "(optional)limit results to those rated (y,g, pg, pg-13 or r)." 
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
                    info: "Required: The access_token obtained from Giphy."
                },
                { 
                    name: "gifId", 
                    type: "String", 
                    info: "Required: the GIF ID" 
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
                    info: "Required: The access_token obtained from Giphy."
                },
                { 
                    name: "gifIds", 
                    type: "String", 
                    info: "Required: comma separated gif ids" 
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
                    info: "Required: The access_token obtained from Giphy."
                },
                { 
                    name: "query", 
                    type: "String", 
                    info: "Required: search query term or phrase." 
                },
                { 
                    name: "limit", 
                    type: "String", 
                    info: "(optional) number of results to return, maximum 100. Default 25." 
                },
                { 
                    name: "offset", 
                    type: "String", 
                    info: "(optional) results offset, defaults to 0." 
                },
                { 
                    name: "rating", 
                    type: "String", 
                    info: "(optional) limit results to those rated (y,g, pg, pg-13 or r)." 
                },
                { 
                    name: "lang", 
                    type: "String", 
                    info: "(optional) specify default country for regional content; format is 2-letter ISO 639-1 country code." 
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
                    info: "Required: The access_token obtained from Giphy."
                },
                { 
                    name: "limit", 
                    type: "String", 
                    info: "(optional) limits the number of results returned. By default returns 25 results." 
                },
                { 
                    name: "rating", 
                    type: "String", 
                    info: "(optional) limit results to those rated (y,g, pg, pg-13 or r)." 
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
                    info: "Required: The access_token obtained from Giphy."
                },
                { 
                    name: "text", 
                    type: "String", 
                    info: "Required: term or phrase to translate into a GIF" 
                },
                { 
                    name: "rating", 
                    type: "String", 
                    info: "(optional) limit results to those rated (y,g, pg, pg-13 or r)." 
                },
                { 
                    name: "lang", 
                    type: "String", 
                    info: "(optional) specify default country for regional content; format is 2-letter ISO 639-1 country code. " 
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
                    info: "Required: The access_token obtained from Giphy."
                },
                { 
                    name: "tag", 
                    type: "String", 
                    info: "Required: the GIF tag to limit randomness by" 
                },
                { 
                    name: "rating", 
                    type: "String", 
                    info: "(optional) limit results to those rated (y,g, pg, pg-13 or r)." 
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
                    info: "Required: The access_token obtained from Giphy."
                },
                { 
                    name: "username", 
                    type: "String", 
                    info: "Optional: Your assigned username (string, required for approved apps only)" 
                },
                { 
                    name: "file", 
                    type: "String", 
                    info: "Required: The animated GIF or video file (local file resource, required if no source_image_url supplied)." 
                },
                { 
                    name: "sourceImageUrl", 
                    type: "String", 
                    info: "Required: The URL for the image or video you wish to upload (string, required if no file parameter specified)" 
                },
                {
                    name: "tags", 
                    type: "String", 
                    info: "Optional: Comma delimited list of tags (string, optional)"
                },
                {
                    name: "sourcePostUrl", 
                    type: "String", 
                    info: "Optional: The source of the asset (string, optional)"
                },
                {
                    name: "isHidden", 
                    type: "String", 
                    info: "Optional: True (boolean, optional)"
                }
            ],
            callbacks: [
                { name: "success", info:"Success" },
                { name: "error", info:"Error" }
            ]
        }
    ]
})}
