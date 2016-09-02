## Chinese Song Lyrics Cli

This module searches lyrics on command line.

### Install

```shell
npm install -g lyrics-cli
```

### Usage

```
Usage: lyrics [options] <name> [artist]

 Options:

   -h, --help            output usage information
   -V, --version         output the version number
   -s, --source <value>  API to use (gecimi, wangyiyun)
```

Example:

```
lyrics 說好的幸福呢 -s gecimi
lyrics 海闊天空 信樂團
lyrics 'my heart will go on' 'celine dion'
```

### TODO

- Error handling
- Tests
- Remove time
- Show different results

### Notes

##### Lyrics API 1 (網易雲): http://music.163.com

##### Lyrics API 2 (歌詞迷): http://doc.gecimi.com/en/latest/

Since the API supports only simplified Chinese, the conversion between simplfied and traditional Chinese characters are done with node module [chinese-conv](https://github.com/Pleasurazy/chinese-conv).
