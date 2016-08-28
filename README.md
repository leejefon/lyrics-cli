## Chinese Song Lyrics Cli

This module searches lyrics on command line.

### Install

```shell
npm install -g lyrics-cli
```

### Usage

```
lyrics 歌名 [歌手名]
```

Example:

```
lyrics 說好的幸福呢
lyrics 突然好想你 五月天
lyrics 'my heart will go on' 'celine dion'
```

### Notes

Lyrics API: http://doc.gecimi.com/en/latest/

Since the API only supports simplified Chinese, the conversion between simplfied and traditional Chinese characters are done with node module [chinese-conv](https://github.com/Pleasurazy/chinese-conv).
