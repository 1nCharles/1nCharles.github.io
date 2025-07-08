var posts=["2025/02/26/VNCTF WP/","2025/03/09/GHCTF WP/","2025/02/26/hgame/","2025/02/26/hgame week2/","2025/03/13/lg v30 lineage os 编译/","2025/07/08/pixel6 aosp14编译 升级内核/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };