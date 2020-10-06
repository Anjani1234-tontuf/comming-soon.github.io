# videojs-5.0-dailymotion
Dailymotion playback technology for Video.js 5.0 +

# Dailymotion Playback Technology for [Video.js](https://github.com/videojs/video.js)

**HELP AND CONTRIBUTION. This is based on videojs-youtube extension**
>I need help and contribution to make it work for video.js 5.0. This is the first version and it do not work as expected.
For now, you have to alternate between MP4 and Dailymotion video to change video
**TO DO**
*   Make video buttons control work
*   Progress bar
*   There's lot of the youtube.js codes who is not used and i let it there to use or delete it later

**To Help [Edit on Plunker](https://plnkr.co/edit/s6Ql4I324cYioADy9CPS?p=preview)**

**[Current demo](https://rawgit.com/onigetoc/videojs-5.0-dailymotion/master/demo-DM-YT.html)**

**[Dailymotion + Youtube compatibility test demo](https://cdn.rawgit.com/onigetoc/videojs-5.0-dailymotion/master/demo-DM-YT.html)**

## Install
The only file you need is dist/DM.min.js.

## Example
```html
<!DOCTYPE html>
<html>
<head>
  <link type="text/css" rel="stylesheet" href="../node_modules/video.js/dist/video-js.min.css" />
</head>
<body>
  <video
    id="vid1"
    class="video-js vjs-default-skin"
    controls
    autoplay
    width="640" height="264"
    data-setup='{ "techOrder": ["dailymotion"], "sources": [{ "type": "video/dailymotion", "src": "https://www.dailymotion.com/video/xgz4t1"}] }'
  >
  </video>
	<link rel="stylesheet" media="screen" href="https://vjs.zencdn.net/5.11.9/video-js.css">
	<script src="https://vjs.zencdn.net/5.11.9/video.js"></script>
  <script src="/dist/DM.min.js"></script>
</body>
</html>
```

See the examples folder for more

## How does it work?
Including the script DM.min.js will add the YouTube as a tech. You just have to add it to your techOrder option. Then, you add the option src with your YouTube URL.

It supports:
- dailymotion.com
- Regular URLs: https://www.dailymotion.com/video/xgz4t1
- Embeded URLs: NOT IMPLEMENTED YET
- Playlist URLs: NOT IMPLEMENTED YET https://www.dailymotion.com/playlist/x2zy2a

## Options
It supports every regular Video.js options. Additionally, you can change any [Dailymotion parameter](https://developers.google.com/youtube/player_parameters?hl=en#Parameters). Here is an example of setting the `iv_load_policy` parameter to `1`.

```html
<video
  id="vid1"
  class="video-js vjs-default-skin"
  controls
  autoplay
  width="640" height="264"
  data-setup='{ "techOrder": ["dailymotion"], "sources": [{ "type": "video/dailymotion", "src": "https://www.dailymotion.com/video/x2j4h4m"}], "dailymotion": { "iv_load_policy": 1 } }'
>
</video>
```

### Dailymotion controls
Because `controls` is already a Video.js option, to use the YouTube controls, you must set the `ytControls` parameter.

```html
<video
  id="vid1"
  class="video-js vjs-default-skin"
  controls
  autoplay
  width="640" height="264"
  data-setup='{ "techOrder": ["dailymotion"], "sources": [{ "type": "video/dailymotion", "src": "https://www.dailymotion.com/video/x2j4h4m"}], "dailymotion": { "ytControls": 2 } }'
>
</video>
```

### Custom Player Options
If you need to set any additional options on the YouTube player, you may do so with the `customVars` parameter:

```html
<video
  id="vid1"
  class="video-js vjs-default-skin"
  controls
  autoplay
  width="640" height="264"
  data-setup='{ "techOrder": ["dailymotion"], "sources": [{ "type": "video/dailymotion", "src": "https://www.dailymotion.com/video/x2j4h4m"}], "dailymotion": { "customVars": { "wmode": "transparent" } } }'
>
</video>
```

### Special Thank You
Thanks to Steve Heffernan for the amazing Video.js and to Benoit Tremblay for youtube.js extension for the code who inspired and is based for DM.js

[Markdown created with Edit Convert HTML to Markdown](http://www.codesniff.com/editconvert/)

## License
The MIT License (MIT)

Copyright (c) Gino Côté <secret@gmail.com> and videojs-DM contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

