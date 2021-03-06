# What?

An attempt to build HTML5 games using TeaVM (bytecode compiler) instead of Google Web Toolkit (Java compiler). This enables coding in Kotlin or any JVM alternative.

See https://namek.github.io/teavm-libgdx/ for complete list of ported games, originally made as libgdx demos.

# libgdx invaders demo

![invaders](/demos/invaders/screenshot.jpg "Invaders")

Official build made with GWT can be found here -> https://libgdx.badlogicgames.com/ci/demos/invaders/

# Build

1. From command line enter root directory, then `mvn package` 
2. Launch any HTTP server from the `demos/invaders/webapp/target/teavm-libgdx-invaders-webapp-0.1.0-SNAPSHOT/` folder or copy it's contents to some web hosting server
3. Open browser with your website URL and play.

`mvn package` is a shortcut for `mvn package -P all-games,all-platforms` so if you don't want to build all games and/or all platforms, then use maven profiles:
    
    mvn package -P superjumper
    mvn package -P superjumper,desktop
    mvn package -P superjumper,webapp
    mvn package -P invaders
    mvn package -P invaders,webapp
    mvn package -P invaders,desktop

# Credits

Build is possible thanks to [TeaVM](https://github.com/konsoletyper/teavm)!
