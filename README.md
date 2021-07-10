# electron-docker-starter

***Electron in Docker Starter for multiple platforms***

This provides examples for how to run **Electron** in **Docker** (via **electron-builder** & **Vue**, using `vue-cli-electron-builder`).

Included are example scripts for building/running containers for Linux (tested Ubuntu) (`linux/amd64`) and Intel Macs, as well as the Mac M1 (Apple Silicon, `linux/amd64`).

## Included Platforms

| Target OS     | Architecture  | Run Flag      |
| ------------- | ------------- | ------------- |
| Linux         | `linux/amd64` | `--linux-amd` |
| macOS (M1)    | `linux/arm64` | `--macos-arm` |
| macOS (Intel) | `linux/amd64` | `--macos-amd` |

## Build & Run

To build container images, run the following with the appropriate command based on the above table.

`cd view`

`./docker/start.sh <flag>`
