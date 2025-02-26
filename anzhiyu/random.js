var posts=["2025/02/26/hgame week2/","2025/02/26/hgame/","2025/02/26/VNCTF WP/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };