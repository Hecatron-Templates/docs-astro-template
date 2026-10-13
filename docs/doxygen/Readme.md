# Readme

This doxygen configuration generates API docs from the specified source  
This is rendered via iframe.

  * https://www.doxygen.nl/download.html

Graphviz is also required for the diagrams

  * https://graphviz.org/download/


```sh
doxygen
```

## TODO

Once a release includes this pull request
https://github.com/doxygen/doxygen/pull/12347

switch to
```
DOT_IMAGE_FORMAT       = svg:cairo
```
