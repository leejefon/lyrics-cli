## Chinese Song Lyrics Cli

This module searches lyrics on command line.

### Install

Since I haven't put it on npm registry yet, you can install locally.

```shell
npm install -g .
```

### Usage

```
lyrics 歌名 [歌手名]
```

Example:

```
lyrics 突然好想你 五月天
```

### Notes

Lyrics API: http://doc.gecimi.com/en/latest/

Since the API only supports simplified Chinese, the conversion between simplfied and traditional Chinese characters are done with node module [chinese-conv](https://github.com/Pleasurazy/chinese-conv).
