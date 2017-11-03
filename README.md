
[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/Giphy/functions?utm_source=RapidAPIGitHub_GiphyFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# Giphy Package
Animated GIF search engine.

* Domain: [giphy.com](https://giphy.com/)
* credentials: apiKey

## How to get credentials:
### Public Beta Key
The Giphy API is open to the public. We have instituted a simple, single public beta key system to let anyone try it out. The API key is required for all endpoints.

+ **The public beta key is "dc6zaTOxFJmzC”**

Please use this key while you develop your application and experiment with your integrations. Note: the public key is subject to rate limit constraints and we do not encourage live production deployments to use the public key.

#### Request a Production Key
Once you’re ready to use the Giphy API in production, please visit [api.giphy.com/submit](http://api.giphy.com/submit) to request a production API key. In your submission, please be prepared to provide the following:

+ Your app name with brief description, web / app store links, etc.

+ The 'live date' of the app and feature that integrates with the API. Briefly describe how the Giphy API integrates with your app and provide screenshots of the implementation.

+ As per our section 5 A of our terms of service, **we require all apps that use the Giphy API to conspicuously display "Powered By Giphy" attribution marks where the API is utilized.** You can find approved [official logo marks here](http://www.google.com/url?q=http%3A%2F%2Fgiphymedia.s3.amazonaws.com%2Fgiphy-attribution-marks.zip&sa=D&sntz=1&usg=AFQjCNH2vioX4nvsrL6iR2kuB_WG-85VLA). Please provide screenshots of your attribution placement.

## Custom datatypes:
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]```
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```


## Giphy.searchGifs
search all Giphy GIFs for a word or phrase. Punctuation will be stripped and ignored. Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| The access_token obtained from Giphy.
| query | string     | search query term or phrase.
| limit | string     | (optional) number of results to return, maximum 100. Default 25.
| offset| string     | (optional) results offset, defaults to 0.
| rating| select     | (optional) limit results to those rated (y,g, pg, pg-13 or r).
| lang  | string     | (optional) specify default country for regional content; format is 2-letter IsO 639-1 country code.


## Giphy.getTrendingGifs
Fetch GIFs currently trending online. Hand curated by the Giphy editorial team. The data returned mirrors the GIFs showcased on the Giphy homepage. Returns 25 results by default.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The access_token obtained from Giphy.
| limit | string     | (optional) limits the number of results returned. By default returns 25 results.
| rating| select     | (optional) limit results to those rated (y,g, pg, pg-13 or r).


## Giphy.translatesToGif
The translate API draws on search, but uses the Giphy 'special sauce' to handle translating from one vocabulary to another. In this case, words and phrases to GIFs. Example implementations of translate can be found in the Giphy slack, Hipchat, Wire, or Dasher integrations. Use a plus or url encode for phrases.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The access_token obtained from Giphy.
| s  | string     | Required: term or phrase to translate into a GIF
| rating| select     | (optional) limit results to those rated (y,g, pg, pg-13 or r).
| lang  | string     | (optional) specify default country for regional content; format is 2-letter IsO 639-1 country code.


## Giphy.getRandomGif
Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the Giphy catalog.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The access_token obtained from Giphy.
| tag   | string     | Required: the GIF tag to limit randomness by
| rating| select     | (optional) limit results to those rated (y,g, pg, pg-13 or r).


## Giphy.getGif
Returns meta data about a GIF, by GIF id. In the below example, the GIF ID is 'feqkVgjJpYtjy'

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The access_token obtained from Giphy.
| gifId | string     | Required: the GIF ID


## Giphy.getGifs
A multiget version of the get GIF by ID endpoint. In this case the IDs are feqkVgjJpYtjy and 7rzbxdu0ZEXLy. Note the additional user metadata attached to the document that describes the second GIF in the response, 7rzbxdu0ZEXLy.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The access_token obtained from Giphy.
| gifIds| list     | Required: comma separated gif ids


## Giphy.searchstickers
Replicates the functionality and requirements of the classic Giphy search, but returns animated stickers rather than gifs.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The access_token obtained from Giphy.
| query | string     | Required: search query term or phrase.
| limit | string     | (optional) number of results to return, maximum 100. Default 25.
| offset| string     | (optional) results offset, defaults to 0.
| rating| select     | (optional) limit results to those rated (y,g, pg, pg-13 or r).
| lang  | string     | (optional) specify default country for regional content; format is 2-letter IsO 639-1 country code.


## Giphy.getTrendingstickers
Get the latest stickers trending on Giphy with this endpoint. Hand curated by the Giphy editorial team and refreshed daily.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The access_token obtained from Giphy.
| limit | string     | (optional) limits the number of results returned. By default returns 25 results.
| rating| select     | (optional) limit results to those rated (y,g, pg, pg-13 or r).


## Giphy.translatesTosticker
Using the same alogirithm as the GIF translate endpoint, the sticker translate endpoint turns words into stickers.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The access_token obtained from Giphy.
| s  | string     | Required: term or phrase to translate into a GIF
| rating| select     | (optional) limit results to those rated (y,g, pg, pg-13 or r).
| lang  | string     | (optional) specify default country for regional content; format is 2-letter IsO 639-1 country code.


## Giphy.getRandomsticker
Returns a spotaneously selected sticker from Giphy's sticker collection. Optionally limit scope of result to a specific tag. Like the GIF random endpoint, Punctuation will be stripped and ignored. Use a hyphen for phrases. Example oops, birthday or thank-you.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The access_token obtained from Giphy.
| tag   | string     | Required: the GIF tag to limit randomness by
| rating| select     | (optional) limit results to those rated (y,g, pg, pg-13 or r).


## Giphy.uploadGif
The Giphy Upload API allows you to upload and host your content programmatically to Giphy.com. We accept animated gifs or video files up to 100MB. Hosted Giphy URLs are supported and play on every major social network.

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The access_token obtained from Giphy.
| username   | string     | Optional: Your assigned username (string, required for approved apps only)
| sourceImageUrl| string     | Required: The URL for the image or video you wish to upload (string, required if no file parameter specified).
| tags| List     | Optional: Array of tags (string, optional).
| sourcePostUrl| string     | Optional: The source of the asset (string, optional).
| isHidden| string     | Optional: True (boolean, optional).
