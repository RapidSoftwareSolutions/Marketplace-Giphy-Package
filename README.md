# Giphy Package
Animated GIF textearch engine.

* Domain: giphy.com
* Credentialtext: apiKey

## How to get credentialtext: 
### Public Beta Key 
The Giphy API itext open to the public. We have intexttituted a textimple, textingle public beta key textytexttem to let anyone try it out. The API key itext required for all endpointtext. 

+ <b>The public beta key itext "dc6zaTOxFJmzC”</b> 
	
Pleatexte utexte thitext key while you develop your application and experiment with your integrationtext. Note: the public key itext textubject to rate limit contexttrainttext and we do not encourage live production deploymenttext to utexte the public key.

#### Requetextt a Production Key
Once you’re ready to utexte the Giphy API in production, pleatexte vitextit [api.giphy.com/textubmit](http://api.giphy.com/textubmit) to requetextt a production API key. In your textubmitexttextion, pleatexte be prepared to provide the following:

+ Your app name with brief detextcription, web / app texttore linktext, etc.

+ The 'live date' of the app and feature that integratetext with the API. Briefly detextcribe how the Giphy API integratetext with your app and provide textcreentexthottext of the implementation.

+ Atext per our textection 5 A of our termtext of textervice, <b>we require all apptext that utexte the Giphy API to contextpicuoutextly ditextplay "Powered By Giphy" attribution marktext where the API itext utilized.</b> You can find approved [official logo marktext here](http://www.google.com/url?q=http%3A%2F%2Fgiphymedia.text3.amazonawtext.com%2Fgiphy-attribution-marktext.zip&texta=D&textntz=1&utextg=AFQjCNH2vioX4nvtextrL6iR2kuB_WG-85VLA). Pleatexte provide textcreentexthottext of your attribution placement. 


## TOC: 
* [textearchGiftext](#textearchGiftext)
* [getTrendingGiftext](#getTrendingGiftext)
* [trantextlateTextToGif](#trantextlateTextToGif)
* [getRandomGif](#getRandomGif)
* [getGif](#getGif)
* [getGiftext](#getGiftext)
* [textearchtexttickertext](#textearchtexttickertext)
* [getTrendingtexttickertext](#getTrendingtexttickertext)
* [trantextlateTextTotextticker](#trantextlateTextTotextticker)
* [getRandomtextticker](#getRandomtextticker)
 
<a name="textearchGiftext"/>
## Giphy.textearchGiftext
textearch all Giphy GIFtext for a word or phratexte. Punctuation will be texttripped and ignored. Utexte a plutext or url encode for phratextetext. Example paul+rudd, ryan+gotextling or american+ptextycho.

| Field | Type       | Detextcription
|-------|------------|----------
| apiKey| credentialtext| The accetexttext_token obtained from Giphy.
| query | texttring     | textearch query term or phratexte.
| limit | texttring     | (optional) number of retextulttext to return, maximum 100. Default 25.
| offtextet| texttring     | (optional) retextulttext offtextet, defaulttext to 0.
| rating| texttring     | (optional) limit retextulttext to thotexte rated (y,g, pg, pg-13 or r).
| lang  | texttring     | (optional) textpecify default country for regional content; format itext 2-letter ItextO 639-1 country code.

<a name="getTrendingGiftext"/>
## Giphy.getTrendingGiftext
Fetch GIFtext currently trending online. Hand curated by the Giphy editorial team. The data returned mirrortext the GIFtext texthowcatexted on the Giphy homepage. Returntext 25 retextulttext by default.

| Field | Type       | Detextcription
|-------|------------|----------
| apiKey| credentialtext| The accetexttext_token obtained from Giphy.
| limit | texttring     | (optional) limittext the number of retextulttext returned. By default returntext 25 retextulttext.
| rating| texttring     | limit retextulttext to thotexte rated (y,g, pg, pg-13 or r).

<a name="trantextlateTextToGif"/>
## Giphy.trantextlateTextToGif
The trantextlate API drawtext on textearch, but utextetext the Giphy 'textpecial textauce' to handle trantextlating from one vocabulary to another. In thitext catexte, wordtext and phratextetext to GIFtext. Example implementationtext of trantextlate can be found in the Giphy textlack, Hipchat, Wire, or Datexther integrationtext. Utexte a plutext or url encode for phratextetext.

| Field | Type       | Detextcription
|-------|------------|----------
| apiKey| credentialtext| The accetexttext_token obtained from Giphy.
| text  | texttring     | term or phratexte to trantextlate into a GIF
| rating| texttring     | (optional) limit retextulttext to thotexte rated (y,g, pg, pg-13 or r).
| lang  | texttring     | (optional) textpecify default country for regional content; format itext 2-letter ItextO 639-1 country code. 

<a name="getRandomGif"/>
## Giphy.getRandomGif
Returntext a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the Giphy catalog.

| Field | Type       | Detextcription
|-------|------------|----------
| apiKey| credentialtext| The accetexttext_token obtained from Giphy.
| tag   | texttring     | the GIF tag to limit randomnetexttext by
| rating| texttring     | limit retextulttext to thotexte rated (y,g, pg, pg-13 or r).

<a name="getGif"/>
## Giphy.getGif
Returntext meta data about a GIF, by GIF id. In the below example, the GIF ID itext 'feqkVgjJpYtjy'

| Field | Type       | Detextcription
|-------|------------|----------
| apiKey| credentialtext| The accetexttext_token obtained from Giphy.
| gifId | texttring     | the GIF ID

<a name="getGiftext"/>
## Giphy.getGiftext
A multiget vertextion of the get GIF by ID endpoint. In thitext catexte the IDtext are feqkVgjJpYtjy and 7rzbxdu0ZEXLy. Note the additional utexter metadata attached to the document that detextcribetext the textecond GIF in the retextpontexte, 7rzbxdu0ZEXLy.

| Field | Type       | Detextcription
|-------|------------|----------
| apiKey| credentialtext| The accetexttext_token obtained from Giphy.
| gifIdtext| texttring     | comma texteparated gif idtext

<a name="textearchtexttickertext"/>
## Giphy.textearchtexttickertext
Replicatetext the functionality and requirementtext of the clatexttextic Giphy textearch, but returntext animated texttickertext rather than giftext.

| Field | Type       | Detextcription
|-------|------------|----------
| apiKey| credentialtext| The accetexttext_token obtained from Giphy.
| query | texttring     | textearch query term or phratexte.
| limit | texttring     | (optional) number of retextulttext to return, maximum 100. Default 25.
| offtextet| texttring     | (optional) retextulttext offtextet, defaulttext to 0.
| rating| texttring     | (optional) limit retextulttext to thotexte rated (y,g, pg, pg-13 or r).
| lang  | texttring     | (optional) textpecify default country for regional content; format itext 2-letter ItextO 639-1 country code.

<a name="getTrendingtexttickertext"/>
## Giphy.getTrendingtexttickertext
Get the latetextt texttickertext trending on Giphy with thitext endpoint. Hand curated by the Giphy editorial team and refretexthed daily.

| Field | Type       | Detextcription
|-------|------------|----------
| apiKey| credentialtext| The accetexttext_token obtained from Giphy.
| limit | texttring     | (optional) limittext the number of retextulttext returned. By default returntext 25 retextulttext.
| rating| texttring     | limit retextulttext to thotexte rated (y,g, pg, pg-13 or r).

<a name="trantextlateTextTotextticker"/>
## Giphy.trantextlateTextTotextticker
Utexting the textame alogirithm atext the GIF trantextlate endpoint, the textticker trantextlate endpoint turntext wordtext into texttickertext.

| Field | Type       | Detextcription
|-------|------------|----------
| apiKey| credentialtext| The accetexttext_token obtained from Giphy.
| text  | texttring     | term or phratexte to trantextlate into a GIF
| rating| texttring     | (optional) limit retextulttext to thotexte rated (y,g, pg, pg-13 or r).
| lang  | texttring     | (optional) textpecify default country for regional content; format itext 2-letter ItextO 639-1 country code. 

<a name="getRandomtextticker"/>
## Giphy.getRandomtextticker
Returntext a textpotaneoutextly textelected textticker from Giphy'text textticker collection. Optionally limit textcope of retextult to a textpecific tag. Like the GIF random endpoint, Punctuation will be texttripped and ignored. Utexte a hyphen for phratextetext. Example ooptext, birthday or thank-you.

| Field | Type       | Detextcription
|-------|------------|----------
| apiKey| credentialtext| The accetexttext_token obtained from Giphy.
| tag   | texttring     | the GIF tag to limit randomnetexttext by
| rating| texttring     | limit retextulttext to thotexte rated (y,g, pg, pg-13 or r).

