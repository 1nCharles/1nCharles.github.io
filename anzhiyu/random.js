var posts=["2025/02/26/hgame week2/","2025/02/26/hgame/","2025/02/26/VNCTF WP/","2025/03/09/GHCTF WP/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };